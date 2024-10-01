import { Box, Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sty from "./ProductCard.styles";

interface IProductProps {
  product: {
    id: string;
    name: string;
    price: string;
    image: string;
  };
}

export default function ProductCard({ product }: IProductProps) {
  return (
    <Card sx={sty.container}>
      <Box sx={sty.imageContainer}>
        <Image
          src="https://w7.pngwing.com/pngs/431/289/png-transparent-insecticide-agrochemical-fungicide-chemical-industry-visanji-nagar-cotton-plant-aerosol-spray-map-water-thumbnail.png"
          alt={product.name}
          fill
          style={{
            top: 10,
            objectFit: "contain",
            transition: "transform 0.3s ease",
          }}
        />
      </Box>
      <CardContent sx={sty.textContainer}>
        <Link href={`/products/${product.id}`} passHref>
          <Typography
            variant="h6"
            sx={sty.name}
          >
            {product.name}
          </Typography>
        </Link>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={sty.price}
        >
          {product.price}
        </Typography>
      </CardContent>
    </Card>
  );
}
