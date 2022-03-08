import { useEffect, useState } from "react"

export default function useWindow() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    handleSize()
    window.addEventListener("resize", handleSize)
  }, [])

  useEffect(() => {
    const handleMousePostion = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      })
    }
    document.addEventListener("mousemove", handleMousePostion)
    const cleanUp = () => {
      console.log("useEffect dep changes")
      document.removeEventListener("mousemove", handleMousePostion)
    }

    return cleanUp
  }, [])

  const { width, height } = windowSize
  const { x, y } = position

  return {
    width,
    height,
    x,
    y,
  }
}
