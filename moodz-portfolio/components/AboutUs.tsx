"use client"

import React from "react"
import { Container, Box, Typography, Grid, Card, CardContent, IconButton } from "@mui/material"
import { motion } from "framer-motion"

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const teamMembers = [
  {
    name: "Dr. Sanvitha Kasthuriarachchi",
    role: "Assistant Professor",
    university: "Sri Lanka Institute of Information Technology",
    department: "Faculty of Computing | Information Technology",
    photo: "/assets/SanwithaIMG.jpg",
    linkedin: "https://www.linkedin.com/in/sanvitha-kasthuriarachchi-31b50a37/",
    email: "sanvitha.k@sliit.lk",
  },
  {
    name: "Ms. Sanjeevi Chandrasiri",
    role: "Senior Lecturer",
    university: "Sri Lanka Institute of Information Technology",
    department: "Faculty of Computing | Information Technology",
    photo: "/assets/SanjeewiIMG.jpg",
    linkedin: "https://www.linkedin.com/in/sanjeevi-chandrasiri-6154b319/",
    email: "sanji.c@sliit.lk",
  },
  {
    name: "Ms. Damayanthi",
    role: "A grade counselor",
    university: "Divisional Secretariat, Matara",
    department: "Psychology and Counselling Department",
    photo: "/assets/DamayanthiIMG.jpg",
    linkedin: null,
    email: null,
  },
  
  {
    name: "Tennakoon T.M.Y.N.",
    role: "Undergraduate",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    photo: "/assets/YoshithaIMG.jpg",
    linkedin: "https://www.linkedin.com/in/yoshithatennakoon/",
    email: "tyoshitha95@gmail.com",
  },
  {
    name: "Jayathilaka D.V.G.",
    role: "Undergraduate",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    photo: "/assets/DhanukaIMG.jpg",
    linkedin: "https://www.linkedin.com/in/dhanuka-jayathilaka-9b4939215/",
    email: "dhanukajayathilaka@gmail.com",
  },
  {
    name: "Thisera K.G.",
    role: "Undergraduate",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    photo: "/assets/GeeshanIMG.jpeg",
    linkedin: "https://www.linkedin.com/in/geeshan-thisera/",
    email: "geeshanthisera1234@gmail.com",
  },
  {
    name: "Sandumina B.N.",
    role: "Undergraduate",
    university: "Sri Lanka Institute of Information Technology",
    department: "Information Technology",
    photo: "/assets/NethmaIMG.jpg",
    linkedin: "https://www.linkedin.com/in/nethma-sandumina-1772a8292/",
    email: "nethmabaduge326@gmail.com",
  },
  
]

export default function AboutUs() {
  return (
    <Container maxWidth="lg" sx={{ py: 10 }} id="about-us">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
        <Typography variant="h3" component="h2" sx={{ mb: 1, color: "#016a70", textAlign: "center" }}>
          About Us
        </Typography>
        <Typography variant="h5" component="h3" sx={{ mb: 1, color: "#444", textAlign: "center" }}>
          Meet Our Team
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {/* First Row: First 3 Members */}
          <Grid item container xs={12} spacing={4} justifyContent="center">
            {teamMembers.slice(0, 3).map((member, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 1.05 }}>
                  <Card
                    sx={{
                      bgcolor: "#f3faf4",
                      color: "#444",
                      height: "400px",
                      width: "250px",
                      position: "relative",
                      margin: "0 auto",
                    }}
                  >
                    <Box sx={{ p: 2, textAlign: "center" }}>
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto" }}
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h6" component="div" sx={{ color: "#016a70", textAlign: "center" }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 1, fontWeight: 'bold' }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: "center" }}>
                        {member.university}, {member.department}
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 8,
                          left: 8,
                          right: 8,
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0 8px",
                        }}
                      >
                        {member.linkedin && (
                          <IconButton component="a" href={member.linkedin} target="_blank" sx={{ color: "#016a70" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </IconButton>
                        )}
                        {member.email && (
                          <IconButton component="a" href={`mailto:${member.email}`} sx={{ color: "#016a70" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                            </svg>
                          </IconButton>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>

          {/* Second Row: Remaining Members */}
          <Grid item container xs={12} spacing={4} justifyContent="center">
            {teamMembers.slice(3).map((member, index) => (
              <Grid item xs={12} sm={6} md={3} key={index + 3}>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Card
                    sx={{
                      bgcolor: "#f3faf4",
                      color: "#444",
                      height: "350px",
                      width: "250px",
                      position: "relative",
                      margin: "0 auto",
                    }}
                  >
                    <Box sx={{ p: 2, textAlign: "center" }}>
                      <img
                        src={member.photo || "/placeholder.svg"}
                        alt={member.name}
                        style={{ width: "100px", height: "100px", borderRadius: "50%", margin: "0 auto" }}
                      />
                    </Box>
                    <CardContent>
                      <Typography variant="h6" component="div" sx={{ color: "#016a70", textAlign: "center" }}>
                        {member.name}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ textAlign: "center", mb: 1, fontWeight: 'bold' }}>
                        {member.role}
                      </Typography>
                      <Typography variant="body2" sx={{ textAlign: "center" }}>
                        {member.university}, {member.department}
                      </Typography>
                      <Box
                        sx={{
                          position: "absolute",
                          bottom: 8,
                          left: 8,
                          right: 8,
                          display: "flex",
                          justifyContent: "space-between",
                          padding: "0 8px",
                        }}
                      >
                        {member.linkedin && (
                          <IconButton component="a" href={member.linkedin} target="_blank" sx={{ color: "#016a70" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                          </IconButton>
                        )}
                        {member.email && (
                          <IconButton component="a" href={`mailto:${member.email}`} sx={{ color: "#016a70" }}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="currentColor"
                            >
                              <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" />
                            </svg>
                          </IconButton>
                        )}
                      </Box>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </motion.div>
    </Container>
  )
}