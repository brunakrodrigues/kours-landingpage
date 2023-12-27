import Image from 'next/image'
import styles from './page.module.css'
import { Box } from '@chakra-ui/react'
import Hero from './pages/Hero'

export default function Home() {
  return (
    <main>
      <Hero />
    </main>
  )
}
