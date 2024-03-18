import { FC, HTMLAttributes } from 'react'
import s from './Subtitle.module.css'
import cn from "classnames";

interface ISubtitle extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  h?: 'h1' | 'h2';
}

export const Subtitle: FC<ISubtitle> = ({ text, h, ...rest }) => (
  <p className={cn(s.text, h === 'h1' && s.textH1, h === 'h2' && s.textH2)} {...rest}>{text}</p>
