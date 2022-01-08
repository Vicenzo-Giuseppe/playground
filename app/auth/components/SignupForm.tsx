import { useMutation, Link, Routes } from "blitz"
import Input from "./input"
import { Form, FORM_ERROR } from "./Form"
import signup from "app/auth/mutations/signup"
import { Signup } from "app/auth/validations"
import { MdOutlineMailOutline as EmailIcon,  MdPassword as PasswordIcon } from "react-icons/md"
import { Box, Flex, Heading, useColorModeValue, Text  } from "@chakra-ui/react"

type SignupFormProps = {
  onSuccess?: () => void
}

export const SignupForm = (props: SignupFormProps) => {
  const [signupMutation] = useMutation(signup)
  const bg = useColorModeValue('#FFF', '#748ec4')
  const TextColor = useColorModeValue('gray.200', '#748ec4')
  const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

  return (
    <Flex width="full" align="center" justifyContent="center">
    <Box
      p={8}
      maxWidth='31.25rem'
      borderWidth={2}
      borderRadius={8}
      boxShadow="lg"
      bgColor={bg}


    >
      <Form
        submitText='Sign Up'
        schema={Signup}
        initialValues={{ email: "", password: "" }}
        onSubmit={async (values) => {
          await sleep(300)
  window.alert(JSON.stringify(values))
          try {
            await signupMutation(values)
            
            props.onSuccess
          } catch (error: any) {
            if (error.code === "P2002" && error.meta?.target?.includes("email")) {
              // This error comes from Prisma
              return { email: "This email is already being used" }
            } else {
              return { [FORM_ERROR]: error.toString() }
            }
          }
        }}
      >

          <Box textAlign="center">
            <Heading>Signup </Heading>
          </Box>
          <Box my={4} textAlign="left">
          <Input icon={EmailIcon}name="email" label="Email" placeholder="Email" />
        <Input icon={PasswordIcon} name="password" label="Password" placeholder="Password" type="password" />
          </Box>
          </Form>
          <Link href={Routes.ForgotPasswordPage()}>
          <Text  fontSize='1.1rem' mt='0.5rem'  textAlign='center'textDecoration='underline' color='gray.500' bgAttachment='fixed'>
          Forget Your Password?
          </Text>
        </Link>
        
    </Box>
    </Flex>
  )
}

export default SignupForm

