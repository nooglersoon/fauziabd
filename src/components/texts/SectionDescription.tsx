import React, { ReactNode } from "react";

type Props = {
  children: ReactNode
}

export default function SectionDescription({ children }: Props) {
  return (
    <div className='text-black text-[10px] h-40 py-2 overflow-auto'>
      {children}
    </div>
  )
}