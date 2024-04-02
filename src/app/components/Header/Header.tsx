'use client'

import { FC, useState } from 'react'

import { MenuModal } from "@/app/components/MenuModal"

import { Button } from "../Button"
import { Icon } from '../Icon'
import { Label } from '../Label'
import { Links } from '../Links'

import s from './Header.module.css'

export const Header: FC = () => {
  const [modal, setActiveModal] = useState(false)
  const closeModal = () => {
    setActiveModal(false)
  }
  const activeModal = () => {
    setActiveModal(true)
  }

  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <div className={s.menu}>
          <button
            className={s.btn}
            onClick={activeModal}
          >
            <Icon name="menu" />
          </button>
          <Label />
          <div className={s.header__links}>
            <Links background="tertiary" />
          </div>
          <Button text="Перейти в телеграм" />
        </div>
      </div>
      <MenuModal closeModal={closeModal} modal={modal} />
    </header>
  )
}
