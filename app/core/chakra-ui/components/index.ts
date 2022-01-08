import {  ThemeComponents as ThemeProps, ComponentMultiStyleConfig as MultiStyleConfig   }from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
import { textStyles } from '../theme/textStyles'

const IconButton: MultiStyleConfig  = {
  parts:['SwitchIcon', 'MobileMenu'],
  baseStyle: (props) => ({
    SwitchIcon: {
      color: mode('black', 'white')(props),
      ml: {base: '0', md: '3'},
      fontSize:'lg',
    },
    MobileMenu: {
    display: {base: 'flex', md: 'none'},
    fontSize:'20px',
    color: mode('gray.800', 'inherit')(props),
  }
  }),
        }

const Card: MultiStyleConfig  = {
  parts:['Card', 'BoxItem', 'TextItem'],
  baseStyle: (props) => ({
    Card: {
      boxShadow: 'lg',
      rounded: 'lg',
      flexDirection: 'column',
      p: '.7rem',
      bgColor: mode("aquamarine.500", "aquamarine.600")(props),
    
    },
    BoxItem: {
      textStyle: 'aqua',
      color: 'gray.600',
      _hover: {color: mode("aquamarine.600", "white")(props)}
    },

  }),
  sizes: {
    sm: {
      BoxItem: {
        fontSize: '10rem',
        px: 2,
        py: 1,
      },
 
    },
    md: {
      BoxItem: {
        fontSize: '1rem',
        px: 3,
        py: 2, 
      },

    },
  },
  variants: {
    aqua: (props) => ({
    Card: {
      bgColor:'#FFF'
    },
    BoxItem: {
     textStyle:'aqua',
    },

   /*  BoxItem: {
      margin:'0rem 0rem 0rem 0rem',
      fontSize:"md",
      _focus:{boxShadow: "none" },
      _hover:{   bgGradient: 'aquamarine.900'},
      },
      */

  }),
  defaultProps: {
   
  },
}}




const components: ThemeProps = {
  IconButton,
   Card
}
  
  
  export { components}