"use client"

import React from "react"
import { Container, Box, Typography, Paper } from "@mui/material"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ResearchProblem() {
  return (
    <Box
      sx={{
        bgcolor: "#000",
        py: 10,
        backgroundImage: `radial-gradient(circle at 1px 1px, #444 1px, transparent 0)`,
        backgroundSize: "20px 20px",
        position: "relative",
        overflow: "hidden",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "linear-gradient(45deg, rgba(0,0,0,0.8), rgba(0,0,0,0.2))",
          zIndex: 1,
        },
      }}
      id="research-problem"
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography variant="h3" component="h2" sx={{ mb: 6, color: "#00abb4", textAlign: "center" }}>
            Research Problem & Solution
          </Typography>

          <Box id="proposed-problem" sx={{ mb: 10 }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h4" component="h3" sx={{ mb: 4, color: "#00abb4", textAlign: { xs: 'center', md: 'left' } }}>
                Proposed Problem
              </Typography>

              <Box sx={{ display: "flex", flexDirection: "row", gap: 4 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: { xs: 1, md: 4 },
                    bgcolor: "rgba(17,17,17,0.9)",
                    color: "white",
                    mb: 4,
                    flex: 1,
                  }}
                >
                  <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                    <li>
                      Depression is a widespread and debilitating mental health condition affecting individuals across all
                      age groups and social backgrounds. Vulnerable populations such as children, elderly individuals,
                      postpartum women, and married couples are particularly at risk, often experiencing unique stressors
                      that contribute to the onset and persistence of depressive symptoms. Despite increased awareness and
                      therapeutic advancements, current mental health interventions frequently fall short due to issues of
                      accessibility, personalization, and long-term engagement. Most existing digital solutions offer
                      generic recommendations and lack integration of validated, group-specific assessment tools, making
                      them ineffective in providing targeted care.
                    </li>
                  </Box>
                </Paper>

                
              </Box>
            </motion.div>
          </Box>

          <Box id="proposed-solution">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <Typography variant="h4" component="h3" sx={{ mb: 4, color: "#00abb4", textAlign: { xs: 'center', md: 'left' } }}>
                Proposed Solution
              </Typography>

              <Paper
                elevation={3}
                sx={{
                  p: { xs: 1, md: 4 },
                  bgcolor: "rgba(17,17,17,0.2)",
                  color: "white",
                  mb: 4,
                  backdropFilter: "blur(5px)",
                }}
              >
                <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                  <li>
                    To address these limitations, this research introduces MOODZ, a comprehensive mobile application
                    designed to detect, classify, and alleviate depression across four key demographic groups: children,
                    elderly individuals, married couples, and postpartum women. MOODZ integrates clinically validated
                    assessment tools—CES-DC for children, GDS for elderly, DAS for married couples, and EPDS for
                    postpartum women—with machine learning models to classify depression levels as low, moderate, or high.
                    Based on these results, the app generates personalized interventions, including relaxation exercises,
                    yoga routines, meditation sessions, community-based support activities, gamified emotional tasks, and
                    relationship-enhancing exercises. For children, image-based mood detection is incorporated to improve
                    engagement and accuracy. The app also enables real-time progress tracking, providing visual feedback to
                    users and caregivers. With its cross-platform compatibility, secure firebase backend, and user-friendly
                    interface, MOODZ offers scalable, stigma-free, and clinically grounded mental health care.
                    Additionally, ethical considerations such as informed consent, data anonymization, and expert
                    validation ensure that the solution is both scientifically sound and socially responsible.
                  </li>
                </Box>
                <Box sx={{ 
                  position: "relative", 
                  width: "100%", 
                  height: 300,
                  mx: 0,
                  mt: 2,
                  px: 0
                }}>
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      borderRadius: 0,
                    }}
                  >
                    <source 
                      src="https://firebasestorage.googleapis.com/v0/b/testdb-8ea15.firebasestorage.app/o/Moodz%20Web%2FMOODZ.mp4?alt=media&token=7364a067-2357-48ff-92a4-f6ca7f7bc649" 
                      type="video/mp4" 
                    />
                    Your browser does not support the video tag.
                  </video>
                </Box>
              </Paper>
              
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}