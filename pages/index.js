import Head from 'next/head'
import Image from 'next/image'
import Page from '../components/Lobby/Page'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <Page />
    </>
  )
}
