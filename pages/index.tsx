import type { NextPage } from "next"
import Head from "next/head"
import CategoryCard from "../components/CategoryCards"
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
      <main className="relative h-[200vh]">
        <Landing />
      </main>
      <section className="relative z-40 -mt-[100vh] min-h-screen bg-[#351a0b]">
        <div className="space-y-10 py-16">
          <h1 className="text-center text-4xl font-medium tracking-wide text-white md:text-5xl">
            Blog Categories
          </h1>
          <div className="mx-auto max-w-fit pt-10 pb-24 sm:px-4 ">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 ">
              {[1, 2, 3].map((category) => (
                <CategoryCard />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
