import { FC } from "react"
import cn from 'classnames'

import { Icon } from "@/app/components/Icon"

import s from './MenuModal.module.css'

interface IMenuModalProps {
  closeModal: () => void;
  modal: boolean;
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
      <span className={s.link}>Тарифы</span>
      <span className={s.link}>Контакты</span>
      <span className={s.link}>FAQ</span>
      <button className={s.btn} onClick={closeModal}>
        <Icon name="close" />
      </button>
    </div>
    {modal && <button className={s.wrapper} onClick={closeModal} />}
  </div>
)
