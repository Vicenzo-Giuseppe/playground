import { Head, BlitzLayout } from "blitz"
import Header from '../components/Header'
import {Container} from '@chakra-ui/react'


const Layout: BlitzLayout<{title?: string}> = ({ title, children }) => {

  return (
    
    <Container maxW='container.xl' cursor='none'>
    <Header />

    {children}
      <Head>
        <title>{title || "nextgen-app"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>    
    </Container>
  )
}

export default Layout
 