
import { BlitzPage, Ctx } from "blitz"
import Layout from "app/core/layouts/Layout"
import { cursorAPI } from '../core/contexts/mouseAPI'

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */
import React from 'react'


const Home = (ctx: Ctx) => {

  return (
<>

</>
    )
  }

Home.suppressFirstRenderFlicker = true
Home.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Home


