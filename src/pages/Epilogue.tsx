"use client"
import { Container, Paper, Typography, Box, Divider } from "@mui/material"
import { motion } from "framer-motion"

function Epilogue() {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        py: 4,
      }}
    >
      <Container maxWidth="md">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Paper
            elevation={12}
            sx={{
              p: { xs: 3, md: 6 },
              borderRadius: 3,
              background: "linear-gradient(145deg, #fefefe 0%, #f8f9fa 100%)",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "4px",
                background: "linear-gradient(90deg, #d4af37, #ffd700, #d4af37)",
                borderRadius: "12px 12px 0 0",
              },
            }}
          >
            {/* Header */}
            <Box textAlign="center" mb={4}>
              <Typography
                variant="h3"
                component="h1"
                sx={{
                  fontFamily: "'Noto Serif JP', serif",
                  fontWeight: 300,
                  color: "#2c3e50",
                  mb: 1,
                  textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                }}
              >
                後日談
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#7f8c8d",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                Epilogue
              </Typography>
            </Box>

            <Divider sx={{ mb: 4, borderColor: "#d4af37" }} />

            {/* Content */}
            <Box sx={{ whiteSpace: "pre-line" }}>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.6 }}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 2,
                    color: "#34495e",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    textIndent: "1em",
                  }}
                >
                  この紙を読んでいるということは、
                  <Box component="span" sx={{ color: "#d4af37", fontWeight: "bold" }}>
                    ヨカリスの箱
                  </Box>
                  、
                  <Box component="span" sx={{ color: "#d4af37", fontWeight: "bold" }}>
                    カルガットの鍵
                  </Box>
                  、
                  <Box component="span" sx={{ color: "#d4af37", fontWeight: "bold" }}>
                    リヴァルノの古文書
                  </Box>
                  、そして真の秘宝、
                  <Box component="span" sx={{ color: "#8e44ad", fontWeight: "bold" }}>
                    ブラックライト
                  </Box>
                  をあなたは無事に手に入れられたのでしょう。
                </Typography>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.6 }}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 2,
                    color: "#34495e",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    textIndent: "1em",
                  }}
                >
                  しかし、疑問に思いませんでしたか？
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      color: "#e74c3c",
                      display: "block",
                      textAlign: "center",
                      my: 2,
                      p: 2,
                      backgroundColor: "#fdf2f2",
                      borderRadius: 2,
                      border: "1px solid #fadbd8",
                    }}
                  >
                    「なぜ真の秘宝であるブラックライトを使わなければ、
                    宇宙船復旧の方法が分からないようになっていたのか？」と
                  </Box>
                </Typography>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 2,
                    color: "#34495e",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    textIndent: "1em",
                  }}
                >
                  実は私リド・エルターは既に宝を見つけていたのです。 その上で改めて隠したのです。
                  私が見つけたブラックライトは、カルガットで大流行しました。
                  しかし、使いすぎた影響で、タコの状態では目が慣れていたものの、
                  擬態時には順応できず、紫色が青色に見えるようになってしまったのです。
                </Typography>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.6 }}>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{
                    fontSize: "1.1rem",
                    lineHeight: 2,
                    color: "#34495e",
                    fontFamily: "'Noto Sans JP', sans-serif",
                    textIndent: "1em",
                  }}
                >
                  メリットの大きなものには何かしらのデメリットがあるはずです。
                  それを踏まえた上で、あなたたちにこの秘宝を
                  <Box
                    component="span"
                    sx={{
                      fontWeight: "bold",
                      color: "#27ae60",
                      fontSize: "1.2rem",
                    }}
                  >
                    「託します」
                  </Box>
                  。
                </Typography>
              </motion.div>
            </Box>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.5, duration: 0.6 }}
            >
              <Box textAlign="right" mt={4}>
                <Typography
                  variant="h6"
                  sx={{
                    fontFamily: "'Noto Serif JP', serif",
                    color: "#2c3e50",
                    fontStyle: "italic",
                    position: "relative",
                    "&::before": {
                      content: '"—"',
                      marginRight: 1,
                      color: "#d4af37",
                    },
                  }}
                >
                  リド・エルター
                </Typography>
              </Box>
            </motion.div>

            {/* Decorative elements */}
            <Box
              sx={{
                position: "absolute",
                bottom: 16,
                left: 16,
                opacity: 0.1,
                fontSize: "4rem",
                color: "#d4af37",
                fontFamily: "'Noto Serif JP', serif",
              }}
            >
              ✦
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: 16,
                right: 16,
                opacity: 0.1,
                fontSize: "4rem",
                color: "#d4af37",
                fontFamily: "'Noto Serif JP', serif",
              }}
            >
              ✦
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Epilogue
