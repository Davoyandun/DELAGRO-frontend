import { SxProps, Theme } from "@mui/material/styles";

const container: SxProps<Theme> = {
  position: "relative",
  height: { xs: "40vh", sm: "50vh", md: "70vh" },
  width: "100%",
  overflow: "hidden",
  borderRadius: 1,
};
const image = { filter: "brightness(70%)" };
const textContainer: SxProps<Theme> = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  p: { xs: 2, sm: 3 },
};

const title: SxProps<Theme> = {
  fontWeight: "bold",
  mb: 2,
  color: "white",
  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
  textAlign: "center",
  px: 2,
};

const subtitle: SxProps<Theme> = {
  color: "white",
  textShadow: "1px 1px 3px rgba(0, 0, 0, 0.7)",
  textAlign: "center",
  px: 2,
};

const style = { container, image, textContainer, title, subtitle };
export default style;
