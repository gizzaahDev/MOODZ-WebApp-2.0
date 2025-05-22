// app/ClientWrapper.tsx
'use client';

import dynamic from "next/dynamic";
import React from "react";

// Dynamically import ClientLayout only on client-side
const ClientLayout = dynamic(() => import("./ClientLayout"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
