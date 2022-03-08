import { Ctx } from "blitz"
import db from "db"
import * as z from "zod"
import Fetch from "../core/hooks/api/useFetchData"
const CreateProject = z
  .object({
    name: z.string(),
  })
  .nonstrict()

export default async function createProject(input: z.infer<typeof CreateProject>, ctx: Ctx) {
  const url = "https://api.spotify.com/v1/authorize?" + ""
  const config: RequestInit = { method: "GET" }
  const fetchRequest = new Request(url, config)

  // Validate input - very important for security
  const data = CreateProject.parse(input)

  const song = await fetch(
    //baseURL: '',
    fetchRequest
    //url: '/albums/7AVvQhnDEUidKyJsXmQ7ju?si=nw_w0w1tSWu62iYCh4_azg',
    // dataObjectName: 'token',
    // updateTime: 5,
  )
  console.log(song)
  return song
}
