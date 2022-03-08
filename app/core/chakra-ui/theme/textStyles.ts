import { ChakraProps } from "@chakra-ui/react"

const textStyles = {
  h1: {
    fontSize: ["48px", "72px"],
    fontWeight: "bold",
    lineHeight: "110%",
    letterSpacing: "-2%",
  },
  h2: {
    fontSize: "1.3rem",
    fontWeight: "regular",
    lineHeight: "150%",
    letterSpacing: "-2S%",
  },
  p: {
    fontSize: ["1rem", "1.4rem"],
    fontWeight: "medium",
    lineHeight: "130%",
    letterSpacing: "-2%",
  },
}

export type TextStyles = typeof textStyles
export { textStyles }
