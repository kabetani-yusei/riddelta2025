import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

function ExtraStep4() {
  const navigate = useNavigate();
  const [pushed, setPushed] = useState(false);
  const [answer, setAnswer] = useState("");
  const [wrongAnswerError, setWrongAnswerError] = useState("");

  // 出題文
  const question = "以下の謎を解け";

  const handleSubmit = () => {
    if (
      answer === "宇宙秘宝脱出" ||
      answer === "#宇宙秘宝脱出" ||
      answer === "＃宇宙秘宝脱出"
    ) {
      navigate("/clear");
    } else {
      setWrongAnswerError("答えが違うみたいです");
    }
  };

  // 色リスト (5番目は紫)
  const colors = [
    "#fff", // 白
    "#ff0", // 黄
    "#ffa500", // 橙
    "#000", // 黒
    "#800080", // 紫
    "#0ff", // 水色
    "#0f0", // 緑
    "#f00", // 赤
    "#a52a2a", // 茶
    "#808080" // 灰
  ];

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          おまけ謎
        </Typography>
        <Typography variant="body1" gutterBottom>
          {question}
        </Typography>
        {/* ○をテキストフィールド上に配置 */}
        <Box mt={2} display="flex" justifyContent="space-around">
          {colors.map((color, idx) => (
            <Box
              key={idx}
              onClick={() => idx === 4 && setPushed(true)}
              sx={{
                width: 32,
                height: 32,
                bgcolor: color,
                borderRadius: '50%',
                border: '1px solid #000',
                cursor: idx === 4 ? 'pointer' : 'default',
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.3)'
              }}
            />
          ))}
        </Box>
        <Box mt={3}>
          <TextField
            label="回答"
            variant="outlined"
            fullWidth
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              if (wrongAnswerError) setWrongAnswerError("");
            }}
            error={Boolean(wrongAnswerError)}
            helperText={wrongAnswerError || '\u00A0'}
          />
        </Box>
        <Box mt={2} textAlign="center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleSubmit}
            disabled={answer === ""}
          >
            解答する
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ExtraStep4;
