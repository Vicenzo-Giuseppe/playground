import { Button, ButtonProps } from "@chakra-ui/react"
import { motion } from "framer-motion"

function MotionButton() {
  const MotionBtn = motion<ButtonProps>(Button)
  const Animation = {
    initial: {},
    open: {
      y: 0,
      opacity: 1,
      transition: { ease: "easeOut", duration: 0.6 },
    },
    exit: {
      y: 0,
    },
    hover: {},
    tap: {
      scale: 0.925,
    },
  }

  return <MotionBtn variants={Animation} initial="initial" whileHover="hover" whileTap="tap" />
}

export { MotionButton }
