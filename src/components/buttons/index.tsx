import React from "react";
import cn from 'classnames'

const ButtonVariantStyles = {
  white: 'inline-flex items-center rounded border border-mono-400 bg-mono-white px-10 py-3 text-mono-700 shadow-sm hover:bg-mono-100 focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2',
  gray: 'inline-flex items-center rounded border border-dark-blue-gray bg-blue-gray px-10 py-3 text-mono-700 shadow-sm hover:bg-dark-blue-gray focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2',
  blueOutline: 'inline-flex items-center rounded border border-light-blue bg-transparent px-10 py-3 text-light-blue shadow-sm hover:bg-mono-100 focus:outline-none focus:ring-2 focus:ring-light-blue focus:ring-offset-2',
  pillPrimary: 'inline-flex items-center px-10 py-3 border border-transparent text-base text-mono-white rounded-full shadow-sm text-white bg-light-blue hover:bg-dark-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue',
  pillSecondary: 'inline-flex items-center px-10 py-3 border border-light-blue text-base rounded-full shadow-sm text-light-blue bg-transparent hover:bg-mono-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-light-blue',
  link: 'text-light-blue bg-transparent border-0',

}

const baseStyles = `font-bold font-proxima leading-5`
const loadingStyles = 'cursor-default'
const disableStyles =
  'text-mono-500 bg-mono-300 border-mono-300 cursor-not-allowed'

type Props = {
  variant?: keyof typeof ButtonVariantStyles
  loading?: boolean
  children?: React.ReactNode
  trailingIcon?:  React.ElementType<any>
  leadingIcon?: React.ElementType<any>
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const {
      children,
      type,
      disabled,
      loading = false,
      variant = 'white',
      className,
      leadingIcon: LeadingIcon,
      trailingIcon: TrailingIcon,
      ...baseAttribs
    } = props

    const style = cn(
      baseStyles,
      disabled ? disableStyles : ButtonVariantStyles[variant],
      {
        [loadingStyles]: loading,
      },
      className
    )
    return (
      <button
        ref={ref}
        className={style}
        disabled={disabled || loading}
        type={type}
        {...baseAttribs}
      >
        {loading && 'Loading...'}
        {LeadingIcon && <LeadingIcon className="-ml-1 mr-3 h-5 w-5" />}
        {children}
        {TrailingIcon && <TrailingIcon className="ml-3 -mr-1 h-5 w-5" />}
      </button>
    )
  }
)