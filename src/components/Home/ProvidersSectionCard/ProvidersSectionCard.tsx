import { Paper, Typography, Box } from "@mui/material";
import React from "react";
import sty from "./ProvidersSectionCard.styles";
interface IProvider {
  name: string;
  imageUrl: string;
}
interface ProvidersSectionCardProps {
  provider: IProvider;
}

export default function ProvidersSectionCard({
  provider,
}: ProvidersSectionCardProps) {
  return (
    <Paper
      elevation={5}
      sx={{
        ...sty.paper,
        backgroundImage: `linear-gradient(to right, rgba(255,255,255,0), rgba(255,255,255,0.2), rgba(255,255,255,0.4), rgba(255,255,255,0.6)), url(${provider.imageUrl})`,
      }}
    >
      <Box sx={sty.container}>
        <Typography variant="h6" sx={sty.text}>
          {provider.name}
        </Typography>
      </Box>
    </Paper>
  );
}
