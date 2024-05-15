import { FC } from 'react'
import cn from 'classnames'
import Link from "next/link"

import s from './CustomLink.module.css'

interface ICustomLinkProps {
  text: string
  classname?: string
  link?: string
}

export const CustomLink: FC<ICustomLinkProps> = ({
  text,
  classname,
  link = "https://t.me/kevin_the_bot_news",
  ...props
}) => (
  <div className={cn(s.btn__tg, classname)}>
    <Link
      className={s.button}
      href={link}
      target="_blank"
      {...props}
    >
      {text}
    </Link>
  </div>
)
