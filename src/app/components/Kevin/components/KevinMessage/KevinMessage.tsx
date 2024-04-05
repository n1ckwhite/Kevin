import { FC } from "react"

import { CustomLink } from "../../../CustomLink"

import s from './KevinMessage.module.css'

const date = new Date()
const timeMinutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes()
const time = `${date.getHours()}:${timeMinutes}`

export const KevinMessage: FC = () => (
  <div className={s.message}>
    <div className={s.message__txt}>
      <p className={s.message__title}>Kevin</p>
      <p className={s.message__subtitle}>бот для продуктовой аналитики</p>
    </div>
    <div className={s.message__borders}>
      <p className={s.msg}>1 новое сообщение</p>
      <div className={s.message__block}>
        <p className={s.message__text}>
          Создайте
          {' '}
          <span className={s.message__text_span}>бесплатный</span>
          {' '}
          запрос и получите отчет о результатах продуктового исследования всего за пару минут!
        </p>
        <p className={s.message__time}>
          {time}
        </p>
        <div className={s.message__block_tail}>
          <svg fill="none" height="16" viewBox="0 0 12 16" width="12" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 0V16H0.822794C-0.0650273
             16 -0.266957 14.7557 0.575304
             14.4749V14.4749C5.24926 12.9169
              8.91691 9.24926 10.4749 4.5753L12 0Z"
              fill="#F2F3F4"
            />
          </svg>
        </div>
      </div>
    </div>
    <CustomLink classname={s.btn} text="Перейти в телеграм" />
  </div>
)
