import { useState, useEffect, useMemo } from "react"
import { PromisePool } from "@supercharge/promise-pool"

interface Fetch {
  url: RequestInfo | Array<RequestInfo>
  dataObjectName?: string
  updateTime?: number
  consoleLog?: boolean
  headers?: HeadersInit
  method?: "GET" | "POST" | "OPTIONS" | "DELETE"
  baseURL?: "api.spotify.com/v1" | ""
  config?: RequestInit
}

interface FetchResult<T> {
  data: T
  response: Response
  loading: boolean
}

export default async function Fetch<T>({
  url,
  dataObjectName = "Data",
  updateTime = 2,
  consoleLog = true,
  headers,
  method,
  baseURL = "",
}: Fetch): Promise<FetchResult<T>> {
  const config: RequestInit = useMemo(
    () => ({
      method,
      headers,
    }),
    [method, headers]
  )
  const URL = `https://${baseURL}${url}`
  const fetchRequest = useMemo(() => new Request(URL, config), [URL, config])
  const [data, setData] = useState<T>({} as T)
  const [response, setResponse] = useState<Response>({} as Response)
  const [loading, setLoading] = useState<boolean>(false)
  const [timer, setTimer] = useState<number>(0)
  const updateTimeTime = updateTime * 1000
  const controller = new AbortController()
  const signal = { signal: controller.signal }

  useEffect(() => {
    if (data && Object.keys(data).length === 0) {
      setLoading(true)
    } else {
      setLoading(false)
    }
    ;(async function getData() {
      const clock = setTimeout(() => {
        setTimer(timer + 1)
      }, updateTimeTime)

      try {
        const response: Response = await fetch(fetchRequest, signal)

        const { status } = await response

        const rawData = await response.json()
        setResponse(response)
        if (consoleLog) {
          const console = await import("../../components/log")
          const { dataStyles, responseStyles, success, failed } = console.styles

          switch (status) {
            case 200:
              if (data && Object.keys(data).length > 0) {
                console.log({
                  label: "Response",
                  styles: responseStyles,
                  data: response,
                  clear: true,
                })
                console.log({
                  label: dataObjectName,
                  styles: dataStyles,
                  data,
                })
              } else {
                console.log({
                  label: `Success[${status}]`,
                  styles: success,
                  clear: true,
                })
              }
              break

            case 404:
              console.log({
                label: `Failed[${status}]`,
                styles: failed,
              })
              break

            default:
              console.log({ label: `unhandled error: [${status}]` })
              break
          }
        }
        await setData(rawData.data)
      } catch (err) {
        console.error("Error: ", err)
      }
    })()
    return () => controller.abort()
  }, [config, url, timer])

  return { data, loading, response }
}
