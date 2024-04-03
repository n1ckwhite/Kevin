import { FC } from "react"
import cn from 'classnames'
import Link from "next/link"

import { Icon } from "@/app/components/Icon"

import s from './MenuModal.module.css'

interface IMenuModalProps {
  closeModal: () => void
  modal: boolean
}

export const MenuModal: FC<IMenuModalProps> = ({
  closeModal,
  modal,
}) => (
  <div className={cn(
    s.modal,
    modal && s.modal_active,
  )}
  >
    <div className={s.links}>
      <Link className={s.link} href="/">Тарифы</Link>
      <Link className={s.link} href="/">Контакты</Link>
      <Link className={s.link} href="/">FAQ</Link>
      <button className={s.btn} onClick={closeModal}>
        <Icon name="close" />
      </button>
    </div>
    {modal && <button className={s.wrapper} onClick={closeModal} />}
  </div>
)
