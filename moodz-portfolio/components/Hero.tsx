"use client"

import React from "react"
import { Box, Typography, Button, useMediaQuery, useTheme } from "@mui/material"
import { motion } from "framer-motion"
import { SplineScene } from "@/components/ui/splite"

interface HeroProps {
  scrollToSection: (elementId: string) => void
}

export default function Hero({ scrollToSection }: HeroProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      id="home"
      sx={{
        height: isMobile ? "100vh" : "90vh",
        position: "relative",
        overflow: "hidden",
        bgcolor: "black",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.4)), url(/assets/StressReliesBG.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <Box
        sx={{
          flex: { xs: "1 1 100%", md: "1 1 50%" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          position: "relative",
          zIndex: 1000,
          p: isMobile ? 2 : 4,
        }}
      >
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant={isMobile ? "h2" : "h1"} component="h1" sx={{ fontWeight: "bold", color: "#00abb4", mb: 2 }}>
            MOODZ
          </Typography>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.3 }}>
          <Typography variant={isMobile ? "h5" : "h4"} component="h2" sx={{ mb: 4, color: "white", px: isMobile ? 2 : 0 }}>
            Mitigating Depression Through Technology
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Typography variant="body1" sx={{ 
            mb: 6, 
            color: "gray", 
            maxWidth: "600px",
            px: isMobile ? 2 : 0,
            fontSize: isMobile ? '0.9rem' : '1rem'
          }}>
            MOODZ is a cutting-edge research project focused on developing innovative solutions to identify, classify,
            and mitigate depression using advanced machine learning algorithms and user-centered design.
          </Typography>
        </motion.div>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="contained"
            size={isMobile ? "medium" : "large"}
            sx={{
              bgcolor: "#016a70",
              color: "white",
              "&:hover": { bgcolor: "#015a60" },
              px: 4,
              py: 1.5,
              borderRadius: 2,
            }}
            onClick={() => scrollToSection("#project-scope")}
          >
            Learn More
          </Button>
        </motion.div>
      </Box>

      {!isMobile && (
        <Box
          sx={{
            flex: "1 1 50%",
            position: "relative",
            width: "auto",
            height: "100%",
            zIndex: 1,
          }}
        >
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
            fallback={<div />}
          />
        </Box>
      )}
    </Box>
  )
}