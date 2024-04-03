import { FC } from 'react'
import cn from 'classnames'
import Link from "next/link"

import s from './Links.module.css'

interface ILinksProps {
  background?: 'default' | 'tertiary'
}

export const Links: FC<ILinksProps> = ({ background = 'default' }) => (
  <div className={cn(
    s.flex,
    background === 'default'
    && s.flex__default,
    background === 'tertiary'
    && s.flex__tertiary,
  )}
  >
    <Link className={s.link} href="/">Тарифы</Link>
    <Link className={s.link} href="/">Контакты</Link>
    <Link className={s.link} href="/">FAQ</Link>
  </div>
)
