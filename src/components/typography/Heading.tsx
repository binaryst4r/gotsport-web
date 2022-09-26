import React from 'react'
import cn from 'classnames'

type ValidElements = 'h1' | 'h2' | 'h3' | 'h4' | 'h5'

const sizes = {
  1: `text-mono-black text-2xl leading-8`,
  2: `text-mono-black text-xl leading-8`,
  3: `text-mono-black text-base leading-6`,
  4: `text-mono-black text-sm leading-6`,
  5: `text-mono-black text-xs leading-4`
}

const baseStyles = `font-bold font-proxima`

type Props = {
  size?: keyof typeof sizes
  as?: ValidElements
} & React.HTMLProps<HTMLHeadingElement>

/**
 * Heading element that decouples design system appearance (props.size) from
 * semantics of the element (props.as).
 */
export function Heading({ as: el, size = 1, className, ...rest }: Props) {
  const El = (el ? el : size ? `h${size}` : `h1`) as ValidElements
  return <El {...rest} className={cn(baseStyles, sizes[size], className)} />
}
