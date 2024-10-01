import { Grid } from "@mui/material";
import React from "react";
import Filter from "../Filter/Filter";

export default function Sidebar() {
  return (
    <Grid item xs={12} md={3}>
      <Filter
        title="Filtros"
        filters={["Filtro1", "Filtro2", "Filtro3", "Filtro4"]}
      />
    </Grid>
  );
}
