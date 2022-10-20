import React from "react";
import cn from 'classnames'

const BadgeVariantStyles = {
  primary: 'bg-badge-primary-bg text-badge-primary-text inline-flex text-medium items-center rounded-md px-4 py-2 text-sm font-medium',
  secondary: 'bg-badge-secondary-bg text-badge-secondary-text inline-flex text-medium items-center rounded-md px-4 py-2 text-sm font-medium',
  muted: 'bg-badge-muted-bg text-badge-muted-text inline-flex text-medium items-center rounded-md px-4 py-2 text-sm font-medium',
  danger: 'bg-badge-danger-bg  text-badge-danger-text inline-flex text-medium items-center rounded-md bg-error px-4 py-2 text-sm font-medium',
  gray: 'bg-badge-gray-bg text-badge-gray-text inline-flex text-medium items-center rounded-md px-4 py-2 text-sm font-medium'
}

type Props = {
  variant?: keyof typeof BadgeVariantStyles
  children: React.ReactNode
} & React.HTMLAttributes<HTMLDivElement>

export const Badge = ({
  variant = 'primary',
  children,
  className,
  ...baseAttributes
}: Props) => {
  const style = cn(
    BadgeVariantStyles[variant],
    className
  )

  return (
    <span className={style} {...baseAttributes}>
      {children}
    </span>
  )
}