import React from "react";
import cn from 'classnames'

const ButtonVariantStyles = {
  primary: 'text-mono-white bg-primary border-primary',
  secondary: 'text-primary bg-mono-white border-primary',
  link: 'text-primary bg-transparent border-0'
}

const loadingStyles = 'cursor-default'
const baseStyles = 'rounded border-solid border font-bold text-base h-8 px-4'
const disableStyles =
  'text-mono-500 bg-mono-300 border-mono-300 cursor-not-allowed'

type Props = {
  variant?: keyof typeof ButtonVariantStyles
  loading?: boolean
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button = React.forwardRef<HTMLButtonElement, Props>(
  (props, ref) => {
    const {
      children,
      type,
      disabled,
      loading = false,
      variant = 'primary',
      className,
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
        <span className="align-middle">{children}</span>
      </button>
    )
  }
)