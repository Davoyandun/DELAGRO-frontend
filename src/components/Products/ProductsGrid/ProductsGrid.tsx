import { Grid } from "@mui/material";
import React from "react";
import ProductCard from "../ProductCard/ProductCard";
interface IProductGridProps {
  products: {
    id: number;
    name: string;
    price: string;
    image: string;
  }[];
}
export default function ProductsGrid({ products }: IProductGridProps) {
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4}>
          <ProductCard product={product} />
        </Grid>
      ))}
    </Grid>
  );
}
