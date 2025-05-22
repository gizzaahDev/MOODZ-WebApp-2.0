"use client"

import type React from "react"

import { Suspense, lazy, useState, useEffect } from "react"
const Spline = lazy(() => import("@splinetool/react-spline"))

interface SplineSceneProps {
  scene: string
  className?: string
  fallback?: React.ReactNode
}

export function SplineScene({ scene, className, fallback }: SplineSceneProps) {
  const [hasError, setHasError] = useState(false)

  // Reset error state if scene URL changes
  useEffect(() => {
    setHasError(false)
  }, [scene])

  const defaultFallback = (
    <div className="w-full h-full flex items-center justify-center bg-black">
      <span className="loader">Loading...</span>
    </div>
  )

  if (hasError) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white">
        <div className="text-center p-4">
          <p>Unable to load 3D scene</p>
          <p className="text-sm opacity-70 mt-2">Please try again later</p>
        </div>
      </div>
    )
  }

  return (
    <Suspense fallback={fallback || defaultFallback}>
      <div className={className} style={{ width: "100%", height: "100%" }}>
        <Spline scene={scene} onError={() => setHasError(true)} />
      </div>
    </Suspense>
  )
}
