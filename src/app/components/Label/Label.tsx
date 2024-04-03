import { FC } from 'react'
import cn from 'classnames'

import s from './Label.module.css'

interface ILabelProps {
  theme?: 'light' | 'black';
}

export const Label: FC<ILabelProps> = ({ theme = 'light' }) => (
  <p className={cn(
    s.text,
    theme === 'light'
    && s.text_light,
    theme === 'black'
    && s.text_black,
  )}
  >
    Kevin
    <span className={s.dot}>.</span>
    bot
  </p>
)
