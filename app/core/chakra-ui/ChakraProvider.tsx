import {
  ChakraProvider as Chakra,
  cookieStorageManager,
  localStorageManager,
} from "@chakra-ui/react"
import { GetServerSideProps } from "blitz"
import Theme from "./theme"

interface Props {
  cookies: string
}
interface Coins {
  test: number
}
export const ChakraProvider: React.FC<Props> = ({ cookies, children }) => {
  const colorModeManager =
    typeof cookies === "string" ? cookieStorageManager(cookies) : localStorageManager

  return (
    <Chakra theme={Theme} colorModeManager={colorModeManager}>
      {children}
    </Chakra>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  return {
    props: {
      cookies: req.headers.cookie ?? "",
    },
  }
}
