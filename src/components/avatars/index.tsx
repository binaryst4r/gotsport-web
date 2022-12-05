import cn from 'classnames'
import { ImgHTMLAttributes } from 'react'

type Props = {
  className?: string
  size?: number
} & ImgHTMLAttributes<HTMLImageElement>
const baseStyle = 'inline-block rounded-full'

export const Avatar = ({size = 6, className, src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80", ...rest}: Props) => {
  const styles = cn(
    baseStyle,
    `h-${size}`,
    className
  )
  return (
    <img className={styles} src={src} {...rest} />
  )
}