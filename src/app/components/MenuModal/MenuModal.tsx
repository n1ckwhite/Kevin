import { FC } from "react"
import cn from 'classnames'

import s from './MenuModal.module.css'

interface IMenuModal {
  closeModal: () => void;
  modal: boolean;
}

export const MenuModal: FC<IMenuModal> = ({
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
    </div>
    {modal && <button className={s.wrapper} onClick={closeModal} />}
  </div>
)
