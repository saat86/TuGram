import React from 'react'
import { Box } from '@mui/material'
import Sidetab from './Sidetab'
import HomeLayout from './HomeLayout'

type Props = {}

function Home({}: Props) {
  return (
   <Box sx={{display:'flex' ,width:'100%'}}>
    <Box>
        <Sidetab/>
    </Box>
    <Box sx={{width:'100%'}}>
        <HomeLayout/>
    </Box>

   </Box>

  )
}

export default Home