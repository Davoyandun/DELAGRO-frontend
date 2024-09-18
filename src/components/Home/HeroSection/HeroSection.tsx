import React from "react";
import Image from "next/image";
import { Box, Typography } from "@mui/material";
import sty from "./HeroSection.styles";

export default function HeroSection() {
  return (
    <Box sx={sty.container}>
      <Image
        src="/banner.jpg"
        alt="growing plants"
        layout="fill"
        objectFit="cover"
        quality={100}
        style={sty.image}
      />
      <Box sx={sty.textContainer}>
        <Typography variant="h4" sx={sty.title}>
          AGROQUÍMICOS Y FERTILIZANTES
        </Typography>
        <Typography variant="h6" sx={sty.subtitle}>
          Distribuciones y servicios para el agro
        </Typography>
      </Box>
    </Box>
  );
}
