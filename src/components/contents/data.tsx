import { Expertise, Project, Work } from "./model"

export const expertises: Expertise[] = [
  {
    name: "Swift",
    icon: "/icons/swift.svg"
  },
  {
    name: "SwiftUI",
    icon: "/icons/swiftui.svg"
  },
  {
    name: "XCode",
    icon: "/icons/xcode.svg"
  },
  {
    name: "TypeScript",
    icon: "/icons/typescript.svg"
  },
  {
    name: "NextJS",
    icon: "/icons/nextjs.svg"
  },
  {
    name: "TailwindCSS",
    icon: "/icons/tailwindcss.svg"
  },
  {
    name: "Framer Motion",
    icon: "/icons/framer.png"
  },
  {
    name: "Sanity.io",
    icon: "/icons/sanity.svg"
  },
  {
    name: "Firebase",
    icon: "/icons/firebase.svg"
  },
  {
    name: "Supabase",
    icon: "/icons/supabase.svg"
  },
  {
    name: "Visual Studio Code",
    icon: "/icons/vsc.svg"
  },
]


export const projects: Project[] = [
  {
    icon: "/icons/ios.svg",
    url: "https://apps.apple.com/id/app/putih-dental/id1659416178",
    name: "Putih Dental",
    desc: "iOS apps that help Satu Dental Dentist create real time booking and payment system for the patients.",
    client: "Putih Dental",
    year: 2023
  },
  {
    icon: "/icons/ar.svg",
    url: "https://drive.google.com/drive/folders/1TTyMNz-d0xFCSSrVC4484p-6o3jGQ6Zd?usp=share_link",
    name: "SMKDEX",
    desc: "an application that can help vocational school students learn the practice of electric motors using 3D and Augmented Reality (AR) technology so that students can have experience to learn to assemble and find out real cases in assembling electric motors interactively",
    client: "Apple Developer Academy",
    year: 2021
  },
  {
    icon: "/icons/ios.svg",
    url: "https://github.com/nooglersoon/Hidropodex",
    name: "Hidropodex",
    desc: "Hydropodex is an iOS application that is integrated with IoT to monitor hydroponic plant plantings which in real time will send data in the form of humidity, flowing water and temperature from the hydroponic system using the Antares platform from Telkom Indonesia. This object detection is able to detect the type of disease in hydroponic plants in real time. Unfortunately, the current model made only supports tomatoes.",
    client: "Indigo Hackaton Festival 2021",
    year: 2021
  },
  {
    icon: "/icons/ios.svg",
    url: "https://github.com/nooglersoon/Nutrition-Box",
    name: "Nutrion Box",
    desc: "Nutrition Box is an iOS App that helps people identify the food around them through photos using Machine Learning.",
    client: "Udacity",
    year: 2021
  }
]

export const works: Work[] = [
  {
    icon: "/icons/ios.svg",
    url: "",
    name: "Kitabisa.com",
    role: "iOS Engineer",
    year: "Apr 2022 - Present",
    skills: [
      "Swift", "Unit Testing", "TCA", "VIPER", "SPM", "UIKit", "NextJS", "TailwindCSS"
    ]
  },
  {
    icon: "/icons/web.svg",
    url: "",
    name: "Rekayasa Data Spasial",
    role: "Tech Contributors",
    year: "Jun 2022 - Present",
    skills: [
      "TypeScript", "NextJS", "Svelte", "Python", "Django"
    ]
  },
  {
    icon: "/icons/web.svg",
    url: "",
    name: "Slaash.id",
    role: "Front End Developer (Freelance)",
    year: "Feb 2022 - Present",
    skills: [
      "TypeScript", "NextJS", "Framer Motion", "Sanity.io", "Supabase", "Vercel"
    ]
  },
  {
    icon: "/icons/ios.svg",
    url: "",
    name: "Questeon",
    role: "iOS Developer",
    year: "Jan 2022 - Mar 2022",
    skills: [
      "Swift", "UIKit", "MVC", "Augmented Reality", "ARKit"
    ]
  },
  {
    icon: "/icons/web.svg",
    url: "",
    name: "Ministry of National Planning Development",
    role: "Web Developer",
    year: "Jun 2021 - Dec 2021",
    skills: [
      "Python", "Django", "TailwindCSS"
    ]
  },
]