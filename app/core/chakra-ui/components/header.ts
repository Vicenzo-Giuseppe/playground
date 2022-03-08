import { ComponentMultiStyleConfig as MultiStyleConfig } from "@chakra-ui/react"
import { mode } from "@chakra-ui/theme-tools"

const Header: MultiStyleConfig = {
  parts: ["Card", "BoxItem", "TextItem", "SectionBox", "Link", "SVG"],
  baseStyle: (props) => ({
    Card: {
      boxShadow: "lg",
      rounded: "lg",
      flexDirection: "column",
      p: ".7rem",
      bgColor: mode("aquamarine.500", "aquamarine.600")(props),
    },
    BoxItem: {
      textStyle: "aqua",
      color: "gray.600",
      _hover: { color: mode("aquamarine.600", "white")(props) },
    },
    SectionBox: {
      textStyle: "p",
      titleTextStyle: "h1",
    },
    Link: {
      m: "-3",
      d: "flex",
      alignItens: "start",
      _hover: { bg: "#83c9bc" },
      pt: "0",
    },
    SVG: {
      flexShrink: "0",
      boxSize: "6",
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 24 24",
      stroke: "currentColor",
    },
  }),
  sizes: {
    sm: {
      BoxItem: {
        fontSize: "10rem",
        px: 2,
        py: 1,
      },
    },
    md: {
      BoxItem: {
        fontSize: "1rem",
        px: 3,
        py: 2,
      },
    },
  },
  variants: {
    aqua: (props) => ({
      Card: {
        bgColor: "#FFF",
      },
      BoxItem: {},

      /*  BoxItem: {
        margin:'0rem 0rem 0rem 0rem',
        fontSize:"md",
        _focus:{boxShadow: "none" },
        _hover:{   bgGradient: 'aquamarine.900'},
        },
        */
    }),
    defaultProps: {},
  },
}

export default Header
