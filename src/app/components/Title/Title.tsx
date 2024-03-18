import { FC, HTMLAttributes } from 'react'
import s from './Title.module.css'
import cn from "classnames";

interface ITitle extends HTMLAttributes<HTMLParagraphElement> {
  text: string;
  h?: 'h1' | 'h2';
}

export const Title: FC<ITitle> = ({ text, h, ...rest }) => (
  <p className={cn(s.text, h === 'h1' && s.textH1, h === 'h2' && s.textH2)} {...rest}>{text}</p>
)
