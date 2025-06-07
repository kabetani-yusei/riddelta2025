import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

function ExtraStep3() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const placeParam = searchParams.get("place");
  const [answer, setAnswer] = useState("");
  const [wrongAnswerError, setWrongAnswerError] = useState("");

  // placeParamチェック
  if (placeParam === "シャワー室") {
    return (
      <Container maxWidth="sm" sx={{ mt: 8, mb: 8, textAlign: "center" }}>
        <Typography variant="h5" gutterBottom>
          擬態が解けた！
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/extra-step4?state=タコ型エイリアン")}
        >
          戻る
        </Button>
      </Container>
    );
  }

  if (placeParam !== "ボタン式制御室") {
    return (
      <Container maxWidth="sm" sx={{ mt: 8, mb: 8, textAlign: "center" }}>
        <Typography variant="h6" color="error" gutterBottom>
          URLが間違っています。正しいURLでアクセスしてください。
        </Typography>
      </Container>
    );
  }

  // 通常のUI
  const handleSubmit = () => {
    // 回答チェック
    if (answer === "宇宙秘宝脱出") {
      navigate("/clear");
    } else {
      setWrongAnswerError("答えが違うみたいです");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Typography variant="h4" align="center" gutterBottom>
          おまけ謎
        </Typography>
        <Typography variant="body1" gutterBottom>
          次の暗号を解読してください：{' '}
          <Box component="span" fontWeight="bold">
            ひらがな→カタカナ変換
          </Box>
        </Typography>
        {/* 回答入力 */}
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
        {/* 解答するボタンを下側に配置 */}
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

export default ExtraStep3;
