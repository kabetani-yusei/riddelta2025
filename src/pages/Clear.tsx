import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Paper, Typography } from "@mui/material";

function Clear() {
    return (
        <Container maxWidth="sm" sx={{ mt: 8, mb: 8 }}>
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2, textAlign: "center" }}>
                <Typography variant="h2" gutterBottom>
                    おまけ謎をクリアした！
                </Typography>
                <Typography variant="body1" gutterBottom>
                    このおまけ謎は、謎解きが得意な方々からの「時間が余って暇」という要望を受けて
                    急遽作成したものです。
                </Typography>
                <Typography variant="body1" gutterBottom>
                    金曜日、土曜日の公演では実施していないため、
                    Xなどでのおまけ謎に関する言及はお控えください。
                </Typography>
            </Paper>
        </Container>
    );
}

export default Clear;
