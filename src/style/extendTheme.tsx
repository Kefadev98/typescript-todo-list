import { extendTheme } from "@chakra-ui/react";

export const customTheme = extendTheme({
  colors: {
    black: {
      100: "#000000",
      200: "#272727",
    },

    grey: {
      300: "#6d6b6b",
      400: "#4d4b4b",
    },
    white: {
      500: "#fffefe",
      600: "#adadad",
    },
  },
  fonts: {
    body: "Play, sans-serif",
  },
  textStyles: {
    h3: {
      textTransform: "uppercase",
    },
  },
  formStyles: {
    form: {
      display: "flex",
      w: "60%",
      alignItems: "center",
      pos: "relative",
    },
  },
  button: {
    position: "absolute",
    w: "50px",
    h: "50px",
    m: "12px",
    borderRadius: "50px",
    right: "0px",
    border: "none",
    fontSize: "15px",
    bg: "#6d6b6b",
    color: "white",
    transition: "0.2s all",
    boxShadow: "0 0 10px black",
    fontFamily: "Play, sans-serif",
    fontWeight: "bold",
    zIndex: "10",
    _hover: { bg: "#4d4b4b", cursor: "pointer" },
  },
});
