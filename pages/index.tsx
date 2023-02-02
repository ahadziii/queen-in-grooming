import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import Header from "../components/Header"
import Landing from "../components/Landing"

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>A Queen In Grooming</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Landing />
    </div>
  )
}

export default Home
