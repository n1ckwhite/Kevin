import { FC, HTMLAttributes } from 'react'
import cn from "classnames"

import s from './Title.module.css'

interface ITitle extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  strong?: boolean;
}

export const Title: FC<ITitle> = ({
  text,
  strong = false,
  ...rest
}) => (
  <p
    className={cn(
      s.text,
      strong && s.text_strong,
    )}
    {...rest}
  >
    {text}
  </p>
)
