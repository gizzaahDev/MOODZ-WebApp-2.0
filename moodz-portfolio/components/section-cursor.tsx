"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function SectionCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isInHome, setIsInHome] = useState(false)

  // Track mouse position and section visibility
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      // Check if we're in the home section
      const homeSection = document.getElementById("home")
      if (homeSection) {
        const homeSectionRect = homeSection.getBoundingClientRect()
        setIsInHome(
          window.scrollY <= homeSectionRect.bottom &&
          window.scrollY + window.innerHeight >= homeSectionRect.top
        )
      }
    }

    const handleScroll = () => {
      const homeSection = document.getElementById("home")
      if (homeSection) {
        const homeSectionRect = homeSection.getBoundingClientRect()
        setIsInHome(
          window.scrollY <= homeSectionRect.bottom &&
          window.scrollY + window.innerHeight >= homeSectionRect.top
        )
      }
    }

    const handleMouseEnter = () => {
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)
    document.body.addEventListener("mouseenter", handleMouseEnter)
    document.body.addEventListener("mouseleave", handleMouseLeave)

    // Initial check
    handleScroll()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
      document.body.removeEventListener("mouseenter", handleMouseEnter)
      document.body.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  if (!isInHome) return null

  return (
    <>
      {/* Background image (StressReliesBG.jpg) - already handled by the page component */}
      
      {/* Foreground image (HomeBG.png) with spotlight effect */}
      <motion.div
        className="spotlight-container"
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          zIndex: 2,
          backgroundImage: "url(/assets/HomeBG.png)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          maskImage: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0) 300px
          )`,
          WebkitMaskImage: `radial-gradient(
            circle at ${mousePosition.x}px ${mousePosition.y}px,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0) 300px
          )`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease-out"
        }}
      />
    </>
  )
}
