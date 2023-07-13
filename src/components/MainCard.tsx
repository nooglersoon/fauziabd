import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "./texts/SectionTitle";
import { Content, contents } from "@/components/contents";
import SectionDescription from "./texts/SectionDescription";

export default function MainCard() {

  const sections = contents
  const [selectedSection, setSelectedSection] = useState<Content>(sections[0])

  return (
    <div className="group max-w-md my-auto border border-black border-opacity-5 mx-auto rounded-xl shadow-lg">
      <div className="relative h-[300px]">
        <div className="relative h-full overflow-hidden rounded-t-xl">
          <Image
            src={selectedSection.headerImageURL}
            alt=""
            className=" object-cover w-full"
            fill={true}
            priority
          />
        </div>
        <div
          className="absolute inset-0 flex flex-col items-start justify-end p-6"
        >
          <h3 className="text-xl font-medium text-white">{selectedSection.headerTitle}</h3>
          <p className="text-sm font-medium text-white">{selectedSection.headerSubtitle}</p>
        </div>
      </div>
      <div className="px-4 pt-6 pb-8 flex flex-col gap-4">
        <div className="mt-1.5 flex gap-1">
          <div
            className="flex flex-wrap justify-center gap-2 [&:hover_label]:opacity-75"
          >
            {
              contents.map((content) => {
                return (
                  <button
                    key={content.index}
                    className={`block h-4 w-4 rounded-full border border-slate-200 ${selectedSection.index === content.index ? 'bg-slate-400' : ''}`}
                    onClick={() => {
                      setSelectedSection(sections[content.index])
                    }}
                  />
                )
              })
            }
          </div>
        </div>
        <SectionTitle title={selectedSection.sectionTitle} />
        {selectedSection.sectionDescription}
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