import React from 'react'
import cn from 'classnames'

const variants = {
  primary: `text-sm leading-6`,
  secondary: `text-xs leading-4`,
  data: 'text-xs leading-6'
}

type Props = {
  variant?: keyof typeof variants
  bold?: boolean
} & React.HTMLProps<HTMLParagraphElement>

export function Body({
  variant = 'primary',
  bold = false,
  className,
  ...rest
}: Props) {
  return (
    <p
      {...rest}
      className={cn('font-proxima text-mono-700', variants[variant], className, {
        'font-bold': bold
      })}
    />
  )
}