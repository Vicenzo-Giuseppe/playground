import { useCurrentUser } from "app/core/hooks/useCurrentUser"
import logout from "app/auth/mutations/logout"
import { useMutation, Link, Routes } from "blitz"
import { useMultiStyleConfig, Button } from "@chakra-ui/react"
import { MotionButton } from "./motionComponent"

export default function Sidebar(props) {
  const UserInfo = () => {
    const User = useCurrentUser()
    const [logoutMutation] = useMutation(logout)

    if (User) {
      return (
        <>
          <Button
            colorScheme="brand"
            variant="ghost"
            size="sm"
            onClick={async () => {
              await logoutMutation()
            }}
          >
            SignOut
          </Button>
        </>
      )
    } else {
      return (
        <>
          <Link href={Routes.SignupPage()}>
            <Button colorScheme="brand" variant="ghost" size="sm">
              Sign in
            </Button>
          </Link>
        </>
      )
    }
  }

  const variant = props
  const styles = useMultiStyleConfig("IconButton", { variant })

  console.log(styles)

  return <MotionButton />
}
