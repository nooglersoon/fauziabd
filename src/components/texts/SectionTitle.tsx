import React from "react"

type Props = {
  title: string
}

export default function SectionTitle({ title }: Props) {
  return (
    <p className="text-gray-900 font-bold text-2xl">
      {title}.
    </p>
  )
}