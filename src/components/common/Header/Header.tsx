"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Button,
  Container,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { pages } from "./Routes";
import sty from "./Header.styles";
import Link from "next/link";

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={sty.appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={sty.toolbar}>
            <Link href="/" passHref>
              <Box sx={sty.titleBox}>
                <Typography variant="h6" noWrap component="div" sx={sty.title}>
                  Del @GRO
                </Typography>
                <Typography variant="caption" sx={sty.subtitle}>
                  Distribuciones y servicios para el agro
                </Typography>
              </Box>
            </Link>
          </Box>

          <Box sx={sty.mobileMenuIcon}>
            <IconButton
              size="large"
              aria-label="menu"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              keepMounted
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: "block", md: "none" } }}
            >
              {pages.map((page) => (
                <Link
                  key={page.label}
                  href={page.path}
                  passHref
                  onClick={handleCloseNavMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">{page.label}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>
          <Link href="/" passHref>
            <Box sx={sty.mobileTitle}>
              <Typography variant="h6" noWrap component="div" sx={sty.title}>
                Del @GRO
              </Typography>
            </Box>
          </Link>

          <Box sx={sty.navButtonsContainer}>
            {pages.map((page) => (
              <Link key={page.label} href={page.path} passHref>
                <Button sx={sty.navButton}>
                  {page.icon}
                  <Typography variant="caption">{page.label}</Typography>
                </Button>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
