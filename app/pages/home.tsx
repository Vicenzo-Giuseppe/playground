import { useRouter } from "blitz"
import Layout from "app/core/layouts/Layout"

import { Button } from "@chakra-ui/react"
import Fetch from "../core/hooks/api/useFetchData"
import { useState } from "react"

interface Coins {
  symbol: string
  priceChange: string
  priceChangePercent: string
  weightedAvgPrice: string
  prevClosePrice: string
  lastPrice: string
  lastQty: string
  bidPrice: string
  bidQty: string
  askPrice: string
  askQty: string
  openPrice: string
  highPrice: string
  lowPrice: string
  volume: string
  quoteVolume: string
  openTime: number
  closeTime: number
  firstId: number
  lastId: number
  count: number
}

/*.
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

const Home = () => {
  /*  const data = getData<Coins[]>({
    url: "https://api2.binance.com/api/v3/ticker/24hr",
  })
  console.log(
    data.then((data) => {
      data
    })
  ) */
  return <div></div>
}

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home
