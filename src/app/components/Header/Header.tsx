import { FC } from 'react'

import s from './Header.module.css'

import { Icon } from '../Icon'
import { Label } from '../Label'
import { Links } from '../Links'
import { Button } from '../Button'

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
