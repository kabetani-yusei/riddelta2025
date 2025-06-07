import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

function ExtraStep2() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const nazoParam = searchParams.get("nazo");
  const [answer, setAnswer] = useState("");
  const [wrongAnswerError, setWrongAnswerError] = useState("");

  // クエリパラメータチェック
  if (nazoParam !== "おまけ謎") {
    return (
      <Container maxWidth="sm" sx={{ mt: 8, mb: 8, textAlign: "center" }}>
        <Typography variant="h6" color="error" gutterBottom>
          URLが間違っています。正しいURLでアクセスしてください。
        </Typography>
      </Container>
    );
  }

  // ひらがなのみかを判定
  const hiraganaRegex = /^[ぁ-ん]+$/;
  const inputError = answer !== "" && !hiraganaRegex.test(answer);

  const handleSubmit = () => {
    if (answer !== "おまけなぞ") {
      navigate("/extra-step3?place=ボタン式制御室");
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
        {/* 回答入力と送信ボタン */}
        <Box display="flex" alignItems="flex-start" mt={3}>
          <TextField
            label="回答"
            variant="outlined"
            fullWidth
            value={answer}
            onChange={(e) => {
              setAnswer(e.target.value);
              if (wrongAnswerError) setWrongAnswerError("");
            }}
            error={inputError || Boolean(wrongAnswerError)}
            helperText={
              inputError
                ? "すべてひらがなで入力してください"
                : wrongAnswerError
                  ? wrongAnswerError
                  : '\u00A0'
            }
          />
        </Box>
        {/* 解答するボタンを下側に配置 */}
        <Box mt={2} textAlign="center">
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleSubmit}
            disabled={answer === "" || inputError}
          >
            解答する
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

export default ExtraStep2;
