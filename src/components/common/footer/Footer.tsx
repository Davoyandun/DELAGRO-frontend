import { Box, Container, Typography } from "@mui/material";
import React from "react";
import sty from "./Footer.styles";
export default function Footer() {
  return (
    <Box component="footer" sx={sty.footer}>
      <Container maxWidth="lg" sx={sty.content}>
        <Typography variant="body2" sx={sty.text}>
          &copy; 2024 Del @GRO. Todos los derechos reservados.
        </Typography>
      </Container>
    </Box>
  );
}
