"use client";
import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhotoIcon from "@mui/icons-material/Photo";
import BusinessIcon from "@mui/icons-material/Business";
import ContactMailIcon from "@mui/icons-material/ContactMail";

export interface IPage {
  label: string;
  icon: JSX.Element;
  path: string;
}
export const pages: IPage[] = [
  { label: "Productos", icon: <ShoppingCartIcon />, path: "/products" },
  { label: "Galería", icon: <PhotoIcon />, path: "/gallery" },
  { label: "Nosotros", icon: <BusinessIcon />, path: "/about" },
  { label: "Contactos", icon: <ContactMailIcon />, path: "/contact" },
];
