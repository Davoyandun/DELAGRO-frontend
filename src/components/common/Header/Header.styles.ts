import { SxProps, Theme } from "@mui/material/styles";

const appBar: SxProps<Theme> = {
  backgroundColor: "#ffffff",
  color: "#000000",
  backgroundImage: 'url("/mnt/data/image.png")',
  backgroundSize: "cover",
};

const toolbar: SxProps<Theme> = {
  display: { xs: "none", md: "flex" },
  alignItems: "center",
  mr: 2,
};

const titleBox: SxProps<Theme> = { ml: 2 };

const title: SxProps<Theme> = {
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "#B92302",
};

const subtitle: SxProps<Theme> = {
  fontFamily: "monospace",
  color: "#B92302",
};

const mobileMenuIcon: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: "flex", md: "none" },
};

const mobileTitle: SxProps<Theme> = {
  flexGrow: 1,
  justifyContent: "center",
  display: { xs: "flex", md: "none" },
  fontFamily: "monospace",
  fontWeight: 700,
  letterSpacing: ".3rem",
  color: "#B92302",
};

const navButtonsContainer: SxProps<Theme> = {
  flexGrow: 1,
  display: { xs: "none", md: "flex" },
  justifyContent: "space-around",
  ml: 5,
  mr: 5,
};

const navButton: SxProps<Theme> = {
  my: 2,
  color: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textTransform: "none",
};

const style = {
  appBar,
  toolbar,
  titleBox,
  title,
  subtitle,
  mobileMenuIcon,
  mobileTitle,
  navButtonsContainer,
  navButton,
};

export default style;
