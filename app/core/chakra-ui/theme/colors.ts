import { theme as baseTheme } from "@chakra-ui/react"

export const colors = {
  primary: "#7fffd4",
  aquamarine: {
    50: "#dcfff7",
    100: "#b0ffe7",
    200: "#80ffd4",
    300: "#51ffcf",
    400: "#2affcf",
    500: "#1ae6c2",
    600: "#0cb3a4",
    700: "#008080",
    800: "#004a4d",
    900: "#001b1c",
  },
  default: {
    light: "yellow",
    dark: "red",
  },
  secondary: {
    light: "#08002F",
    dark: "#fff",
  },
  light: {
    light: "#f0f0f0",
    dark: "#333",
  },
  background: {
    light: "#242929",
    dark: "#273746",
  },
  border: {
    light: "#E2E8F0",
    dark: "#333",
  },
  backgroundPageColor: {
    light: "#FFF",
    dark: "black",
  },
  letterColor: {
    light: "#9F7B6C",
    dark: "#14ffa1",
  },
  ...baseTheme.colors,
}
