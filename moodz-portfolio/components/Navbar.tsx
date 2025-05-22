"use client"
import React, { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Menu,
  MenuItem,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material"
import { motion } from "framer-motion"
import { MenuIcon } from "lucide-react"

interface NavItem {
  text: string
  href: string
  hasDropdown?: boolean
  setAnchor?: React.Dispatch<React.SetStateAction<HTMLElement | null>>
  items?: { text: string; href: string }[]
}

interface NavbarProps {
  activeSection: string | null
  scrollToSection: (elementId: string) => void
}

export default function Navbar({ activeSection, scrollToSection: propScrollToSection }: NavbarProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down("md"))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [projectScopeAnchor, setProjectScopeAnchor] = useState<null | HTMLElement>(null)
  const [downloadsAnchor, setDownloadsAnchor] = useState<null | HTMLElement>(null)

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  const handleScroll = (elementId: string) => {
    const element = document.querySelector(elementId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const navItems: NavItem[] = [
    { text: "Home", href: "#home" },
    {
      text: "Project Scope ▼",
      href: "#project-scope",
      hasDropdown: true,
      setAnchor: setProjectScopeAnchor,
      items: [
        { text: "Literature Survey", href: "#literature-survey" },
        { text: "Research Gap", href: "#research-gap" },
        { text: "Research Problem & Solution", href: "#research-problem" },
        { text: "Research Objectives", href: "#research-objectives" },
        { text: "Methodology", href: "#methodology" },
        { text: "Technologies", href: "#technologies" },
      ],
    },
    { text: "Milestones", href: "#milestones" },
    {
      text: "Downloads ▼",
      href: "#downloads",
      hasDropdown: true,
      setAnchor: setDownloadsAnchor,
      items: [
        { text: "Documents", href: "#documents" },
        { text: "Presentations", href: "#presentations" },
      ],
    },
    { text: "About Us", href: "#about-us" },
    { text: "Contact Us", href: "#contact-us" },
  ]

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: (theme) => theme.palette.background.default,
          color: (theme) => theme.palette.text.primary,
          boxShadow: 3,
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(10px)",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          transition: "background-color 0.3s, color 0.3s",
          "&.scrolled": {
            backgroundColor: "rgba(243, 250, 244, 0.5)",
            color: "#444",
          },
          "&.hero": {
            backgroundColor: "rgba(243, 250, 244, 0.5)",
            color: "#444",
          },
        }}
        className={activeSection !== "#home" ? "scrolled" : "hero"}
      >
        <Toolbar>
          <Typography
            variant="h5"
            component="div"
            sx={{
              flexGrow: 1,
              fontWeight: "bold",
              color: "#016a70",
              display: "flex",
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              MOODZ
            </motion.div>
          </Typography>

          {isMobile ? (
            <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          ) : (
            <Box sx={{ display: "flex" }}>
              {navItems.map((item, index) => (
                <Box key={index}>
                  {item.hasDropdown ? (
                    <>
                      <Button
                        color="inherit"
                        onClick={(e) => {
                          item.setAnchor && item.setAnchor(e.currentTarget)
                          // Don't navigate for project scope and downloads
                          if (item.href !== "#project-scope" && item.href !== "#downloads") {
                            handleScroll(item.href)
                          }
                        }}
                        sx={{
                          mx: 1,
                          position: "relative",
                          "&::after":
                            activeSection === item.href ||
                            (item.items && item.items.some((subItem) => activeSection === subItem.href))
                              ? {
                                  content: '""',
                                  position: "absolute",
                                  bottom: 0,
                                  left: "25%",
                                  width: "50%",
                                  height: "3px",
                                  bgcolor: "#016a70",
                                  borderRadius: "2px",
                                }
                              : {},
                        }}
                      >
                        {item.text}
                      </Button>
                      <Menu
                        anchorEl={item.text === "Project Scope ▼" ? projectScopeAnchor : downloadsAnchor}
                        open={Boolean(item.text === "Project Scope ▼" ? projectScopeAnchor : downloadsAnchor)}
                        onClose={() => {
                          if (item.text === "Project Scope ▼") {
                            setProjectScopeAnchor(null)
                          } else {
                            setDownloadsAnchor(null)
                          }
                        }}
                      >
                        {item.items?.map((subItem, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            onClick={() => {
                              if (item.text === "Project Scope ▼") {
                                setProjectScopeAnchor(null)
                              } else {
                                setDownloadsAnchor(null)
                              }
                              handleScroll(subItem.href)
                            }}
                            sx={{
                              bgcolor: activeSection === subItem.href ? "rgba(1, 106, 112, 0.1)" : "transparent",
                              color: activeSection === subItem.href ? "#016a70" : "inherit",
                              fontWeight: activeSection === subItem.href ? "bold" : "normal",
                            }}
                          >
                            {subItem.text}
                          </MenuItem>
                        ))}
                      </Menu>
                    </>
                  ) : (
                    <Button
                      color="inherit"
                      href={item.href}
                      sx={{
                        mx: 1,
                        position: "relative",
                        "&::after":
                          activeSection === item.href
                            ? {
                                content: '""',
                                position: "absolute",
                                bottom: 0,
                                left: "25%",
                                width: "50%",
                                height: "3px",
                                bgcolor: "#016a70",
                                borderRadius: "2px",
                              }
                            : {},
                      }}
                      onClick={(e) => {
                        e.preventDefault()
                        handleScroll(item.href)
                      }}
                    >
                      {item.text}
                    </Button>
                  )}
                </Box>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={toggleDrawer}
        PaperProps={{
          sx: {
            bgcolor: "black",
            color: "white",
            width: 250,
          },
        }}
      >
        <List>
          {navItems.map((item, index) => (
            <React.Fragment key={index}>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    toggleDrawer()
                    // Don't navigate for project scope and downloads
                    if (item.href !== "#project-scope" && item.href !== "#downloads") {
                      handleScroll(item.href)
                    }
                  }}
                  sx={{
                    bgcolor: activeSection === item.href ? "rgba(1, 106, 112, 0.1)" : "transparent",
                    borderLeft: activeSection === item.href ? "4px solid #016a70" : "none",
                  }}
                >
                  <ListItemText
                    primary={item.text}
                    sx={{
                      color: item.hasDropdown || activeSection === item.href ? "#016a70" : "white",
                      fontWeight: item.hasDropdown || activeSection === item.href ? "bold" : "normal",
                    }}
                  />
                </ListItemButton>
              </ListItem>

              {item.hasDropdown &&
                item.items?.map((subItem, subIndex) => (
                  <ListItem key={subIndex} disablePadding sx={{ pl: 4 }}>
                    <ListItemButton
                      onClick={() => {
                        toggleDrawer()
                        handleScroll(subItem.href)
                      }}
                      sx={{
                        bgcolor: activeSection === subItem.href ? "rgba(1, 106, 112, 0.1)" : "transparent",
                        borderLeft: activeSection === subItem.href ? "4px solid #016a70" : "none",
                      }}
                    >
                      <ListItemText
                        primary={subItem.text}
                        sx={{
                          color: activeSection === subItem.href ? "#016a70" : "white",
                          fontWeight: activeSection === subItem.href ? "bold" : "normal",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>
                ))}

              {index < navItems.length - 1 && <Divider sx={{ bgcolor: "gray" }} />}
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </>
  )
}