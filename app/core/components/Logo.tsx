import { Image } from "blitz"
import { Link, Flex} from '@chakra-ui/react'

import Icon from './animatedLogo.svg'


const Logo = () => {
    return (
        <Flex boxSize='7rem'>
         <Image  src={Icon}></Image>
        </Flex>
    )
}

export default Logo



