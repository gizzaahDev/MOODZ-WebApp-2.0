"use client"

import React, { useState, useEffect, useRef } from "react"
import { Box, Typography } from "@mui/material"
import SectionCursor from "@/components/section-cursor"
import { Contact2 } from "@/components/contact-2"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ProjectScope from "../components/ProjectScope"
import ResearchProblem from "../components/ResearchProblem"
import ResearchObjectives from "../components/ResearchObjectives"
import Methodology from "../components/Methodology"
import Technologies from "../components/Technologies"
import Milestones from "../components/Milestones"
import Downloads from "../components/Downloads"
import AboutUs from "../components/AboutUs"

export default function Home() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const sectionRefs = useRef<{ [key: string]: IntersectionObserverEntry | null }>({})
  const [isNavbarDark, setIsNavbarDark] = useState(false)

  const scrollToSection = (elementId: string) => {
    const element = document.querySelector(elementId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })

      setActiveSection(elementId)
    }
  }

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-80px 0px -20% 0px",
      threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
    }

    const darkSections = ["#research-problem", "#milestones", "#downloads"]

    const calculateActiveSection = (entries: IntersectionObserverEntry[]) => {
      // Store section visibility
      entries.forEach((entry) => {
        if (entry.target.id) {
          sectionRefs.current[`#${entry.target.id}`] = entry
        }
      })

      // Find the most visible section
      const visibleSections = Object.entries(sectionRefs.current)
        .filter(([_, entry]) => entry?.isIntersecting)
        .sort((a, b) => {
          const ratioA = a[1]?.intersectionRatio || 0
          const ratioB = b[1]?.intersectionRatio || 0
          return ratioB - ratioA
        })

      if (visibleSections.length > 0) {
        const mostVisibleSection = visibleSections[0][0]
        setActiveSection(mostVisibleSection)
        // Set navbar text color based on whether the most visible section is in darkSections
        setIsNavbarDark(darkSections.includes(mostVisibleSection))
      } else {
        setIsNavbarDark(false)
      }
    }

    const observer = new IntersectionObserver(calculateActiveSection, observerOptions)

    const sections = document.querySelectorAll("section, [id]")
    sections.forEach((section) => {
      if (section.id) {
        observer.observe(section)
      }
    })

    // Apply or remove .dark-text class based on isNavbarDark
    const navbar = document.querySelector("nav")
    if (navbar) {
      if (isNavbarDark) {
        navbar.classList.add("dark-text")
      } else {
        navbar.classList.remove("dark-text")
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [isNavbarDark])

  return (
    <Box sx={{ bgcolor: "#f3faf4", color: "white", minHeight: "100vh", pt: 0 }}>
      <SectionCursor />
      <Hero scrollToSection={scrollToSection} />
      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <ProjectScope />
      <ResearchProblem />
      <ResearchObjectives />
      <Methodology />
      <Technologies />
      <Milestones id="milestones" />
      <Downloads id="downloads" />
      <AboutUs />
      <Contact2
        title="Contact Us"
        description="We are available for questions, feedback, or collaboration opportunities. Let us know how we can help!"
        phone="(123) 34567890"
        email="email@example.com"
        web={{ label: "shadcnblocks.com", url: "https://shadcnblocks.com" }}
      />
      <Box sx={{ bgcolor: "black", color: "white", py: 4, textAlign: "center" }}>
        <Typography variant="body2">© {new Date().getFullYear()} MOODZ. All rights reserved.</Typography>
      </Box>
    </Box>
  )
}