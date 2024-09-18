import { IFeaturedProduct } from "@/interfaces/product";
import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { FeaturedProductsCard } from "@/components/Home";
import sty from "./FeaturedProducts.styles";

export default function FeaturedProducts() {
  const products: IFeaturedProduct[] = [
    {
      id: 1,
      name: "Producto 1 test too long in product Name",
      price: 100,
    },
    {
      id: 2,
      name: "Producto 2",
      price: 200,
    },
    {
      id: 3,
      name: "Producto 3",
      price: 300,
    },
    {
      id: 4,
      name: "Producto 3",
      price: 300,
    },
    {
      id: 5,
      name: "Producto 3",
      price: 300,
    },
    {
      id: 6,
      name: "Producto 3",
      price: 300,
    },
    {
      id: 7,
      name: "Producto 3",
      price: 300,
    },
    {
      id: 8,
      name: "Producto 3",
      price: 300,
    },
  ];
  return (
    <Box sx={sty.container}>
      <Typography variant="h4" sx={sty.title}>
        Productos Destacados
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {products.map((product: IFeaturedProduct) => (
          <Grid item key={product.id} xs={12} sm={6} md={3} sx={sty.grid}>
            <FeaturedProductsCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
