import { Box } from "@chakra-ui/react"
import useWindow from "../hooks/useWindow"

const CustomCursor = () => {
  const { x, y } = useWindow()

  return (
    <>
      <Box
        style={{
          left: `${x}px`,
          top: `${y}px`,
          position: "fixed",
          width: "8px",
          height: "8px",
          backgroundColor: "black",
          borderRadius: "100%",
          transform: "translate(-50%, -50%)",
          zIndex: "999",
          pointerEvents: "none",
        }}
        top="50%"
        x
        left="50%"
      ></Box>
    </>
  )
}

export default CustomCursor
