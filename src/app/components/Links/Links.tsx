import { FC } from 'react'
import cn from 'classnames'

import s from './Links.module.css'

interface ILinks {
  background?: 'default' | 'tertiary'
}

export const Links: FC<ILinks> = ({ background = 'default' }) => (
  <div className={cn(
    s.flex,
    background === 'default'
    && s.flex__default,
    background === 'tertiary'
    && s.flex__tertiary,
  )}
  >
    <span className={s.link}>Тарифы</span>
    <span className={s.link}>Контакты</span>
    <span className={s.link}>FAQ</span>
  </div>
)
