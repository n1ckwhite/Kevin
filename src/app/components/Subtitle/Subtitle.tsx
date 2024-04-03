import { FC, HTMLAttributes } from 'react'
import cn from 'classnames'

import s from './Subtitle.module.css'

interface ISubtitleProps extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  strong?: boolean;
}

export const Subtitle: FC<ISubtitleProps> = ({
  text,
  strong = false, ...rest
}) => (
  <p
    className={
    cn(
      s.text,
    )
}
    {...rest}
  >
    {text}
  </p>
)
