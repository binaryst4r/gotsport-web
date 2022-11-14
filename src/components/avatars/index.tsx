import cn from 'classnames'
import { HTMLAttributes, ImgHTMLAttributes } from 'react'

type Props = {
  className?: string
  size?: number
} & ImgHTMLAttributes<HTMLImageElement>
const baseStyle = 'inline-block rounded-full'

export const Avatar = ({size = 6, className, ...rest}: Props) => {
  const styles = cn(
    baseStyle,
    `h-${size}`,
    className
  )
  return (
    <img className={styles} {...rest} />
  )
}