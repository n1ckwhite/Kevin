import { FC } from 'react'

import { Label } from '../Label'
import { Links } from '../Links'
import { Button } from '../Button'

import s from './Footer.module.css'

export const Footer: FC = () => (
  <footer className={s.footer}>
    <div className={s.footer__wrapper}>
      <div className={s.menu}>
        <Label theme="black" />
        <Links />
        <Button text="Перейти в телеграм" />
      </div>
      <p className={s.text}>© All rights reserved 2024</p>
    </div>
  </footer>
)
