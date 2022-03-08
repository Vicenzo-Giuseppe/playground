import Layout from "app/core/layouts/Layout"
import { useQuery } from "blitz"
import getSong from "app/mutations/getTrack"
import { Flex } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import Fetch from "../core/hooks/api/useFetchData"

/*.
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Index = () => {
  Fetch<any>({
    url: "api.coinbase.com/v2/currencies",
    consoleLog: true,
  }).then(({ data, loading, response }) => {})

  return <Flex></Flex>
}

Index.suppressFirstRenderFlicker = true
Index.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Index
