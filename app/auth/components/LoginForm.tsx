import {AuthenticationError, Link, useMutation, Routes, PromiseReturnType} from "blitz"
import Input from "./input"
import {Form, FORM_ERROR} from "./Form"
import login from "app/auth/mutations/login"
import {Login} from "app/auth/validations"
import { MdOutlineMailOutline as EmailIcon,  MdPassword as PasswordIcon } from "react-icons/md"
import { Box, Flex, Heading, useColorModeValue, Text  } from "@chakra-ui/react"
type LoginFormProps = {
  onSuccess?: (user: PromiseReturnType<typeof login>) => void
}

export const LoginForm = (props: LoginFormProps) => {
  const [loginMutation] = useMutation(login)
  const bg = useColorModeValue('#FFF', '#748ec4')
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
        submitText="Login"
        schema={Login}
        initialValues={{email: "", password: ""}}
        onSubmit={async (values) => {
          try {
            const user = await loginMutation(values)
            props.onSuccess?.(user)
          } catch (error: any) {
            if (error instanceof AuthenticationError) {
              return {[FORM_ERROR]: "Sorry, those credentials are invalid"}
            } else {
              return {
                [FORM_ERROR]:
                  "Sorry, we had an unexpected error. Please try again. - " + error.toString(),
              }
            }
          }
        }}
      >
          <Box textAlign="center">
            <Heading>Login </Heading>
          </Box>
          <Box my={4} textAlign="left">
          <Input icon={EmailIcon}name="email" label="Email" placeholder="Email" />
        <Input icon={PasswordIcon} name="password" label="Password" placeholder="Password" type="password" />
          </Box>
  
          <Link href={Routes.ForgotPasswordPage()}>
          <Text  fontSize='1.1rem' mt='0.5rem'  textAlign='center'textDecoration='underline' color='gray.500' bgAttachment='fixed'>
          Forget Your Password?
          </Text>
        </Link>
        </Form>
      </Box>
    </Flex>
  )
}

export default LoginForm


//<div style={{marginTop: "1rem"}}>
//Or <Link href={Routes.SignupPage()}>Sign Up</Link>
//Or <Link href={Routes.ForgotPassword()}>Forgot Password</Link>
//</div>