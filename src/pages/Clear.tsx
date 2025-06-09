"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Container, Paper, Typography, Box, Alert } from "@mui/material"
import { Sparkles } from "lucide-react"
import confetti from "canvas-confetti"

export default function Clear() {
  useEffect(() => {
    // Trigger confetti effect when component mounts
    const duration = 3 * 1000
    const end = Date.now() + duration

    const runConfetti = () => {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ["#FFD700", "#FFA500", "#FF4500"],
      })

      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ["#00BFFF", "#1E90FF", "#0000FF"],
      })

      if (Date.now() < end) {
        requestAnimationFrame(runConfetti)
      }
    }

    runConfetti()
  }, [])

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        background: "linear-gradient(to bottom, #f3f4f6, #faf5ff)",
      }}
    >
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Paper
            elevation={8}
            sx={{
              borderRadius: 3,
              overflow: "hidden",
              border: "1px solid #e9d5ff",
            }}
          >
            {/* Header Section */}
            <Box
              sx={{
                background: "linear-gradient(45deg, #3f51b5 30%, #9c27b0 90%)",
                p: 4,
                textAlign: "center",
                color: "white",
              }}
            >
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 20,
                  delay: 0.2,
                }}
              >
                <Sparkles
                  size={48}
                  style={{
                    marginBottom: "16px",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                  }}
                />
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontWeight: "bold",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                  }}
                >
                  おまけ謎をクリアした！
                </Typography>
              </motion.div>
            </Box>

            {/* Content Section */}
            <Box sx={{ p: 4 }}>

              <motion.div initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 }}>
                <Typography>
                  託されし宇宙の秘宝からの脱出のすべての謎を解き明かした！
                </Typography>
                <button>
                  共有する
                </button>
              </motion.div>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}
