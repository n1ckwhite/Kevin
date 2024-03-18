import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Subtitle.module.css'

interface ISubtitle extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  strong?: boolean;
}

export const Subtitle: FC<ISubtitle> = ({
  text,
  strong = false, ...rest
}) => (
  <p
    className={
    cn(
      s.text,
      strong && s.text_strong,
    )
}
    {...rest}
  >
    {text}
  </p>
)
