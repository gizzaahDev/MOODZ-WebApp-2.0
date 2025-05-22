"use client"

import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  color: string
  opacity: number
  life: number
  maxLife: number
  velocityX: number
  velocityY: number
}

export default function CursorParticles() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const particlesRef = useRef<Particle[]>([])
  const requestRef = useRef<number>()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particleCount = 15 // Number of particles to emit on each mouse move
  const colors = ["#016a70", "#ffffff", "#018f96", "#01575c", "#00d1df"]

  // Track mouse position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)

      // Create new particles on mouse move
      for (let i = 0; i < particleCount; i++) {
        createParticle(e.clientX, e.clientY)
      }
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(requestRef.current!)
    }
  }, [])

  // Initialize canvas and animation
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Set canvas to full window size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Animation loop
    const animate = () => {
      const ctx = canvas.getContext("2d")
      if (!ctx) return

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.velocityX
        particle.y += particle.velocityY

        // Update life
        particle.life--

        // Update opacity based on life
        particle.opacity = particle.life / particle.maxLife

        // Draw particle
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${Math.floor(particle.opacity * 255)
          .toString(16)
          .padStart(2, "0")}`
        ctx.fill()

        // Remove dead particles
        if (particle.life <= 0) {
          particlesRef.current.splice(index, 1)
        }
      })

      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(requestRef.current!)
    }
  }, [])

  // Create a new particle
  const createParticle = (x: number, y: number) => {
    const size = Math.random() * 5 + 1
    const color = colors[Math.floor(Math.random() * colors.length)]
    const maxLife = Math.random() * 40 + 20

    const particle: Particle = {
      id: Math.random(),
      x,
      y,
      size,
      color,
      opacity: 1,
      life: maxLife,
      maxLife,
      velocityX: (Math.random() - 0.5) * 3,
      velocityY: (Math.random() - 0.5) * 3,
    }

    particlesRef.current.push(particle)
  }

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          pointerEvents: "none",
          zIndex: 9999,
        }}
      />
      <motion.div
        className="cursor"
        style={{
          position: "fixed",
          left: mousePosition.x,
          top: mousePosition.y,
          width: 20,
          height: 20,
          borderRadius: "50%",
          backgroundColor: "transparent",
          border: "2px solid #016a70",
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
          transform: "translate(-50%, -50%)",
        }}
        animate={{
          scale: isVisible ? [0.8, 1.2, 1] : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
    </>
  )
}
