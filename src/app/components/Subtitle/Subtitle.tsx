import { FC, HTMLAttributes } from 'react'
import s from './Subtitle.module.css'

interface ISubtitle extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
}

export const Subtitle: FC<ISubtitle> = ({ text, ...rest }) => (
  <p className={s.text} {...rest}>{text}</p>
)
