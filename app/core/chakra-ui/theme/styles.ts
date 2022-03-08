import { mode, GlobalStyles } from "@chakra-ui/theme-tools"

export const styles: GlobalStyles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("#73839e", "#F6F6F6")(props),
    },
  }),
}
