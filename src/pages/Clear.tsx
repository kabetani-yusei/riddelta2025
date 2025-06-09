"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Container, Paper, Typography, Box, Button } from "@mui/material"
import { Sparkles, Share } from "lucide-react"
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
        background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
      }}
    >
      <Container maxWidth="sm">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Paper
            elevation={12}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #d4af37, #ffd700, #d4af37)",
              },
            }}
          >
            {/* Header Section */}
            <Box
              sx={{
                background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                p: 4,
                textAlign: "center",
                color: "white",
                position: "relative",
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
                  size={64}
                  style={{
                    marginBottom: "16px",
                    filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.3))",
                  }}
                />
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: "bold",
                    textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    mb: 1,
                  }}
                >
                  おまけ謎をクリアした！
                </Typography>
              </motion.div>
            </Box>

            {/* Content Section */}
            <Box sx={{ p: 4 }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
                <Typography
                  variant="body1"
                  sx={{
                    mb: 4,
                    lineHeight: 1.8,
                    color: "text.secondary",
                    fontSize: "1.1rem",
                    textAlign: "center",
                  }}
                >
                  「託されし宇宙の秘宝からの脱出」のおまけ謎を完全に解き明かした！
                </Typography>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                <Box textAlign="center">
                  <Button
                    variant="contained"
                    size="large"
                    startIcon={<Share size={20} />}
                    onClick={() => {
                      const text = encodeURIComponent(
                        "「託されし宇宙の秘宝からの脱出」のおまけ謎を完全に解き明かした！\n#リデルタ\n#宇宙秘宝脱出\n#宇宙秘宝脱出おまけ謎",
                      )
                      window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank")
                    }}
                    sx={{
                      px: 4,
                      py: 1.5,
                      borderRadius: 3,
                      background: "linear-gradient(45deg, #1DA1F2 30%, #0d8bd9 90%)",
                      color: "white",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      textTransform: "none",
                      boxShadow: "0 4px 15px rgba(29, 161, 242, 0.4)",
                      "&:hover": {
                        background: "linear-gradient(45deg, #0d8bd9 30%, #0a7bc4 90%)",
                        boxShadow: "0 6px 20px rgba(29, 161, 242, 0.6)",
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.3s ease",
                    }}
                  >
                    Xで共有する
                  </Button>
                </Box>
              </motion.div>
            </Box>

            {/* Decorative elements */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.1,
                fontSize: "3rem",
                color: "#d4af37",
              }}
            >
              🏆
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                opacity: 0.1,
                fontSize: "3rem",
                color: "#2563eb",
              }}
            >
              ⭐
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}
