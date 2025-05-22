"use client"

import React from "react"
import { Container, Box, Typography, Paper, Card, CardContent } from "@mui/material"
import { motion } from "framer-motion"
import { Star } from "@mui/icons-material"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function ResearchObjectives() {
  return (
    <Container maxWidth="lg" sx={{ py: 8 }} id="research-objectives">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Typography variant="h3" component="h2" sx={{ mb: 4, color: "#016a70", textAlign: "center",}}>
          Research Objectives
        </Typography>

        <Paper elevation={4} sx={{ p: { xs: 1, md: 4 }, bgcolor: "#fff", color: "#444", borderRadius: 3 }}>
          <Typography variant="body1" paragraph sx={{ textAlign: "center", mb: 4 }}>
            Our research is guided by a cohesive framework to develop innovative solutions for depression detection and management.
          </Typography>

          <Box sx={{ position: "relative", my: 6 }}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box
                sx={{
                  width: { xs: "100%", md: "60%" },
                  mx: "auto",
                  mb: 6,
                }}
              >
                <Card
                  sx={{
                    bgcolor: "#016a70",
                    color: "white",
                    borderRadius: 4,
                    boxShadow: "0 6px 24px rgba(1, 106, 112, 0.4)",
                  }}
                >
                  <CardContent sx={{ p: 3, textAlign: "center" }}>
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "center", mb: 2 }}>
                      <Star sx={{ fontSize: 40, color: "white", mr: 2 }} />
                      <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                        Primary Goal
                      </Typography>
                    </Box>
                    <Typography variant="body1">
                      The "MOODZ" app aims to accurately assess individuals' depression levels and provide suitable
                      treatments to prevent worsening conditions. Using advanced evaluation techniques, depression is
                      categorized effectively. "MOODZ" strives to enhance mental health outcomes through tailored support.
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </motion.div>
            <Box sx={{ position: "relative", maxWidth: "800px", mx: "auto", bgcolor: "#fff", p: { xs: 0, md: 4 }, minHeight: "600px" }}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: "50%",
                  transform: "translateX(-50%)",
                  height: "100%",
                  width: "4px",
                  bgcolor: "#016a70",
                  display: { xs: "block", sm: "none" },
                  zIndex: 0,
                }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  zIndex: 0,
                  display: { xs: "none", sm: "block" },
                }}
              >
                <svg width="100%" height="100%" preserveAspectRatio="xMidYMid meet" style={{ marginBottom: "20px" }}>
                  <path
                    d="M76 50 L76 260 L722 260 L722 450 L76 450 L76 690 L722 690 L722 905 L76 905 L76 1100"
                    fill="none"
                    stroke="#016a70"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </Box>

              {[
                {
                  id: "standardized-assessment",
                  title: "A standardized assessment specifically designed for each individual",
                  description:
                    "A standardized assessment specifically designed for each individual is utilized to evaluate their current mental health status. The objective is to accurately identify depression levels across different demographic groups using validated assessment tools.",
                },
                {
                  id: "depression-tracking",
                  title: "Systematic Depression Level Tracking",
                  description:
                    "Depression levels are systematically tracked to monitor changes over time. Both machine learning and image processing techniques are utilized in the identification of depression levels.",
                },
                {
                  id: "intervention-strategies",
                  title: "Personalized Intervention Strategies",
                  description:
                    "The system provides tailored interventions based on the severity of depression, ranging from self-help resources and mindfulness exercises for mild cases to professional therapy recommendations and crisis support for severe cases. Each intervention is carefully matched to the individual's needs and progress.",
                },
                {
                  id: "daily-progress",
                  title: "Daily Progress Monitoring",
                  description:
                    "Daily progress is systematically monitored to assess improvements in mental well-being. This includes tracking mood patterns, activity levels, and engagement with therapeutic interventions to provide personalized feedback and adjust treatment plans accordingly.",
                },
                {
                  id: "data-analysis",
                  title: "Comprehensive Data Analysis",
                  description:
                    "Patients' mental health results are systematically recorded and analyzed to inform effective treatment strategies. This includes tracking response patterns, identifying trends, and correlating outcomes with specific interventions to optimize treatment efficacy and personalize care plans.",
                },
              ].map((objective, index) => {
                const isLeft = index % 2 === 0
                return (
                  <Box
                    key={objective.id}
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: isLeft ? "row" : "row-reverse" },
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      mb: 6,
                      zIndex: 1,
                      minHeight: "100px",
                      width: "100%",
                      px: { xs: 0, md: 2 }
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 60,
                        height: 60,
                        borderRadius: "50%",
                        bgcolor: "white",
                        mx: 2,
                        position: "relative",
                        top: 0,
                        boxShadow: "0 2px 8px rgba(0,0,0,0.5)",
                      }}
                    >
                      <Star sx={{ fontSize: 40, color: "#4CAF50" }} />
                    </Box>

                    <Paper
                      sx={{
                        flex: 1,
                        p: { xs: 1, md: 3 },
                        bgcolor: "#f5f5f5",
                        color: "#333",
                        borderRadius: 2,
                        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                        maxWidth: "500px",
                        textAlign: { xs: "center", sm: isLeft ? "left" : "right" },
                        mx: { xs: 0, md: 2 }
                      }}
                    >
                      <Typography variant="h6" sx={{ color: "#016a70", mb: 1, fontWeight: "medium" }}>
                        {objective.title}
                      </Typography>
                      <Typography variant="body2">{objective.description}</Typography>
                    </Paper>
                  </Box>
                )
              })}
            </Box>
          </Box>
        </Paper>
      </motion.div>
    </Container>
  )
}