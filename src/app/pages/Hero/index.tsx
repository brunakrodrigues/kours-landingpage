'use client';

import { Box } from '@chakra-ui/react'
import Navbar from '@/app/components/Navbar'

export default function Hero() {
  return (
    <main>
      <Box
        height="100vh"
        bg="radial-gradient(circle at bottom, #123352, #123352 0%, #0f406f 20%, #181818 48%, #181818)"
        position="relative"
      >
        <Navbar />
      </Box>
    </main>
  )
}
