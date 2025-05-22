"use client"

import React, { useState } from "react"
import { Container, Box, Typography, Paper } from "@mui/material"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Milestones() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <Container maxWidth="lg" sx={{ py: 10 }} id="milestones">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Typography
          variant="h3"
          component="h4"
          sx={{
            mb: 6,
            color: "#444",
            textAlign: "center",
            fontWeight: "bold",
            textTransform: "uppercase",
            letterSpacing: 2,
          }}
        >
          Milestones
        </Typography>

        <Paper elevation={3} sx={{ p: 4, bgcolor: "#1a1a1a", color: "white", borderRadius: 3 }}>
          <Box sx={{ position: "relative", py: 4 }}>
            <Box
              sx={{
                position: "absolute",
                left: { xs: 20, md: "50%" },
                top: 0,
                bottom: 0,
                width: 6,
                background: "linear-gradient(to bottom, #00b4d8, #0077b6)",
                transform: { md: "translateX(-50%)" },
                borderRadius: 2,
              }}
            />

            <Box sx={{ position: "relative" }}>
              {[
                {
                  date: "10th Apr 2024",
                  title: "Initial Group Formation",
                  description: "Research team formation and initial planning",
                },
                {
                  date: "12th Apr 2024",
                  title: "Supervisor & Co Supervisor Selection",
                  description: "Selected expert supervisors to guide research direction",
                },
                {
                  date: "24th June 2024",
                  title: "TAF Doc Submission",
                  description: "TAF Doc submission to the university",
                },
                {
                  date: "5th Jul 2024",
                  title: "TAF Viva",
                  description: "TAF Viva presentation to demonstrate research proposal and methodology to the evaluation panel",
                },
                {
                  date: "13th Aug 2024",
                  title: "Proposal Presentation",
                  description: "Presentation of the project proposal to the evaluation panel",
                },
                {
                  date: "23rd Aug 2024",
                  title: "Individual Report Submission",
                  description: "Submission of individual research reports for evaluation",
                },
                {
                  date: "5th Dec 2024",
                  title: "Progress Presentation I",
                  description: "First progress presentation to showcase project development",
                },
                {
                  date: "19th Mar 2025",
                  title: "Progress Presentation II",
                  description: "Second progress presentation to demonstrate project advancements",
                },
                {
                  date: "3rd - 6th Apr 2025",
                  title: "Silver Jubilee Event",
                  description: "Presentation at SLIIT Silver Jubilee Exhibition",
                },
                {
                  date: "10th Apr 2025",
                  title: "Final Report Submission",
                  description: "Submission of the final research report for evaluation",
                },
                {
                  date: "28th May 2025",
                  title: "Final Presentation and Viva",
                  description: "Final project presentation and viva voce examination",
                },
              ].map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    flexDirection: { xs: "row", md: index % 2 === 0 ? "row" : "row-reverse" },
                    mb: 6,
                    position: "relative",
                  }}
                >
                  <Box
                    component={motion.div}
                    animate={
                      hoveredIndex === index
                        ? {
                            scale: 1.2,
                            rotate: [0, 360],
                            background: "linear-gradient(45deg, #00b4d8, #0077b6)",
                            boxShadow: "0 0 15px rgba(0, 180, 216, 0.7)",
                            transition: {
                              rotate: { repeat: Infinity, duration: 2, ease: "linear" },
                              scale: { duration: 0.3 },
                              background: { duration: 0.3 },
                            },
                          }
                        : {
                            scale: 1,
                            rotate: 45,
                            background: "#0077b6",
                            boxShadow: "none",
                          }
                    }
                    sx={{
                      position: "absolute",
                      top: { xs: 0, md: "auto" }, // Align to top on mobile
                      inset: { xs: "auto", md: 0 }, // Use inset for md and up
                      margin: { xs: "0 auto", md: "auto" }, // Center horizontally, adjust for mobile
                      width: 25,
                      height: 25,
                      borderRadius: 2,
                      bgcolor: "#0077b6",
                      transform: "rotate(45deg)",
                      zIndex: 1,
                      transition: "all 0.3s ease",
                    }}
                  />

                  <Box
                    component={motion.div}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    whileHover={{
                      scale: 1.05,
                      rotate: { xs: -5, md: index % 2 === 0 ? -5 : 5 }, // Always rotate -5 for mobile
                      boxShadow: "0 8px 16px rgba(0, 180, 216, 0.3)",
                      background: "linear-gradient(10deg, rgba(0,180,216,0.1), rgba(0,119,182,0.1))",
                    }}
                    sx={{
                      width: { xs: "calc(100% - 20px)", md: "45%" }, // Reduced width for mobile
                      ml: { xs: 2, md: index % 2 === 0 ? "auto" : 0 }, // Reduced margin for mobile
                      mr: { xs: 0, md: index % 2 === 0 ? 0 : "auto" },
                      textAlign: { xs: "left", md: index % 2 === 0 ? "right" : "left" }, // Always left for mobile
                      px: { xs: 2, md: 3 }, // Reduced padding for mobile
                      py: { xs: 1.5, md: 2 }, // Reduced padding for mobile
                      bgcolor: "#222",
                      borderRadius: 2,
                      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                      transition: "all 0.3s ease",
                      cursor: "pointer",
                      position: "relative",
                      transform: { xs: "rotate(-5deg)", md: "none" }, // Rotate for mobile only
                      "&:hover::before": {
                        content: { xs: 'none', md: '""' }, // Hide for mobile
                        position: "absolute",
                        top: "50%",
                        left: index % 2 === 0 ? "100%" : "auto",
                        right: index % 2 === 0 ? "auto" : "100%",
                        height: "2px",
                        width: "40px",
                        background: "linear-gradient(to right, #00b4d8, #0077b6)",
                        transform: "translateY(-50%)",
                      },
                      "&:hover::after": {
                        content: { xs: 'none', md: '""' }, // Hide for mobile
                        position: "absolute",
                        top: "50%",
                        left: index % 2 === 0 ? "calc(100% + 40px)" : "auto",
                        right: index % 2 === 0 ? "auto" : "calc(100% + 40px)",
                        width: "12px",
                        height: "12px",
                        background: "#00b4d8",
                        transform: "translateY(-50%) rotate(45deg)",
                        boxShadow: "0 0 8px rgba(0, 180, 216, 0.5)",
                      },
                    }}
                  >
                    <Typography variant="h6" sx={{ 
                      color: "#00b4d8", 
                      fontWeight: "bold", 
                      letterSpacing: 1,
                      fontSize: { xs: '1rem', md: '1.25rem' } // Smaller font for mobile
                    }}>
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle1" sx={{ 
                      mb: 1, 
                      color: "#90e0ef",
                      fontSize: { xs: '0.875rem', md: '1rem' } // Smaller font for mobile
                    }}>
                      {item.date}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      color: "#ddd",
                      fontSize: { xs: '0.8rem', md: '0.875rem' } // Smaller font for mobile
                    }}>
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  )
}