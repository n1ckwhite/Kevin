import { ButtonHTMLAttributes, FC } from 'react'
import cn from 'classnames'

import s from './Button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  classname?: string;
}

export const Button: FC<IButton> = ({ text, classname, ...rest }) => (
  <div className={cn(s.btn__tg, classname)}>
    <button className={s.button} {...rest}>{text}</button>
  </div>
)
