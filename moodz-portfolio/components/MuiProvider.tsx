// components/MuiProvider.tsx
"use client"; // <-- MUST BE HERE

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#016a70" },
    background: { default: "#000000", paper: "#111111" },
    text: { primary: "#ffffff", secondary: "#cccccc" },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default function MuiProvider({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}
