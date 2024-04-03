import { FC } from 'react'
import Image from 'next/image'

import { TIconType } from '@/types/icon.type'

interface IIconProps {
  name: TIconType
}

export const Icon: FC<IIconProps> = ({ name }) => (
  <Image
    alt="icon"
    height={20}
    src={`/icons/${name}_icon.svg`}
    width={20}
  />
)
