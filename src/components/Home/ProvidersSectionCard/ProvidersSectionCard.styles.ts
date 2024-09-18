const paper = {
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  height: 120,
  p: 2,
  textAlign: "left",
  position: "relative",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "right center",
  borderRadius: 2,
};

const container = {
  flex: 1,
  display: "flex",
  justifyContent: "flex-end",
  pr: 2,
};

const text = {
  fontWeight: "bold",
  color: "black",
  textAlign: "right",
  fontSize: { xs: "1rem", md: "1.25rem" },
  lineHeight: 1.2,
  textShadow: "1px 1px 3px rgba(0,0,0,0.3)",
};

const styles = { paper, container, text };
export default styles;
