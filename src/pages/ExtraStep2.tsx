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
} from "@mui/material"
import { motion } from "framer-motion"
import { Lock, Key, Lightbulb, HelpCircle, ChevronDown } from "lucide-react"
import step2Image from "../assets/step2-extra.png"

function ExtraStep2() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const stateParam = searchParams.get("state")
  const [answer, setAnswer] = useState("")
  const [wrongAnswerError, setWrongAnswerError] = useState("")

  // クエリパラメータチェック
  if (stateParam !== "2つ目の惑星") {
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
    if (answer === "たから") {
      navigate("/extra-step3?state=3つ目の惑星")
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
                  label="2nd STEP"
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
                  「？」に入る単語は何？
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
                    src={step2Image}
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
                  label="解答を記入してください"
                  variant="outlined"
                  fullWidth
                  value={answer}
                  onChange={(e) => {
                    setAnswer(e.target.value)
                    if (wrongAnswerError) setWrongAnswerError("")
                  }}
                  error={Boolean(wrongAnswerError)}
                  helperText={
                    wrongAnswerError ? wrongAnswerError : "\u00A0"
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
                      棒の数を数えてみましょう
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
                      棒の数を数えるとこのようになります
                    </Typography>
                    <Box
                      sx={{
                        backgroundColor: "#f8fafc",
                        p: 2,
                        borderRadius: 1,
                        border: "1px solid #e2e8f0",
                      }}
                    >
                      <Typography variant="body2" sx={{ color: "#475569", fontFamily: "monospace" }}>
                        627 = はかま
                        <br />
                        325 = さかな
                        <br />
                        429 = 　？
                      </Typography>
                    </Box>
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
                      あ段の何文字目かを表しています
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

export default ExtraStep2
