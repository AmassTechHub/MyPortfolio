"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleCursorChange = () => {
      const interactiveElements = document.querySelectorAll("a, button, .interactive")

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => setCursorVariant("interactive"))
        el.addEventListener("mouseleave", () => setCursorVariant("default"))
      })
    }

    handleCursorChange()

    // Re-run when the DOM might have changed
    window.addEventListener("load", handleCursorChange)

    return () => {
      window.removeEventListener("load", handleCursorChange)
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      border: "1px solid rgba(255, 255, 255, 0.3)",
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
    interactive: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(59, 130, 246, 0.2)",
      border: "1px solid rgba(59, 130, 246, 0.5)",
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
  }

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50"
        variants={variants}
        animate={cursorVariant}
      />
      <motion.div
        className="custom-cursor-dot hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-50 h-2 w-2 bg-blue-500"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          mass: 0.2,
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        
        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>
    </>
  )
}
