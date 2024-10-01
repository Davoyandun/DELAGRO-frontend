import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { ProductsGrid, Sidebar } from "@/components/Products";

const products = Array(9)
  .fill(null)
  .map((_, index) => ({
    id: index + 1,
    name: `Nombre del producto ${index + 1}`,
    price: `Precio ${index + 1}`,
    image: "/placeholder.svg?height=200&width=200",
  }));

export default function page() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Sidebar />

        <Grid item xs={12} md={9}>
          <Box sx={{ bgcolor: "#e8f5e9", p: 2, borderRadius: 1 }}>
            <ProductsGrid products={products} />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
