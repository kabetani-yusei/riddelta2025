import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography, Box} from "@mui/material";

function Epilogue() {
  const navigate = useNavigate();

  return (
    <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
      <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
        <Box sx={{ whiteSpace: "pre-line" }}>
          <Typography variant="body1" gutterBottom>
            この紙を読んでいるということは、
            ヨカリスの箱、カルガットの鍵、リヴァルノの古文書、
            そして真の秘宝、ブラックライト
            をあなたは無事に手に入れられたのでしょう。
          </Typography>
          <Typography variant="body1" gutterBottom>
            しかし、疑問に思いませんでしたか？
            <Box component="span" fontWeight="bold">
              「なぜ真の秘宝であるブラックライトを使わなければ、
              宇宙船復旧の方法が分からないようになっていたのか？」と
            </Box>
            。
          </Typography>
          <Typography variant="body1" gutterBottom>
            実は私リド・エルターは既に宝を見つけていたのです。
            その上で改めて隠したのです。
            私が見つけたブラックライトは、カルガットで大流行しました。
            しかし、使いすぎた影響で、タコの状態では目が慣れていたものの、
            擬態時には順応できず、紫色が青色に見えるようになってしまったのです。
          </Typography>
          <Typography variant="body1" gutterBottom>
            メリットの大きなものには何かしらのデメリットがあるはずです。
            それを踏まえた上で、あなたたちにこの秘宝を
            <Box component="span" fontWeight="bold">「託します」</Box>。
          </Typography>
        </Box>
        <Typography variant="body1" align="right" sx={{ mt: 2 }}>
          リド・エルター
        </Typography>
        <Box mt={4} textAlign="center">
        </Box>
      </Paper>
    </Container>
  );
}

export default Epilogue;
