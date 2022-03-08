import { ReactNode, PropsWithoutRef } from "react"
import { Form as FinalForm, FormProps as FinalFormProps } from "react-final-form"
import { z } from "zod"
import { validateZodSchema } from "blitz"
import { Button, FormControl, FormControlProps, Box, useColorModeValue } from "@chakra-ui/react"
export { FORM_ERROR } from "final-form"

export interface FormProps<S extends z.ZodType<any, any>>
  extends Omit<PropsWithoutRef<FormControlProps>, "onSubmit"> {
  /** All your form fields */
  children?: ReactNode
  /** Text to display in the submit button */
  submitText: string
  schema?: S
  onSubmit: FinalFormProps<z.infer<S>>["onSubmit"]
  initialValues?: FinalFormProps<z.infer<S>>["initialValues"]
  component?: FinalFormProps<z.infer<S>>["component"]
  loadingText?: string
}
export function Form<S extends z.ZodType<any, any>>({
  children,
  submitText,
  schema,
  initialValues,
  onSubmit,
  component,
  loadingText,
  ...props
}: FormProps<S>) {
  const ButtonColor = useColorModeValue("white", "#8aabe0 ")
  const ButtonHover = useColorModeValue("#27282b", "#EDF2F6 ")
  const ButtonText = useColorModeValue("black ", "#27282b")
  const ButtonTextHover = useColorModeValue("#FFF", "#171923")

  return (
    <FinalForm
      initialValues={initialValues}
      validate={validateZodSchema(schema)}
      onSubmit={onSubmit}
      render={({ handleSubmit, submitting, submitError }) => (
        <FormControl as="form" onSubmit={handleSubmit} {...props}>
          {/* Form fields supplied as children are rendered here  STYLES HERE*/}

          {children}

          {submitError && <Box>{submitError}</Box>}

          {submitText && (
            <Button
              width="full"
              loadingText={loadingText}
              isLoading={submitting}
              _hover={{ backgroundColor: ButtonHover, color: ButtonTextHover }}
              color={ButtonText}
              bgColor={ButtonColor}
              type="submit"
              variant="outline"
            >
              {submitText}
            </Button>
          )}
        </FormControl>
      )}
    />
  )
}

export default Form
