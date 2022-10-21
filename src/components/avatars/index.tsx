import cn from 'classnames'
import { HTMLAttributes, ImgHTMLAttributes } from 'react'

type Props = {
  size: number
  src: string
} & HTMLAttributes<HTMLImageElement>
const baseStyle = 'inline-block rounded-full'

export const Avatar = ({size = 6, src, ...rest}: Props) => {
  const styles = cn(
    baseStyle,
    `h-${size} w-${size}`
  )
  return (
    <img
      className={styles}
      src={src}
      {...rest}
    />
  )
}