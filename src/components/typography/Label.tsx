import React from 'react'
import cn from 'classnames'

const variants = {
  sm: `text-base`,
  md: `text-lg`,
  lg: `text-xl`
}

type Props = {
  variant?: keyof typeof variants
} & React.HTMLProps<HTMLLabelElement>

export const Label = ({ variant = 'md', className, ...rest }: Props) => (
  <label
    {...rest}
    className={cn(
      'm-0 text-black bold font-proxima',
      variants[variant],
      className
    )}
  />
)
