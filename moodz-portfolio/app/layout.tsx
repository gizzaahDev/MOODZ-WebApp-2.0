// app/layout.tsx
import "./globals.css";
import { Metadata } from "next";
import ClientWrapper from "./ClientWrapper";

export const metadata: Metadata = {
  title: 'Welcome To MOOZ',
  description: 'A comprehensive web application developed through extensive research to help reduce human depression and improve mental well-being. MOOZ provides detailed insights and tools for emotional management and mental health support.',
  icons: {
    icon: '/assets/MOODSLogo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{/* Add suppressHydrationWarning here */}
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
