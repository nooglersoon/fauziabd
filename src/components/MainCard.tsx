import React from "react";
import Image from "next/image";
import SectionTitle from "./texts/SectionTitle";
import SectionDescription from "./texts/SectionDescription";

export default function MainCard() {
  return (
    <div className="group max-w-md my-auto border border-black border-opacity-5 mx-auto rounded-xl shadow-lg">
      <div className="relative h-[300px]">
        <div className="relative bg-black h-full overflow-hidden rounded-t-xl">
          <Image
            src="/med.jpg"
            alt=""
            className=" object-cover w-full"
            fill={true}
            priority
          />
        </div>
        <div
          className="absolute inset-0 flex flex-col items-start justify-end p-6"
        >
          <h3 className="text-xl font-medium text-white">UX Engineer in the making.</h3>
          <p className="text-sm font-medium text-white">Casual Trainers</p>
        </div>
      </div>
      <div className="px-4 pt-6 pb-8 flex flex-col gap-4">
        <div className="mt-1.5 flex gap-1">
          <form>
            <fieldset>
              <legend className="sr-only">Color</legend>
            </fieldset>

            <div
              className="flex flex-wrap justify-center gap-1 [&:hover_label]:opacity-75"
            >
              <div>
                <input type="checkbox" id="ColorSg" className="sr-only" />

                <label
                  htmlFor="ColorSg"
                  className="block h-4 w-4 cursor-pointer rounded-full bg-[#595759] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Space Gray </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorS" className="sr-only" />

                <label
                  htmlFor="ColorS"
                  className="block h-4 w-4 cursor-pointer rounded-full bg-[#d2d3d4] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Silver </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorP" className="sr-only" />

                <label
                  htmlFor="ColorP"
                  className="block h-4 w-4 cursor-pointer rounded-full bg-[#d89f97] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorG" className="sr-only" />

                <label
                  htmlFor="ColorG"
                  className="block h-4 w-4 cursor-pointer rounded-full bg-[#afbfab] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>

              <div>
                <input type="checkbox" id="ColorSb" className="sr-only" />

                <label
                  htmlFor="ColorSb"
                  className="block h-4 w-4 cursor-pointer rounded-full bg-[#91a5bb] transition hover:!opacity-100"
                >
                  <span className="sr-only"> Pink </span>
                </label>
              </div>
            </div>
          </form>
        </div>
        <SectionTitle title="Introduction." />
        <SectionDescription>
          An experienced Software Developer with 3 years of expertise in creating both iOS and front- end application. Possessing strong technical skills in UIKit & SwiftUI (iOS) and NextJS (React Application) frameworks, adept at developing captivating user interfaces and seamless user experiences. Highly proficient in Swift programming language, enabling efficient and scalable application development.
        </SectionDescription>
      </div>
      <Footer />
    </div>
  )
}

function Footer() {
  let year = new Date().getFullYear();
  return (
    <div className="pb-4 px-4">
      <p className="text-[8px] text-gray-400">© {year}. Fauziabd - iOS & Front End Engineer</p>
    </div>
  )
}