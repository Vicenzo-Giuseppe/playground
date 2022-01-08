import { ColorMode } from '@chakra-ui/react';
import create from 'zustand'
import { localStorageManager, useColorModePreference  } from '@chakra-ui/react'


interface Cursor {
    cursorType: `dark:df` |`light:hover`
  }


  interface MouseState {
    Cursor: Cursor[]
    setCursor: (cursor: Cursor) => void;
  }
  
  


export const cursorAPI = create<MouseState>((set) => ({
    Cursor:[{cursorType: 'dark:df'}],
    
    // methods for manipulating state
    setCursor: () => {
      set((state) => ({
        Cursor: [
          ...state.Cursor
        ],
      }));
    },
  }));

  