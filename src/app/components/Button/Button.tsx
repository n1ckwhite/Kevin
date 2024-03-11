import { ButtonHTMLAttributes, FC } from 'react'

import s from './Button.module.css'

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export const Button: FC<IButton> = ({ text,...rest }) => (
  <div className={s.btn__tg}>
    <button className={s.button} {...rest}>{text}</button>
  </div>
  

