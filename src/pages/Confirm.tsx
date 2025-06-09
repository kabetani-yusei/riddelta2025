"use client"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import { Container, Typography, TextField, Button, Box, Paper, Chip, Divider } from "@mui/material"
import { motion } from "framer-motion"
import { Lock, Key, Users, MessageCircle, CheckCircle } from "lucide-react"

function Confirm() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const stateParam = searchParams.get("state")
  const [answer, setAnswer] = useState("")
  const [wrongAnswerError, setWrongAnswerError] = useState("")

  // クエリパラメータチェック
  if (stateParam !== "公演開始直後") {
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

  const handleSubmit = () => {
    if (answer === "こうはい" || answer === "後輩") {
      navigate("/extra-step1?state=1つ目の惑星")
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
                  label="参加者確認"
                  sx={{
                    background: "linear-gradient(45deg, #f59e0b, #fbbf24)",
                    color: "#1e40af",
                    fontWeight: "bold",
                  }}
                />
              </motion.div>
            </Box>

            {/* Instructions Section - White background with orange border */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4, duration: 0.6 }}>
              <Paper
                elevation={2}
                sx={{
                  p: 4,
                  mb: 4,
                  borderRadius: 3,
                  background: "#ffffff",
                  border: "2px solid #fdba74",
                }}
              >
                <Box display="flex" alignItems="center" mb={2}>
                  <Users size={24} color="#ea580c" style={{ marginRight: "8px" }} />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#ea580c",
                      fontWeight: "bold",
                    }}
                  >
                    公演参加者限定
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    lineHeight: 1.8,
                    color: "#374151",
                    fontSize: "1rem",
                  }}
                >
                  おまけ謎は、公演の参加者限定の謎となっております。
                  公演に参加したか確認するために以下の問に答えてください。
                </Typography>

                <Divider sx={{ my: 2, borderColor: "#fdba74" }} />

                <Box display="flex" alignItems="flex-start">
                  <MessageCircle size={20} color="#ea580c" style={{ marginRight: "8px", marginTop: "2px" }} />
                  <Box>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#374151",
                        fontWeight: "bold",
                        mb: 1,
                      }}
                    >
                      お困りの場合は
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{
                        color: "#374151",
                        lineHeight: 1.6,
                      }}
                    >
                      公演参加者で答えが分からない場合には、
                      <Box
                        component="span"
                        sx={{
                          fontWeight: "bold",
                          color: "#ea580c",
                        }}
                      >
                        リデルタ公式X: @NU_nazo_create
                      </Box>
                      までお問い合わせください。
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>

            {/* Confirmation Question Section - Redesigned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Box
                sx={{
                  p: 4,
                  mb: 4,
                  borderRadius: 3,
                  background: "#f8fafc",
                  border: "1px solid #2563eb",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                }}
              >
                <Box display="flex" alignItems="center" mb={3}>
                  <CheckCircle size={24} color="#2563eb" style={{ marginRight: "12px" }} />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2563eb",
                      fontWeight: "500",
                    }}
                  >
                    参加確認
                  </Typography>
                </Box>

                <Typography
                  variant="body1"
                  sx={{
                    textAlign: "center",
                    color: "#334155",
                    fontSize: "1.1rem",
                    fontWeight: "500",
                    lineHeight: 1.6,
                  }}
                >
                  チェックポイントにいた登場人物をひらがな4文字で答えてください
                </Typography>
              </Box>
            </motion.div>

            {/* Answer Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <Box sx={{ mb: 3 }}>
                <TextField
                  label="解答を記入してください"
                  variant="outlined"
                  fullWidth
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value)
                    if (wrongAnswerError) setWrongAnswerError("")
                  }}
                  error={Boolean(wrongAnswerError)}
                  helperText={wrongAnswerError ? wrongAnswerError : "\u00A0"}
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
                  disabled={answer === ""}
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

export default Confirm
