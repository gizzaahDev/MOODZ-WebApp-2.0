"use client"

import React, { useEffect, useRef } from "react"
import { Container, Box, Typography, Paper, Grid, Button } from "@mui/material"
import { motion } from "framer-motion"


const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const documents = [
  { 
    title: "Topic Assessment",
    date: "2024/07/24",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FTAF_24-25J-253.pdf?alt=media&token=807d38bc-9cd4-4227-bef4-8b9ec63d31ea"
  },
  
  {
    title: "Project Proposal",
    date: "2024/08/13",
    type: "Individual",
    file: null,
    members: [
        { name: "Member 1", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FYoshitha_ppr24-25J-253_IT21358098.pdf?alt=media&token=c534a9ac-5f54-4d41-a1b5-6a09527ac0d9" },
        { name: "Member 2", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2F24-25J-253_IT21360282%20Proposal%20Report.pdf?alt=media&token=df740ffc-3652-4a3a-baa0-5b7f56550bf3" },
        { name: "Member 3", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FThisera_ppr24-25J-253_IT21204166.pdf?alt=media&token=9949336d-ffd0-4be5-acb5-3652f617186f" },
        { name: "Member 4", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FNethma_ppr24-25J-253_IT21282454.pdf?alt=media&token=1244d7ec-7beb-4436-870e-b9210ed3f7bc" }
      ]
  },
  {
    title: "Progress Presentation I",
    date: "2024/12/05",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FProposal%20Presentation%20I%20-%20MOODZ.pdf?alt=media&token=28e163a9-5960-4d26-abdb-cb117545160f"
  },
  {
    title: "Progress Presentation II",
    date: "2025/03/19",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FProgrss_Presentation_2_-_MOODZ.pdf?alt=media&token=bd0edf52-3e3b-4c7d-ae3e-4adf327a193d"
  },
  {
    title: "Research Paper",
    date: "2025/04/25",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FMOODZ_research_paper.pdf?alt=media&token=6bcd2462-4a70-442d-bea0-aa7bd70fb4f8"
  },
  {
    title: "Individual Final Reports",
    date: "2024/08/23",
    type: "Individual",
    file: null,
    members: [
        { name: "Member 1", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FTennakoon%20T.M.Y.N_Final%20report.pdf?alt=media&token=3917cb2e-acc5-499a-bc2f-ab341e1be017" },
        { name: "Member 2", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FJayathilaka%20D.V.G_Final%20report.pdf?alt=media&token=27c5da20-2027-432a-9368-7b9a9168a994" },
        { name: "Member 3", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FThisera%20K.G_Final%20report.pdf?alt=media&token=e8ee36b6-256e-48db-bd97-a059b6bf23ad" },
        { name: "Member 4", file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FSandumina%20B.N_Final%20report.pdf?alt=media&token=1b65051f-cf19-4535-8ed1-e46d2fba0ba9" }
      ]
  },
  {
    title: "Final Report",
    date: "2025/04/10",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2F24_25J_253_Group_Final_Report.pdf?alt=media&token=4b153f40-eba3-4b71-bdeb-8c6b6d1b5e0b"
  },
  {
    title: "Poster",
    date: "2025/04/03",
    type: "Group",
    file: "/assets/Post.png",
    icon: "/assets/image.png"
  }
]

const presentations = [
  {
    title: "Project Proposal",
    date: "2024/08/13",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FProposal%20Presentation%20-%20MOODZ.pptx?alt=media&token=d052fe3f-373c-4cbe-8069-60314b554d71"
  },
  {
    title: "Progress Presentation I",
    date: "2024/12/05",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2F24-25J-253_Progress_Presentation(PP1).pptx?alt=media&token=4c42a8e1-d39f-4195-8dfa-98265108212c"
  },
  {
    title: "Progress Presentation II",
    date: "2025/03/19",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FProgrssPresentation%202-MOODZ.pptx?alt=media&token=35dbaa42-eaad-40c5-a4fe-4737c34dc025"
  },
  {
    title: "Final Presentation",
    date: "28/05/2025",
    type: "Group",
    file: "https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FFinal_Presentation_-_MOODZ.pdf?alt=media&token=a040b758-6847-44ce-bcac-c323a4ad41d0"
  }
]

export default function Downloads() {
  const canvasRef = useRef(null)
  const containerRef = useRef(null)
  const mouseRef = useRef({ x: 0, y: 0, isInside: false })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    const ctx = canvas.getContext("2d")
    let animationFrameId

    // Set canvas size to match the container
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }
    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Dot properties
    const dots = []
    const gridSpacing = 30
    const maxDistance = 100
    const bigDotRadius = 10

    // Create grid of dots
    const createDots = () => {
      dots.length = 0 // Clear existing dots
      for (let x = 0; x < canvas.width; x += gridSpacing) {
        for (let y = 0; y < canvas.height; y += gridSpacing) {
          dots.push({
            x,
            y,
            originalX: x,
            originalY: y,
            radius: 2,
          })
        }
      }
    }
    createDots()

    // Mouse move handler
    const handleMouseMove = (event) => {
      const rect = container.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top

      // Check if mouse is inside the container
      if (x >= 0 && x <= rect.width && y >= 0 && y <= rect.height) {
        mouseRef.current = { x, y, isInside: true }
      } else {
        mouseRef.current.isInside = false
      }
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = "#888"

      // Update and draw dots
      dots.forEach((dot) => {
        if (mouseRef.current.isInside) {
          const dx = mouseRef.current.x - dot.x
          const dy = mouseRef.current.y - dot.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDist = maxDistance
          const force = Math.max(0, (maxDist - distance) / maxDist)

          // Move dots toward cursor (water-drop effect)
          dot.x = dot.originalX + (dx / distance) * force * 20
          dot.y = dot.originalY + (dy / distance) * force * 20
          dot.radius = 1 + force * 1.5 // Slightly increase size near cursor
        } else {
          // Reset dots to original position when mouse is outside
          dot.x = dot.originalX
          dot.y = dot.originalY
          dot.radius = 1
        }

        ctx.beginPath()
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      // Draw larger cursor dot only if mouse is inside
      if (mouseRef.current.isInside) {
        ctx.beginPath()
        ctx.arc(mouseRef.current.x, mouseRef.current.y, bigDotRadius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(136, 136, 136, 0.8)"
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <Box
      ref={containerRef}
      sx={{ position: "relative", bgcolor: "#010f10", py: 10 }}
      id="downloads"
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography variant="h3" component="h2" sx={{ mb: 6, color: "#00abb4", textAlign: "center" }}>
            Downloads
          </Typography>

          <Grid container spacing={4} sx={{ mb: 4 }}>
            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 4, bgcolor: " rgba(17, 17, 17, 0.1)", color: "white", backdropFilter: "blur(2px)" }} id="documents">
                <Typography variant="h5" sx={{ color: "#00abb4", mb: 3 }}>
                  Documents
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Please find all documents related to this project below.
                </Typography>
                <Grid container spacing={3} justifyContent="center">
                  {documents.map((doc, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Paper 
                        elevation={3} 
                        sx={{ 
                          p: 2, 
                          bgcolor: "#f3faf4", 
                          width: 250, 
                          height: 250, 
                          position: "relative",
                          transition: "transform 0.2s ease-in-out",
                          '&:hover': {
                            transform: "scale(1.05)",
                          }
                        }}
                      >
                        <Box sx={{ 
                          display: "flex", 
                          flexDirection: "column", 
                          height: "100%"
                        }}>
                          <Box sx={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: 1,
                            position: "absolute",
                            top: 16,
                            left: 16
                          }}>
                            <img 
                              src={doc.icon || "/assets/pdf.png"}
                              alt="File icon" 
                              style={{ width: 20, height: 20 }} 
                            />
                            <Typography 
                              variant="subtitle1" 
                              sx={{ 
                                fontWeight: 500,
                                color: "#222",
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                maxWidth: "200px"
                              }}
                            >
                              {doc.title}
                            </Typography>
                          </Box>
                          <Box sx={{ mt: 4 }}>
                            <Typography variant="body2" sx={{ color: "#444", mb: 1 }}>
                              Submitted on {doc.date}
                            </Typography>
                          </Box>
                          <Box sx={{ mt: "auto", width: "100%" }}>
                            <Box sx={{ borderBottom: "1px solid #CBCCCC", width: "100%", mb: 2 }} />
                            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
                              <Typography variant="body2" sx={{ color: "#016a70" }}>
                                {doc.type}
                              </Typography>
                              {doc.file ? (
                                <Button
                                  variant="outlined"
                                  size="small"
                                  sx={{ color: "#016a70", borderColor: "#016a70" }}
                                  component="a"
                                  href={doc.file}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  Download
                                </Button>
                              ) : doc.members ? (
                                <Box sx={{ position: "relative" }}>
                                  <Button
                                    variant="outlined"
                                    size="small"
                                    sx={{ color: "#016a70", borderColor: "#016a70" }}
                                    onClick={(e) => {
                                      e.stopPropagation()
                                      const dropdown = document.getElementById(`dropdown-${index}`)
                                      if (dropdown) {
                                        dropdown.style.display = dropdown.style.display === "block" ? "none" : "block"
                                      }
                                    }}
                                  >
                                    Download
                                  </Button>
                                  <Box
                                    id={`dropdown-${index}`}
                                    sx={{
                                      display: "none",
                                      position: "absolute",
                                      bottom: "100%",
                                      right: 0,
                                      width: "100%",
                                      bgcolor: "#1a1a1a",
                                      boxShadow: 3,
                                      zIndex: 1,
                                      mb: 1
                                    }}
                                  >
                                    {doc.members.map((member, i) => (
                                      <Button
                                        key={i}
                                        fullWidth
                                        sx={{ 
                                          color: "#016a70", 
                                          justifyContent: "flex-start",
                                          textTransform: "none",
                                          '&:hover': {
                                            bgcolor: "#2a2a2a"
                                          }
                                        }}
                                        component="a"
                                        href={member.file}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        {member.name}
                                      </Button>
                                    ))}
                                  </Box>
                                </Box>
                              ) : (
                                <Typography variant="body2" sx={{ color: "#666" }}>
                                  Coming soon
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>

            <Grid item xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 5, color: "white", backdropFilter: "blur(2px)", backgroundColor: "#0000001a" }} id="presentations">
                <Typography variant="h5" sx={{ color: "#00abb4", mb: 3 }}>
                  Presentations
                </Typography>
                <Typography variant="body1" sx={{ mb: 3 }}>
                  Please find all presentations related to this project below.
                </Typography>
                <Grid container spacing={3} justifyContent="center" >
                  {presentations.map((pres, index) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                      <Paper 
                        elevation={3} 
                        sx={{ 
                          p: 2, 
                          bgcolor: "#f3faf4", 
                          width: 250,
                          height: 250,
                          position: "relative",
                          transition: "transform 0.2s ease-in-out",
                          '&:hover': {
                            transform: "scale(1.05)",
                          }
                        }}
                      >
                        <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
                          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                            <img src="/assets/slide.png" alt="PowerPoint" style={{ 
                              width: '24px', 
                              height: '24px' 
                            }} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 500, color: "#222" }}>
                              {pres.title}
                            </Typography>
                          </Box>
                          <Typography variant="body2" sx={{ color: "#444", mb: 1 }}>
                            Submitted on {pres.date}
                          </Typography>
                          <Box sx={{ mt: "auto" }}>
                          <Box sx={{ borderBottom: "1px solid #CBCCCC", width: "100%", mb: 2 }} />
                            <Typography variant="body2" sx={{ color: "#016a70", mb: 1 }}>
                              {pres.type}
                            </Typography>
                            {pres.file ? (
                              <Button
                                variant="outlined"
                                fullWidth
                                sx={{ color: "#016a70", borderColor: "#016a70" }}
                                component="a"
                                href={pres.file}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                Download
                              </Button>
                            ) : (
                              <Typography variant="body2" sx={{ color: "#666", textAlign: "center" }}>
                                Coming soon
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </motion.div>
      </Container>
    </Box>
  )
}