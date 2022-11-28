import React from "react";
import cn from 'classnames'

const BadgeVariantStyles = {
  primary: 'bg-badge-primary-bg text-badge-primary-text inline-flex items-center rounded-md',
  secondary: 'bg-badge-secondary-bg text-badge-secondary-text inline-flex items-center rounded-md',
  muted: 'bg-badge-muted-bg text-badge-muted-text inline-flex items-center rounded-md',
  danger: 'bg-badge-danger-bg  text-badge-danger-text inline-flex items-center rounded-md bg-error',
  gray: 'bg-badge-gray-bg text-badge-gray-text inline-flex items-center rounded-md'
}

const BadgeSizeStyles = {
  sm: 'px-4 py-1 text-[10px]',
  md: 'px-4 py-2 text-sm font-medium'
}

type Props = {
  variant?: keyof typeof BadgeVariantStyles
  children: React.ReactNode
  size?: 'sm' | 'md'
  className: string
} & React.HTMLAttributes<HTMLDivElement>

export const Badge = ({
  variant = 'primary',
  children,
  className,
  size = 'md',
  ...baseAttributes
}: Props) => {
  const style = cn(
    BadgeVariantStyles[variant],
    className,
    BadgeSizeStyles[size]
  )

  return (
    <span className={style} {...baseAttributes}>
      {children}
    </span>
  )
}