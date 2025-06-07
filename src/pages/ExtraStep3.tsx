"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container, Typography, TextField, Button, Box, Paper, Chip, Alert } from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { Key, Lightbulb } from "lucide-react"

function ExtraStep3() {
  const navigate = useNavigate()
  const [pushed, setPushed] = useState(false)
  const [answer, setAnswer] = useState("")
  const [wrongAnswerError, setWrongAnswerError] = useState("")
  const [buttonMessage, setButtonMessage] = useState("")

  // 出題文
  const question = pushed ? "本公演のハッシュタグは？" : "譁�ｭ怜喧縺代ヱ繧ｿ繝ｼ繝ｳ"

  const handleSubmit = () => {
    if (answer === "宇宙秘宝脱出" || answer === "#宇宙秘宝脱出" || answer === "＃宇宙秘宝脱出") {
      navigate("/clear")
    } else {
      setWrongAnswerError("答えが違うみたいです")
    }
  }

  // ボタンクリック時の処理
  const handleButtonClick = (idx: number) => {
    if (idx === 4) {
      // 紫色のボタン（5番目）の場合
      setPushed(true)
    } else {
      // その他のボタンの場合
      setButtonMessage("なんとなくだが押すのをやめておこう")
      // 3秒後にメッセージを消す
      setTimeout(() => {
        setButtonMessage("")
      }, 3000)
    }
  }

  // 色リスト (5番目は紫)
  const colorButtons = [
    { color: "#ffffff", shadow: "rgba(0, 0, 0, 0.3)", name: "白" },
    { color: "#ffff00", shadow: "rgba(255, 255, 0, 0.4)", name: "黄" },
    { color: "#ffa500", shadow: "rgba(255, 165, 0, 0.4)", name: "橙" },
    { color: "#000000", shadow: "rgba(0, 0, 0, 0.6)", name: "黒" },
    { color: "#800080", shadow: "rgba(128, 0, 128, 0.4)", name: "紫" }, // 紫色のボタン
    { color: "#00ffff", shadow: "rgba(0, 255, 255, 0.4)", name: "水色" },
    { color: "#00ff00", shadow: "rgba(0, 255, 0, 0.4)", name: "緑" },
    { color: "#ff0000", shadow: "rgba(255, 0, 0, 0.4)", name: "赤" },
    { color: "#a52a2a", shadow: "rgba(165, 42, 42, 0.4)", name: "茶" },
    { color: "#808080", shadow: "rgba(128, 128, 128, 0.4)", name: "灰" },
  ]

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
                    background: "linear-gradient(45deg, #2563eb, #1d4ed8)",
                    color: "white",
                    fontWeight: "bold",
                  }}
                />
              </motion.div>
            </Box>

            {/* Puzzle Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
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
                    mb: 2,
                    fontWeight: 300,
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                  }}
                >
                  以下の問に答えよ
                </Typography>
                <Box
                  sx={{
                    p: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    borderRadius: 2,
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                  }}
                >
                  <motion.div
                    key={question}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Typography
                      variant="h4"
                      sx={{
                        fontFamily: "'Courier New', monospace",
                        fontWeight: "bold",
                        letterSpacing: "0.1em",
                        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                      }}
                    >
                      {question}
                    </Typography>
                  </motion.div>
                </Box>
              </Paper>
            </motion.div>

            {/* Button Message */}
            <AnimatePresence>
              {buttonMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <Alert
                    severity="warning"
                    sx={{
                      mb: 3,
                      borderRadius: 2,
                      backgroundColor: "#fff3cd",
                      border: "1px solid #ffeaa7",
                      "& .MuiAlert-message": {
                        fontSize: "1rem",
                        fontWeight: 500,
                        color: "#856404",
                      },
                    }}
                  >
                    {buttonMessage}
                  </Alert>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Color Buttons Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Typography
                variant="h6"
                sx={{
                  textAlign: "center",
                  mb: 3,
                  color: "#1e40af",
                  fontWeight: "bold",
                }}
              >
                ボタン
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: 2,
                  mb: 4,
                  p: 3,
                  backgroundColor: "#f8f9fa",
                  borderRadius: 3,
                  border: "2px solid #e9ecef",
                }}
              >
                {colorButtons.map((btn, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + idx * 0.1, duration: 0.3 }}
                  >
                    <Box
                      onClick={() => handleButtonClick(idx)}
                      sx={{
                        width: 48,
                        height: 48,
                        backgroundColor: btn.color,
                        borderRadius: "50%",
                        border: btn.color === "#ffffff" ? "2px solid #dee2e6" : "2px solid rgba(0,0,0,0.1)",
                        boxShadow: `
                          0 4px 8px ${btn.shadow},
                          inset 0 2px 4px rgba(255,255,255,0.3),
                          inset 0 -2px 4px rgba(0,0,0,0.2)
                        `,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        position: "relative",
                        // 紫色のボタンのみ特別なスタイル
                        ...(idx === 4 && {
                          "&:active": {
                            transform: "translateY(0px)",
                            boxShadow: `
                              0 2px 4px ${btn.shadow},
                              inset 0 2px 6px rgba(0,0,0,0.3)
                            `,
                          },
                        }),
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          top: "15%",
                          left: "20%",
                          width: "30%",
                          height: "30%",
                          backgroundColor: "rgba(255,255,255,0.4)",
                          borderRadius: "50%",
                          filter: "blur(2px)",
                        },
                      }}
                      title={btn.name}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Answer Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <Box sx={{ mb: 3 }}>
                <TextField
                  label="回答を入力"
                  variant="outlined"
                  fullWidth
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value)
                    if (wrongAnswerError) setWrongAnswerError("")
                  }}
                  error={Boolean(wrongAnswerError)}
                  helperText={wrongAnswerError || "\u00A0"}
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
              🎯
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
              🔧
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ExtraStep3
