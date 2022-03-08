import {
  Flex,
  useColorModeValue,
  useColorMode,
  Box,
  Heading,
  Image,
  BoxProps,
} from "@chakra-ui/react"
import * as _ from "lodash"
import { useState } from "react"
import { Link, Routes } from "blitz"
// Components  Props
import Spinner from "./loadingSpinner"

interface Props extends BoxProps {
  p?: number
  url?: string
  text?: string
  textColor?: string
  textBottom?: string
  textLeft?: string
  textPosition?: string
  imageSize?: string
  textSize?: string
  href?: string
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const PhotoCard: React.FunctionComponent<Props> = ({ p = 50, url = "" }) => (
  <Flex
    bg={useColorModeValue("#F9FAFB", "gray.600")}
    p={p}
    w="full"
    alignItems="center"
    justifyContent="center"
  >
    <Flex direction="column" justifyContent="center" alignItems="center" w="sm" mx="auto">
      <Box
        bg="gray.300"
        h={60}
        w="full"
        rounded="lg"
        shadow="md"
        bgSize="cover"
        bgPos="center"
        style={{
          backgroundImage: url,
        }}
      ></Box>
    </Flex>
  </Flex>
)

const PhotoCard2: React.FunctionComponent<Props> = ({
  p = 50,
  url = "",
  onClick,
  text = "text",
  textColor = "white",
  textBottom = "30px",
  textLeft = "30px",
  textPosition = "absolute",
  imageSize = "394px",
  textSize = "1.1rem",
  href = "a",
  ...rest
}) => {
  const [hover, setHover] = useState(false)
  const [fallback, setFallback] = useState(false)
  const { colorMode } = useColorMode()
  const onMouseEnter = () => setHover(true)
  const onMouseLeave = () => setHover(false)
  return (
    <Box
      onClick={onClick}
      flexDirection="column"
      style={{ transform: `scale(${hover ? 1.02 : 1})` }}
      transition="ease-in 0.2s"
      display="flex"
    >
      <Link href={Routes.SignupPage()}>
        <Image
          objectFit="cover"
          boxSize={imageSize}
          src={url}
          fallback={
            <Spinner onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} boxSize={imageSize}>
              {setTimeout(() => {
                setFallback(true)
              }, 5000)}
            </Spinner>
          }
          onError={() => console.log("error")}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...rest}
        />
      </Link>
      <Heading
        fontSize={textSize}
        transition="ease-in 0.15s"
        //   position={textPosition}
        bottom={textBottom}
        left={textLeft}
        color={textColor}
      >
        {fallback === false ? text.toUpperCase() : <p></p>}
      </Heading>
    </Box>
  )
}

export default PhotoCard2
