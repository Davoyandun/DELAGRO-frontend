const container = {
  borderRadius: 2,
  boxShadow: 3,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: 6,
  },
};

const imageContainer = {
  width: "100%",
  height: 200,
  position: "relative",
  overflow: "hidden",
  borderTopLeftRadius: 8,
  borderTopRightRadius: 8,
};

const textContainer = { textAlign: "center" };

const name = {
  textDecoration: "none",
  color: "inherit",
  "&:hover": {
    textDecoration: "underline",
  },
};

const price = { mt: 1, fontWeight: 500 };


const styles = {
  container,
  imageContainer,
  textContainer,
  name,
  price,
};

export default styles;
