import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Container, Typography, TextField, Button, Box, Paper } from "@mui/material";

function ExtraStep4() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const pushedParam = searchParams.get("pushed") === "True";
  const [answer, setAnswer] = useState("");
  const [wrongAnswerError, setWrongAnswerError] = useState("");

  // 出題文を切り替え
  const question = "以下の謎を解け"

  const handleSubmit = () => {
    if (answer === "宇宙秘宝脱出" || answer === "#宇宙秘宝脱出" || answer === "＃宇宙秘宝脱出") {
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
          {question}
        </Typography>
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
