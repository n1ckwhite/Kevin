import { FC } from 'react'

import { Icon } from '@/app/components/Icon/Icon'

import { Label } from '../Label'
import { Links } from '../Links'
import { Button } from '../Button'

import s from './Header.module.css'

export const Header: FC = () => (
  <header className={s.header}>
    <div className={s.header__wrapper}>
      <div className={s.menu}>
        <button className={s.btn}>
          <Icon name="menu" />
        </button>
        <Label />
        <div className={s.header__links}>
          <Links background="tertiary" />
        </div>
        <Button text="Перейти в телеграм" />
      </div>
    </div>
  </header>
)
