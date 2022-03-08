import { extendTheme, ThemeConfig, withDefaultColorScheme } from "@chakra-ui/react"
import ThemeProps from "@chakra-ui/cli"
import { components } from "../components"
import { styles } from "./styles"
import { colors } from "./colors"
import { layerStyles } from "./layerStyles"
import { textStyles } from "./textStyles"

const config: ThemeConfig = {
  initialColorMode: "system",
}

const theme: ThemeProps = {
  styles,
  config,
  colors,
  components,
  layerStyles,
  textStyles,
}

export default extendTheme(
  theme,
  withDefaultColorScheme({
    colorScheme: "aquamarine",
  })
)

export { theme }
