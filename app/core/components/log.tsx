const empty = []

const base = [
  "font-size: 14px",
  "font-weight: bold",
  "color: #fff",
  "background-color: #444",
  "padding: 2px 4px",
  "border-radius: 2px",
]

const initial = ["color: yellow", "font-size: 30px", "label-shadow: 2px 2px black", "padding: 10px"]

const spacing = []

const failed = [
  "color: #FE4A49",
  "font-size: 30px",
  "margin-top: 16px",
  "margin-bottom: 16px",
  "background-color: #FED766",
]

const success = [
  "color: black",
  "font-size: 30px",
  "margin-top: 16px",
  "margin-bottom: 16px",
  "background-color: #40F99B",
]

const dataStyles = ["background-color: #9649CB", "margin-bottom: .3rem"]

const responseStyles = ["background-color: #FED766", "color: black", "margin-bottom: .3rem"]

const errorStyles = [
  "color: #FE4A49",
  "font-size: 30px",
  "margin-top: 16px",
  "margin-bottom: 16px",
  "background-color: #FED766",
]
export const styles = {
  base,
  empty,
  initial,
  spacing,
  failed,
  success,
  dataStyles,
  responseStyles,
}

interface log {
  label: string
  time?: number
  styles?: Array<string>
  data?: any
  baseStyles?: boolean
  clear?: boolean
}

export function log({ label, styles, time = 2, data, baseStyles = true, clear }: log) {
  let style = empty.join(";") + ";"

  if (baseStyles === true) {
    style = base.join(";") + ";"
  }
  if (styles) {
    style += styles.join(";")
  }

  if (clear === true) {
    console.clear()
  }

  if (data) {
    console.log(`%c${label}`, style, data)
  } else {
    console.log(`%c${label}`, style)
  }
}

export const clear = (delay?: number) => {
  if (!delay) {
    console.clear()
  } else {
    const updateTime = delay * 1000
    setTimeout(() => {
      console.clear()
    }, updateTime)
  }
}

export function error({ label = "Error" }: log, err?: unknown) {
  type ErrorWithMessage = {
    message: string
  }

  function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
    return (
      typeof error === "object" &&
      error !== null &&
      "message" in error &&
      typeof (error as Record<string, unknown>).message === "string"
    )
  }

  function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
    if (isErrorWithMessage(maybeError)) return maybeError

    try {
      return new Error(JSON.stringify(maybeError))
    } catch {
      // fallback in case there's an error stringifying the maybeError
      // like with circular references for example.
      return new Error(String(maybeError))
    }
  }

  function getErrorMessage(error: unknown) {
    return toErrorWithMessage(error)
  }

  log({
    label: `${label}${getErrorMessage(err)}`,
    styles: errorStyles,
  })
}
