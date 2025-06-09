"use client"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Container, Typography, TextField, Button, Box, Paper, Alert, Chip } from "@mui/material"
import { motion } from "framer-motion"
import { Lock, Key, Lightbulb } from "lucide-react"
import step3Image from "../assets/step3-extra.png"

function ExtraStep3() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const stateParam = searchParams.get("state")
  const [answer, setAnswer] = useState("")
  const [wrongAnswerError, setWrongAnswerError] = useState("")

  // クエリパラメータチェック
  if (stateParam !== "3つ目の惑星") {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={8}
            sx={{
              p: 4,
              textAlign: "center",
              borderRadius: 3,
              background: "rgba(255, 255, 255, 0.95)",
            }}
          >
            <Lock size={48} color="#e74c3c" style={{ marginBottom: "16px" }} />
            <Typography variant="h6" color="error" gutterBottom>
              URLが間違っています。正しいURLでアクセスしてください。
            </Typography>
          </Paper>
        </Container>
      </Box>
    )
  }

  // ひらがなのみかを判定
  const hiraganaRegex = /^[ぁ-ん]+$/
  const inputError = answer !== "" && !hiraganaRegex.test(answer)

  const handleSubmit = () => {
    if (answer === "せいちょう") {
      navigate("/extra-step4?place=ボタン式制御室")
    } else {
      setWrongAnswerError("答えが違うみたいです")
    }
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #1e3a8a 0%, #1e40af 50%, #2563eb 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Paper
            elevation={12}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: 4,
              background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              position: "relative",
              overflow: "hidden",
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
            {/* Header */}
            <Box textAlign="center" mb={4}>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Key size={48} color="#2563eb" style={{ marginBottom: "16px" }} />
                <Typography
                  variant="h3"
                  component="h1"
                  sx={{
                    fontFamily: "'Noto Serif JP', serif",
                    fontWeight: 300,
                    color: "#1e40af",
                    mb: 1,
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  おまけ謎
                </Typography>
                <Chip
                  label="EXTRA"
                  sx={{
                    background: "linear-gradient(45deg, #d4af37, #ffd700)",
                    color: "#1e40af",
                    fontWeight: "bold",
                  }}
                />
              </motion.div>
            </Box>

            {/* Instructions */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>

              <Alert
                severity="warning"
                sx={{
                  mb: 4,
                  borderRadius: 2,
                  "& .MuiAlert-message": {
                    fontSize: "0.95rem",
                    fontWeight: 500,
                  },
                }}
              >
                SNS等において、こちらのおまけ謎についての言及はお控えください
              </Alert>
            </motion.div>

            {/* Puzzle Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Paper
                elevation={4}
                sx={{
                  p: 4,
                  mb: 4,
                  borderRadius: 3,
                  background: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
                  color: "white",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                <Lightbulb size={32} style={{ marginBottom: "16px", opacity: 0.9 }} />
                <Typography
                  variant="h6"
                  sx={{
                    mb: 3,
                    fontWeight: 300,
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  ？に入る文字をひらがなで答えよ
                </Typography>

                {/* Puzzle Image */}
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    borderRadius: 2,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={step3Image}
                    style={{
                      maxWidth: "100%",
                      height: "auto",
                      borderRadius: "8px",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                    }}
                  />
                </Box>
              </Paper>
            </motion.div>

            {/* Answer Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Box sx={{ mb: 3 }}>
                <TextField
                  label="回答をひらがなで入力"
                  variant="outlined"
                  fullWidth
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value)
                    if (wrongAnswerError) setWrongAnswerError("")
                  }}
                  error={inputError || Boolean(wrongAnswerError)}
                  helperText={
                    inputError ? "すべてひらがなで入力してください" : wrongAnswerError ? wrongAnswerError : "\u00A0"
                  }
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: 2,
                      fontSize: "1.1rem",
                      "&:hover fieldset": {
                        borderColor: "#2563eb",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#2563eb",
                      },
                    },
                    "& .MuiInputLabel-root.Mui-focused": {
                      color: "#2563eb",
                    },
                  }}
                />
              </Box>

              <Box textAlign="center">
                <Button
                  variant="contained"
                  size="large"
                  onClick={handleSubmit}
                  disabled={answer === "" || inputError}
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderRadius: 3,
                    background: "linear-gradient(45deg, #d4af37 30%, #ffd700 90%)",
                    color: "#1e40af",
                    fontSize: "1.1rem",
                    fontWeight: "bold",
                    textTransform: "none",
                    boxShadow: "0 4px 15px rgba(212, 175, 55, 0.4)",
                    "&:hover": {
                      background: "linear-gradient(45deg, #b8941f 30%, #e6c200 90%)",
                      boxShadow: "0 6px 20px rgba(212, 175, 55, 0.6)",
                    },
                    "&:disabled": {
                      background: "#bdc3c7",
                      color: "#7f8c8d",
                    },
                  }}
                >
                  解答する
                </Button>
              </Box>
            </motion.div>

            {/* Decorative elements */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                opacity: 0.1,
                fontSize: "3rem",
                color: "#2563eb",
              }}
            >
              🔍
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                opacity: 0.1,
                fontSize: "3rem",
                color: "#d4af37",
              }}
            >
              🧩
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ExtraStep3
