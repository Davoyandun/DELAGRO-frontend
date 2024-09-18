import React from "react";
import { Box, Typography, Grid, Paper } from "@mui/material";
import ProvidersSectionCard from "../ProvidersSectionCard/ProvidersSectionCard";
import sty from "./ProvidersSection.styles";

export default function ProvidersSection() {
  const providers = [
    {
      name: "FMC",
      imageUrl: "https://s3-symbol-logo.tradingview.com/fmc--600.png",
    },
    {
      name: "BAYER",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1549045005918130181/9QSBQiNF_400x400.jpg",
    },
    {
      name: "VERSA",
      imageUrl:
        "https://grupoversa.com/files/storage/fa755791d0509bb06ae715a2072de724815ed84d.png",
    },
    {
      name: "FMC",
      imageUrl: "https://s3-symbol-logo.tradingview.com/fmc--600.png",
    },
    {
      name: "VERSA",
      imageUrl:
        "https://grupoversa.com/files/storage/fa755791d0509bb06ae715a2072de724815ed84d.png",
    },
    {
      name: "BAYER",
      imageUrl:
        "https://pbs.twimg.com/profile_images/1549045005918130181/9QSBQiNF_400x400.jpg",
    },
  ];

  return (
    <Box sx={sty.container}>
      <Box sx={sty.subContainer}>
        <Typography variant="h4" sx={sty.title}>
          Nuestros proveedores
        </Typography>
        <Grid container spacing={3}>
          {providers.map((provider, index) => (
            <Grid item xs={6} md={4} key={`providers-${index}`}>
              <ProvidersSectionCard provider={provider} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
