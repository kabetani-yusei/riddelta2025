"use client"

import { useState } from "react"
import { useNavigate, useSearchParams } from "react-router-dom"
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Paper,
  Chip,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Alert,
} from "@mui/material"
import { motion, AnimatePresence } from "framer-motion"
import { Lock, Key, Lightbulb, HelpCircle, CheckCircle, ChevronDown, FileText } from "lucide-react"

function ExtraStep4() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const placeParam = searchParams.get("place")
  const [answer, setAnswer] = useState("")
  const [wrongAnswerError, setWrongAnswerError] = useState("")
  const [buttonMessage, setButtonMessage] = useState("")

  // placeParamチェック - シャワー室の場合
  if (placeParam?.includes("シャワー")) {
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
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Paper
              elevation={8}
              sx={{
                p: 4,
                textAlign: "center",
                borderRadius: 3,
                background: "linear-gradient(145deg, #ffffff 0%, #f8f9fa 100%)",
              }}
            >
              <CheckCircle size={64} color="#10b981" style={{ marginBottom: "16px" }} />
              <Typography
                variant="h4"
                sx={{
                  color: "#10b981",
                  fontWeight: "bold",
                  mb: 3,
                }}
              >
                擬態が解けた！
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate("/extra-step5?state=タコ型エイリアン")}
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
                }}
              >
                戻る
              </Button>
            </Paper>
          </motion.div>
        </Container>
      </Box>
    )
  }

  // URLエラーの場合
  if (placeParam !== "ボタン式制御室") {
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

  // 通常のUI
  const handleSubmit = () => {
    if (answer === "宇宙秘宝脱出" || answer === "#宇宙秘宝脱出" || answer === "＃宇宙秘宝脱出") {
      navigate("/clear")
    } else {
      setWrongAnswerError("答えが違うみたいです")
    }
  }

  // ボタンクリック時の処理
  const handleButtonClick = () => {
    setButtonMessage("なんとなくだが押すのをやめておこう")
    // 3秒後にメッセージを消す
    setTimeout(() => {
      setButtonMessage("")
    }, 3000)
  }

  // 色リスト（より立体的なボタン用）
  const colorButtons = [
    { color: "#ffffff", shadow: "rgba(0, 0, 0, 0.3)", name: "白" },
    { color: "#ffff00", shadow: "rgba(255, 255, 0, 0.4)", name: "黄" },
    { color: "#ffa500", shadow: "rgba(255, 165, 0, 0.4)", name: "橙" },
    { color: "#000000", shadow: "rgba(0, 0, 0, 0.6)", name: "黒" },
    { color: "#0000ff", shadow: "rgba(0, 0, 255, 0.4)", name: "青" },
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
                  label="FINAL STEP"
                  sx={{
                    background: "linear-gradient(45deg, #d4af37, #ffd700)",
                    color: "#1e40af",
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
                  <Typography
                    variant="h4"
                    sx={{
                      fontFamily: "'Courier New', monospace",
                      fontWeight: "bold",
                      letterSpacing: "0.1em",
                      textShadow: "0 2px 4px rgba(0,0,0,0.3)",
                    }}
                  >
                    諢丞袖荳肴�縺ｪ譁�ｭ怜�
                  </Typography>
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
                      onClick={() => handleButtonClick()}
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
                      }}
                    />
                  </motion.div>
                ))}
              </Box>
            </motion.div>

            {/* Manual Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Box sx={{ mb: 4 }}>
                <Accordion
                  sx={{
                    borderRadius: 2,
                    "&:before": {
                      display: "none",
                    },
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown size={20} />}
                    sx={{
                      backgroundColor: "#f1f5f9",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#e2e8f0",
                      },
                    }}
                  >
                    <Box display="flex" alignItems="center">
                      <FileText size={20} color="#2563eb" style={{ marginRight: "8px" }} />
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: "500",
                          color: "#334155",
                        }}
                      >
                        マニュアルはこちら
                      </Typography>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <Box
                      sx={{
                        p: 3,
                        backgroundColor: "#fffbeb",
                        borderRadius: 2,
                        border: "1px solid #fbbf24",
                        position: "relative",
                        "&::before": {
                          content: '""',
                          position: "absolute",
                          top: 8,
                          left: 8,
                          width: 12,
                          height: 12,
                          backgroundColor: "#f59e0b",
                          borderRadius: "50%",
                          boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                        },
                      }}
                    >
                      <Typography
                        variant="body2"
                        sx={{
                          fontFamily: "'Courier New', monospace",
                          lineHeight: 2,
                          color: "#92400e",
                          fontSize: "0.9rem",
                          pl: 3,
                        }}
                      >
                        はいいろ・・・でんげんおふ
                        <br />
                        むらさき・・・しゅうふく
                        <br />
                        あかいろ・・・かくしきんこ
                      </Typography>
                    </Box>
                  </AccordionDetails>
                </Accordion>
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
                  label="解答を記入してください"
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

            {/* Hints Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
            >
              <Box sx={{ mb: 4 }}>
                <Box display="flex" alignItems="center" mb={2}>
                  <HelpCircle size={24} color="#2563eb" style={{ marginRight: "8px" }} />
                  <Typography
                    variant="h6"
                    sx={{
                      color: "#2563eb",
                      fontWeight: "bold",
                    }}
                  >
                    ヒント
                  </Typography>
                </Box>

                {/* Hint 1 */}
                <Accordion
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    "&:before": {
                      display: "none",
                    },
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown size={20} />}
                    sx={{
                      backgroundColor: "#f1f5f9",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#e2e8f0",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "500",
                        color: "#334155",
                      }}
                    >
                      ヒント1
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "#475569",
                      }}
                    >
                      問が読めないので、紫色のボタンを押して修復する必要がありそうです
                      <br />
                      ただ、紫色のボタンが見当たりません
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Hint 2 */}
                <Accordion
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    "&:before": {
                      display: "none",
                    },
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown size={20} />}
                    sx={{
                      backgroundColor: "#f1f5f9",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#e2e8f0",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "500",
                        color: "#334155",
                      }}
                    >
                      ヒント2
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "#475569",
                        mb: 1,
                      }}
                    >
                      擬態を解くためにはシャワーを浴びる必要があります
                      <br />
                      Web上でシャワー室に移動する方法を考えてみましょう
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                {/* Hint 3 */}
                <Accordion
                  sx={{
                    mb: 1,
                    borderRadius: 2,
                    "&:before": {
                      display: "none",
                    },
                    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  <AccordionSummary
                    expandIcon={<ChevronDown size={20} />}
                    sx={{
                      backgroundColor: "#f1f5f9",
                      borderRadius: 2,
                      "&:hover": {
                        backgroundColor: "#e2e8f0",
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "500",
                        color: "#334155",
                      }}
                    >
                      ヒント3
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "#ffffff",
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <Typography
                      variant="body2"
                      sx={{
                        lineHeight: 1.6,
                        color: "#475569",
                      }}
                    >
                      おまけ謎のURLでは、state=公演開始直後のように情報が含まれていました
                      <br />
                      現在のURLはどうなっているか確認してみましょう
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </motion.div>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

export default ExtraStep4
