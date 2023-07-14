import SectionDescription from "@/components/texts/SectionDescription";
import Image from "next/image";
import React, { ReactNode } from "react";
import { Expertise, Project, Work } from "./model";
import { expertises, projects, works } from "./data";
import Link from "next/link";

export interface Content {
  index: number;
  color: string;
  headerTitle: string;
  headerSubtitle?: string;
  headerImageURL: string;
  sectionTitle: string;
  sectionDescription: ReactNode
}

export const contents: Content[] = [
  {
    index: 0,
    color: "#595759",
    headerTitle: "UX Engineer in the making.",
    headerImageURL: "/low.jpg",
    sectionTitle: "Introduction",
    sectionDescription: IntroductionSection()
  },
  {
    index: 1,
    color: "#d2d3d4",
    headerTitle: "3 years experience crafting",
    headerSubtitle: "User Interface for Web and iOS Apps",
    headerImageURL: "https://media0.giphy.com/media/l0K4hO8mVvq8Oygjm/giphy.gif?cid=ecf05e47nk6smw2t5112dm1dvy3cns7i25lbbgv00qrg5c7g&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    sectionTitle: "Work Experience",
    sectionDescription: WorkExperienceSection(works)
  },
  {
    index: 2,
    color: "#d89f97",
    headerTitle: "Involved on several exciting",
    headerSubtitle: "digital product projects",
    headerImageURL: "https://media0.giphy.com/media/5Dp6QNVgR4rvy/giphy.gif?cid=ecf05e47nk6smw2t5112dm1dvy3cns7i25lbbgv00qrg5c7g&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    sectionTitle: "Featured projects",
    sectionDescription: FeaturedProjectsSection(projects)
  },
  {
    index: 3,
    color: "#afbfab",
    headerTitle: "Daily technology stack",
    headerImageURL: "https://media0.giphy.com/media/oYQ9HRm5Mo7VXeMNVR/giphy.gif?cid=ecf05e47nk6smw2t5112dm1dvy3cns7i25lbbgv00qrg5c7g&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    sectionTitle: "Expertise",
    sectionDescription: ExpertiseSection(expertises)
  },
]

function IntroductionSection() {

  type SocMed = {
    name: string;
    url: string;
    icon: string;
  }

  const socmeds: SocMed[] = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/fauziabd/",
      icon: "/icons/linkedin.svg"
    },
    {
      name: "GitHub",
      url: "https://github.com/nooglersoon",
      icon: "/icons/github.svg"
    }
  ]

  return (
    <SectionDescription>
      An experienced Software Developer with 3 years of expertise in creating both iOS and front- end application. Possessing strong technical skills in UIKit & SwiftUI (iOS) and NextJS (React Application) frameworks, adept at developing captivating user interfaces and seamless user experiences. Highly proficient in Swift & TypeScript programming language, enabling efficient and scalable application development.
    <div className="my-4">
        <p className="text-lg font-semibold">Contact me</p>
        <div className="grid grid-cols-3 gap-x-4 gap-y-6 overflow-auto px-2 py-4">
        {socmeds.map((socmed, i) => {
          return (
            <Link
            className="flex flex-col gap-2 items-center" 
            key={i}
            href={socmed.url}
            target="_blank"
            >
              <Image
                alt={socmed.name}
                src={socmed.icon}
                className="h-8 w-8"
                height={32}
                width={32}
              />
              <div className="text-[9px] font-regular text-gray-400 mt-2 text-center">{socmed.name}</div>
            </Link>
          )
        })}
      </div>
    </div>
    </SectionDescription>
  )
}

function WorkExperienceSection(works: Work[]) {
  return (
    <SectionDescription>
      <div className="flex flex-col gap-4 overflow-auto px-2">
        {works.map((work, i) => {
          return (
            <div key={i} className="flex items-start gap-4 border-b-black border-opacity-10 border-b-[0.2px] pb-2">
              <img
                alt={work.icon}
                src={work.icon}
                className="h-8 w-8 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-2 w-full pr-2">
                <div className="text-sm font-bold text-black">{work.name}</div>
                <div className="flex flex-row justify-between items-baseline">
                  <div className="text-xs font-medium text-black"> {work.role} </div>
                  <div className="text-[10px] font-regular text-gray-300"> {work.year} </div>
                </div>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {
                    work.skills.map((skill, i) => {
                      return (
                        <span key={i} className="text-center item-center my-auto rounded-full bg-gray-50 px-2 py-1 text-[8px] font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">{skill}</span>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </SectionDescription>
  )
}

function FeaturedProjectsSection(projects: Project[]) {
  return (
    <SectionDescription>
      <div className="flex flex-col gap-4 overflow-auto px-2">
        {projects.map((project, i) => {
          return (
            <a key={i} href={project.url} target={'_blank'} className="flex items-start gap-4 border-b-black border-opacity-10 border-b-[0.2px] pb-2">
              <img
                alt={project.icon}
                src={project.icon}
                className="h-8 w-8 rounded-lg object-cover"
              />
              <div className="flex flex-col gap-1 items-start">
                <div className="text-sm font-semibold text-black">{project.name}</div>
                <div className="text-[10px] font-regular text-gray-400">{project.desc}</div>
                <div className="text-[9px] font-regular text-gray-400 mt-2"> {project.client} • {project.year}</div>
              </div>
            </a>
          )
        })}
      </div>
    </SectionDescription>
  )
}

function ExpertiseSection(expertises: Expertise[]) {
  return (
    <SectionDescription>
      <div className="grid grid-cols-3 gap-x-4 gap-y-6 overflow-auto px-2">
        {expertises.map((expertise, i) => {
          return (
            <div className="flex flex-col gap-2 items-center" key={i}>
              <Image
                alt={expertise.name}
                src={expertise.icon}
                className="rounded-lg h-8 w-8"
                height={32}
                width={32}
              />
              <div className="text-[9px] font-regular text-gray-400 mt-2 text-center">{expertise.name}</div>
            </div>
          )
        })}
      </div>
    </SectionDescription>
  )
}