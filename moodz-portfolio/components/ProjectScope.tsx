"use client"

import React from "react"
import { Container, Box, Typography, Paper, Grid, useMediaQuery, useTheme } from "@mui/material"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ProjectScope() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="lg" sx={{ 
      py: 10,
      px: { xs: 0, md: '24px' }
    }} id="project-scope">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Typography variant="h6" component="h2" sx={{ mb: 0, color: "#000", textAlign: { xs: "center", md: "left" } }}>
          Project Scope
        </Typography>
      </motion.div>

      <Box id="literature-survey" sx={{ mb: 10 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography variant="h4" component="h3" sx={{ mb: 4, color: "#016a70", textAlign: { xs: "center", md: "left" } }}>
            Literature Survey
          </Typography>

          <Paper elevation={4} sx={{ 
            p: { xs: 2, md: 4 },
            bgcolor: "#fff", 
            color: "#444",
            mx: { xs: 0, md: 'auto' }
          }}>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: isMobile ? 'column' : 'row', 
              gap: 4 
            }}>
              <Box sx={{ 
                flex: 1, 
                display: "flex", 
                justifyContent: "center", 
                alignItems: "center",
                order: isMobile ? 1 : 0
              }}>
                <img
                  src="/assets/LitDepression.jpg"
                  alt="Literature Review"
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                    objectFit: "cover",
                    maxWidth: "800px",
                  }}
                />
              </Box>
              <Box sx={{ 
                flex: 2, 
                padding: "20px",
                order: isMobile ? 2 : 1
              }}>
                <Typography variant="body1" paragraph>
                  Recent research has shifted focus toward the non-biological mechanisms of depression, addressing critical
                  gaps left by biological studies. While advances in genetics, neuroimaging, and neurotransmitter theories
                  have shaped treatments, they only partially address depressive symptoms and show limited impact on social
                  functioning and long-term recovery. A thematic synthesis of recent human studies highlights the
                  significance of emotional trauma, cognitive impairments, relationship dynamics, and motivational deficits
                  in shaping depressive outcomes. This research advocates for integrating non-biological insights into
                  clinical practice to create more holistic and effective intervention strategies.
                </Typography>
                <Typography variant="body1" paragraph>
                  Other studies have explored the evolving understanding of Major Depressive Disorder (MDD), encompassing its
                  complex pathogenesis and treatment approaches. While biological theories like HPA axis dysfunction and the
                  neurotransmitter hypothesis remain central, emerging therapies such as phototherapy and acupuncture are
                  gaining attention. Despite these advancements, no single theory fully explains MDD, emphasizing the need
                  for multi-targeted strategies. Synthesizing recent findings, this research points to the necessity of
                  combining pharmacological and non-pharmacological treatments to better address the disorder's multifaceted
                  nature.
                </Typography>
                <Typography variant="body1" paragraph>
                  Complementary research has evaluated interventions like mindfulness and positive fantasizing to reduce
                  depressive rumination and prevent relapses, especially in individuals with remitted MDD. These
                  interventions show potential for personalized mental health care. Additionally, there is a growing emphasis
                  on digital mental health tools that are accessible, clinically integrated, and socially aware. However,
                  current mobile solutions often lack clinical validation and fail to address broader environmental factors
                  such as social isolation and economic stress. This highlights the need for evidence-based digital
                  interventions designed with inclusivity, data security, and long-term efficacy in mind.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </Box>

      <Box id="research-gap" sx={{ mb: 10 }}>
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
          <Typography variant="h4" component="h3" sx={{ 
            mb: 4, 
            color: "#444", 
            fontWeight: "bold",
            textAlign: { xs: 'center', md: 'left' }
          }}>
            Research Gap
          </Typography>

          <Box>
            <Typography variant="body1" paragraph sx={{ 
              color: "#000",
              textAlign: { xs: 'center', md: 'left' }
            }}>
              Despite significant advances in mental health technology, several critical gaps remain:
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "100%", bgcolor: "#f3faf4", color: "#444", p: 3, borderRadius: 1 }}>
                  <Typography variant="h6" sx={{ color: "#444", mb: 2 }}>
                    Using a standardized assessment to assist the user's depression status
                  </Typography>
                  <Typography variant="body2" component="div">
                    <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                      <li>A standardized questionnaire will be utilized for each demographic to assess their current depression status.</li>
                      <li>Each standardized questionnaire includes necessary questions related to specific demographics:
                        <Box component="ul" sx={{ pl: 4, listStyleType: "circle" }}>
                          <li>Children: CES-DC</li>
                          <li>Married Individuals: DAS</li>
                          <li>Postpartum: EPDS</li>
                          <li>Elderly: GDS</li>
                        </Box>
                      </li>
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "100%", bgcolor: "#f3faf4", color: "#444", p: 3, borderRadius: 1 }}>
                  <Typography variant="h6" sx={{ color: "#444", mb: 2 }}>
                    Prediction of the depression level using a Machine Learning approach.
                  </Typography>
                  <Box component="div">
                    <Typography variant="body2" paragraph>
                      To obtain the correct depression level of the user's, an ML approach will be accommodated. According
                      to the assessment and the use of ML technique the depression level will be evaluated severe,
                      moderate or low.
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                      <li>Children = Logistic Regression</li>
                      <li>Married Individuals = K-Nearest Neighbors</li>
                      <li>Postpartum = Gradient Boosting</li>
                      <li>Elderly = Random Forest</li>
                    </Box>
                    <Typography variant="body2" paragraph>
                      Generic approaches fail to account for individual baseline behaviors and cultural differences in
                      depression manifestation.
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "100%", bgcolor: "#f3faf4", color: "#444", p: 3, borderRadius: 1 }}>
                  <Typography variant="h6" sx={{ color: "#444", mb: 2 }}>
                    Provide innovative personal recommendations as interventions for everyone.
                  </Typography>
                  <Typography variant="body2">
                    <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                      <li>Different innovative therapeutic activities and mind boosting activities will be proposed though mobile applications for each demography.</li>
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "100%", bgcolor: "#f3faf4", color: "#444", p: 3, borderRadius: 1 }}>
                  <Typography variant="h6" sx={{ color: "#444", mb: 2 }}>
                    Evaluate the progress of each user.
                  </Typography>
                  <Typography variant="body2">
                    <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                      <li>Different innovative therapeutic activities and mind boosting activities will be proposed though mobile applications for each demography.</li>
                    </Box>
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box sx={{ height: "100%", bgcolor: "#f3faf4", color: "#444", p: 3, borderRadius: 1 }}>
                  <Typography variant="h6" sx={{ color: "#444", mb: 2 }}>
                    Implementation of a mobile application targeting four demographics.
                  </Typography>
                  <Typography variant="body2">
                    <Box component="ul" sx={{ pl: 2, listStyleType: "disc" }}>
                      <li>MOODZ mobile application</li>
                    </Box>
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </motion.div>
      </Box>
    </Container>
  )
}