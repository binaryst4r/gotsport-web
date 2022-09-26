import React from "react";
type Props = {
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>
export const Well = ({children, ...rest}: Props) => {
  return (
    <div {...rest} className="overflow-hidden rounded-lg bg-mono-white">
      <div className="px-4 py-5 sm:p-6">
        {children}
      </div>
    </div>
  )
}