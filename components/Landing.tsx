import Image from "next/image"
import React from "react"

function Landing() {
  return (
    <section className=" h-[calc(100vh-3.75rem)] flex ">
      <div className=" relative w-[60%] h-full flex items-center px-6 lg:px-8 ">
        <div className=" z-10 ml-3">
          <h1 className="space-y-3 text-5xl font-semibold tracking-wide lg:text-6xl xl:text-7xl">
            <span className="block">Welcome</span>
            <span className="block">Friend!</span>
          </h1>
          <h1>
            <span className="block">
              A Christian lady in pursuit of purpose.
            </span>
            <span className="block">
              Sharing with you what I'm learning on this journey.
            </span>
          </h1>
          <div className=" mt-16">
            <button
              type="button"
              className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              About Me
            </button>
          </div>
        </div>

        <img
          src="/hero-image.jpg"
          alt={""}
          className="absolute -right-10 -translate-y-1/2 top-1/2 object-cover hidden transition-all duration-500 md:hidden lg:hidden xl:inline xl:h-[550px] xl:w-[400px] "
        />
      </div>
      <div className=" w-[40%]  ">
        <div className="h-[40%] px-6 lg:px-8 bg-slate-300"></div>
        <div className="h-[60%] hidden md:inline bg-white px-6 lg:px-8">
          <div className=" lg:p-12 sm:p-3">
            <img
              src="/quote.png"
              alt=""
              style={{ height: "50px", width: "50px" }}
              className="border border-black rounded-full p-2 mb-3"
            />
            <p>"God only directs a moving vessel"</p>
            <p className="text-right  sm:mb-7">-Unknown</p>

            <img
              src="/bible.jpg"
              alt=""
              style={{ height: "50px", width: "50px" }}
              className="rounded-full mb-3 "
            />
            <p className="lg:text-justify sm:text-sm ">
              "Finally, all of you should be of one mind. Sympathize with each
              other. Love each other as brothers and sisters.Be tenderhearted,
              and keep a humble attitude."
            </p>
            <p className="text-right">-1 Peter 3:8</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Landing
