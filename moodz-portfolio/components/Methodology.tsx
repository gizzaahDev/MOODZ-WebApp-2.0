"use client"

import React from "react"
import { Container, Box, Typography, Paper, Grid } from "@mui/material"
import { motion } from "framer-motion"
import { ContainerScroll } from "../components/container-scroll-animation"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function Methodology() {
  return (
    <Box
      sx={{
        bgcolor: "#f3faf4",
        py: 10,
        backgroundImage: `radial-gradient( #888 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
        color: "#e6e6e6",
      }}
      id="methodology"
    >
      <Container maxWidth="lg">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography variant="h3" component="h2" sx={{ mb: 6, color: "#016a70", textAlign: "center" }}>
            Methodology
          </Typography>

          <Grid container spacing={0}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  paddingTop: "56.25%",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <iframe
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Methodology Explanation"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper
                elevation={3}
                sx={{
                  p: { xs: 1, md: 4 },
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  backdropFilter: "blur(8px)",
                  color: "#444",
                  height: "100%",
                }}
              >
                <Typography variant="h5" sx={{ color: "#016a70", mb: 3, textAlign: { xs: "center", md: "left" } }}>
                  Research Approach
                </Typography>

                <ol style={{ paddingLeft: "20px" }}>
                  <li>
                    <Typography variant="body1" paragraph>
                      This study adopts a structured, interdisciplinary approach to develop and evaluate MOODZ, a mobile
                      application targeting depression across four key demographic groups: children, elderly individuals,
                      married couples, and postpartum women. By combining quantitative tools with qualitative insights, the
                      methodology ensures a comprehensive understanding of user needs. Standardized scales such as CES-DC,
                      GDS, DAS, and EPDS were used to assess depression levels, while external experts including
                      psychiatrists and counselors were involved to validate data collection and align the app with
                      evidence-based therapeutic practices.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" paragraph>
                      Participants were categorized into low, moderate, or high depression levels using machine learning
                      models based on responses to each scale. Personalized interventions were then introduced: married
                      couples received recommendations for love-enhancing activities and therapy; elderly individuals
                      engaged in yoga and meditation; postpartum women were offered image coloring, mood detection, and
                      community-based tasks; and children participated in digital drawing and storytelling. Each group's
                      progress was evaluated post-intervention to measure effectiveness and guide further improvements.
                    </Typography>
                  </li>
                  <li>
                    <Typography variant="body1" paragraph>
                      Technologically, the app was built using React Native for cross-platform functionality, with Firebase
                      for secure data storage and real-time updates. Data analysis and model training were conducted on
                      Google Colab, and version control was managed via GitHub. Ethical approval was obtained from the
                      university, ensuring data anonymization, secure storage, and informed consent from participants. With
                      expert input, validated tools, and a strong ethical framework, this methodology supports a
                      scientifically sound and user-centered solution to tackle depression across diverse populations.
                    </Typography>
                  </li>
                </ol>
              </Paper>
            </Grid>
          </Grid>
          <Box sx={{ mt: -20, mb: -20 }}>
            <ContainerScroll
              titleComponent={
                <Typography variant="h3" sx={{ color: "#016a70", mb: 3, textAlign: "center" }}>
                  System Architecture
                </Typography>
              }
            >
              <Box
                sx={{
                  textAlign: "center",
                  backdropFilter: "blur(8px)",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  p: { xs: 1, md: 4 },
                  borderRadius: 2,
                  cursor: "pointer",
                }}
                onClick={() => {
                  const img = new Image();
                  img.src = "/assets/SystemOverview.png";
                  const w = window.open("", "_blank");
                  if (w) {
                    w.document.write(`
                      <html>
                        <head>
                          <style>
                            body { margin: 0; overflow: hidden; }
                            .image-container {
                              position: fixed;
                              top: 0;
                              left: 0;
                              width: 100vw;
                              height: 100vh;
                              background: rgba(0,0,0,0.9);
                              display: flex;
                              justify-content: center;
                              align-items: center;
                            }
                            .close-btn {
                              position: absolute;
                              top: 20px;
                              right: 20px;
                              background: #fff;
                              border: none;
                              border-radius: 50%;
                              width: 40px;
                              height: 40px;
                              cursor: pointer;
                              font-size: 20px;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            }
                            .zoom-controls {
                              position: absolute;
                              bottom: 20px;
                              left: 50%;
                              transform: translateX(-50%);
                              display: flex;
                              gap: 10px;
                            }
                            .zoom-btn {
                              background: #fff;
                              border: none;
                              border-radius: 50%;
                              width: 40px;
                              height: 40px;
                              cursor: pointer;
                              font-size: 20px;
                              display: flex;
                              align-items: center;
                              justify-content: center;
                            }
                            img {
                              max-width: 100%;
                              max-height: 100%;
                              transition: transform 0.25s ease;
                            }
                          </style>
                        </head>
                        <body>
                          <div class="image-container">
                            <button class="close-btn" onclick="window.close()">×</button>
                            <div class="zoom-controls">
                              <button class="zoom-btn" onclick="zoomIn()">+</button>
                              <button class="zoom-btn" onclick="zoomOut()">-</button>
                            </div>
                            <img src="${img.src}" alt="MOODZ System Architecture Diagram" id="fullscreen-img">
                          </div>
                          <script>
                            let scale = 1;
                            const img = document.getElementById('fullscreen-img');
                            
                            function zoomIn() {
                              scale += 0.25;
                              img.style.transform = 'scale(' + scale + ')';
                            }
                            
                            function zoomOut() {
                              if (scale > 0.25) {
                                scale -= 0.25;
                                img.style.transform = 'scale(' + scale + ')';
                              }
                            }
                          </script>
                        </body>
                      </html>
                    `);
                    w.document.close();
                  }
                }}
              >
                <img
                  src="/assets/SystemOverview.png"
                  alt="MOODZ System Architecture Diagram"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              </Box>
            </ContainerScroll>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}