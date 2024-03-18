import { FC } from 'react'

import { Subtitle } from '../Subtitle'
import { Title } from '../Title'

import { Accordion } from "./components/Accordion"
import s from './Faq.module.css'

export const Faq: FC = () => (
  <div className={s.container}>
    <Title
      text="Ответы на вопросы"
    />
    <Subtitle
      text="Специально для вас собрали часто-задаваемые вопросы
        и ответили на них"
    />
    <div className={s.accordion__section}>
      <Accordion
        text="Lorem ipsum dolor sit amet consectetur.
          Id feugiat morbi platea consectetur sed tellus purus dolor
          porttitor. Ultricies diam nullam sapien a scelerisque ipsum."
        title="Lorem ipsum, dolor sit amet consectetur?"
      />
    </div>
  </div>
)
