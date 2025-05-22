"use client"

import React from "react"
import { Container, Box, Typography, Grid, Paper } from "@mui/material"
import { motion } from "framer-motion"
import { SiReact, SiFastapi, SiFirebase, SiGooglecloud, SiScikitlearn, SiPytorch, SiPython, SiJavascript, SiDocker, SiGooglecolab, SiJupyter } from "react-icons/si"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const technologies = [
  { name: "React Native", icon: <SiReact size={40} /> },
  { name: "FastAPI", icon: <SiFastapi size={40} /> },
  { name: "Firebase", icon: <SiFirebase size={40} /> },
  { name: "Google Cloud Run", icon: <SiGooglecloud size={40} /> },
  { name: "Gradient Boosting", icon: <SiScikitlearn size={40} /> },
  { name: "YOLO", icon: <SiPytorch size={40} /> },
  { name: "Random Forest", icon: <SiScikitlearn size={40} /> },
  { name: "K-Nearest Neighbors", icon: <SiPytorch size={40} /> },
  { name: "Python", icon: <SiPython size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "Docker", icon: <SiDocker size={40} /> },
  { name: "Google Colab", icon: <SiGooglecolab size={40} /> },
  { name: "Jupyter", icon: <SiJupyter size={40} /> },
]

export default function Technologies() {
  return (
    <Container maxWidth="xl" sx={{ py: 10 }} id="technologies">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Typography variant="h3" component="h2" sx={{ mb: 6, color: "#016a70", textAlign: "center" }}>
          Technologies Used
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {technologies.map((tech, index) => (
            <Grid item key={index} xs={4} sm={3} md={2}>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 3,
                    bgcolor: "#111",
                    color: "white",
                    height: "150px",
                    width: "150px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    margin: "auto",
                  }}
                >
                  <Box
                    sx={{
                      width: "80px",
                      height: "80px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      mb: 2,
                    }}
                  >
                    {React.cloneElement(tech.icon, { style: { color: tech.icon.props.color } })}
                  </Box>
                  <Typography variant="h6" sx={{ fontSize: "0.9rem" }}>
                    {tech.name}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </motion.div>
    </Container>
  )
}