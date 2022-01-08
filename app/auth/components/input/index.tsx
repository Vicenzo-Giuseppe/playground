import {  ComponentPropsWithoutRef, PropsWithoutRef, useState } from "react"
import { useField, UseFieldConfig } from "react-final-form"
import { InputProps, BoxProps, Box,Text,FormLabel,  Alert,
  Stack,
  InputLeftElement,
  InputGroup,
  Icon,
  Flex,
  Heading,
  FormControl,
  AlertIcon,
  forwardRef, Input, useColorModeValue, background, color, CircularProgress, Button, InputRightElement } from "@chakra-ui/react"
import { IconType } from "react-icons"

  export interface LabeledTextFieldProps extends InputProps {
  /** Field name. */
  name: string
  /** Field label. */
  label: string
  /** Field type. Doesn't include radio buttons and checkboxes */
  type?: "text" | "password" | "email" | "number"
  icon?: IconType
  outerProps?: PropsWithoutRef<BoxProps>
  labelProps?: ComponentPropsWithoutRef<"label">
  fieldProps?: UseFieldConfig<string>
}

export const CustomInput = forwardRef<LabeledTextFieldProps, 'input'>(
  ({ name, label, outerProps, fieldProps, labelProps,icon,  ...props }, ref) => {
    const {
      input,
      meta: { touched, error, submitError, submitting },
    } = useField(name, {
      parse:
        props.type === "number"
          ? (Number as any)
          : // Converting `""` to `null` ensures empty values will be set to null in the DB
            (v) => (v === "" ? null : v),
      ...fieldProps,
    })

    const normalizedError = Array.isArray(error) ? error.join(", ") : error || submitError
    const inputBgColor = useColorModeValue('#27282b','#8aabe0 ')
    const letter = useColorModeValue( '#FFF', '#25242f')
    const Textletter = useColorModeValue( '#27282b', '#edf2f6')
    const iconColor = useColorModeValue( '#FFF', '#2d3748')
    const iconHover = useColorModeValue( 'yellow', 'aquamarine')
    const alert = useColorModeValue( '#fdba36', '#edf2f6')

    
    return (
      <Box {...outerProps}>
        <FormLabel htmlFor={name} {...labelProps} m={0} >
          <Text color={Textletter}  >{label}</Text>
          <InputGroup>
          <Input color={letter} _autofill={{WebkitBoxShadow:  `0 0 0 1000px ${inputBgColor} inset`, WebkitTextFillColor: `${letter}`}} _placeholder={{color:letter}}  bgColor={inputBgColor} {...input} disabled={submitting} {...props} ref={ref} />
   {!icon 
   ? null 
   :   <InputLeftElement><Icon as={icon} color={iconColor} boxSize='1.3rem'  _hover={{color: iconHover}}/> </InputLeftElement>}
      </InputGroup>
        </FormLabel>
        {touched && normalizedError && (
          <Stack spacing={3}>
          <Alert mt='0.3rem' borderRadius='2'h='2.5rem' status='error' variant='solid' bgColor={alert} >
            <AlertIcon />
            {normalizedError}
          </Alert>
          </Stack>
        )}
      </Box>
    )    
  }
)

export default CustomInput
