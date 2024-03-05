import { FC } from 'react'

import { Label } from '../Label'
import { Links } from '../Links'
import { Button } from '../Button'

import s from './Header.module.css'

export const Header: FC = () => (
  <header className={s.header}>
    <div className={s.header__wrapper}>
      <div className={s.menu}>
        <Label />
        <Links background="tertiary" />
        <Button text="Перейти в телеграм" />
      </div>
    </div>
  </header>
)
