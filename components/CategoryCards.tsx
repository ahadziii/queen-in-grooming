import React from "react"
import Image from "next/image"

export default function CategoryCard() {
  return (
    <div className="flex h-fit w-[320px] select-none  flex-col space-y-3 rounded-xl bg-[#35383C] p-8 md:h-[500px] md:w-[400px] md:p-10">
      <div className=" relative h-64 w-full md:h-72">
        <Image
          src={"/hero-image.jpg"}
          fill
          style={{ objectFit: "contain" }}
          alt={""}
        />
      </div>
      <div className="flex flex-1 items-center justify-between space-x-3">
        <div className="space-y-2 text-xl text-white md:text-2xl">
          <p>Hello my name is Edem Ahadi</p>
          <p>
            this is a test to see what happens when the page displays something
            ....
          </p>
        </div>
      </div>
    </div>
  )
}
