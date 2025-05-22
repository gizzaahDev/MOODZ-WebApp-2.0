// app/ClientLayout.tsx
"use client";

import dynamic from "next/dynamic";

// Dynamically import the MuiProvider for client-side only
const MuiProvider = dynamic(() => import("@/components/MuiProvider"), { ssr: false });

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return <MuiProvider>{children}</MuiProvider>;
}
