import { IFeaturedProduct } from "@/interfaces/product";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import sty from "./FeaturedProductsCard.styles";
interface IFeaturedProductsCard {
  product: IFeaturedProduct;
}

export default function FeaturedProductsCard({
  product,
}: IFeaturedProductsCard) {
  const { id, name, price } = product;
  return (
    <Box sx={sty.container}>
      <Image
        src="https://w7.pngwing.com/pngs/431/289/png-transparent-insecticide-agrochemical-fungicide-chemical-industry-visanji-nagar-cotton-plant-aerosol-spray-map-water-thumbnail.png" // TODO: Change this image
        alt={`Product ${product}`}
        width={200}
        height={200}
      />
      <Typography sx={sty.name}>
        {name}
      </Typography>
      <Link href={`products/${id}`}>
        <Typography sx={sty.price}>{price}</Typography>
      </Link>
    </Box>
  );
}
