import { FC } from 'react'
import Image from 'next/image'

import { TIconType } from '@/types/icon.type'

interface IIcon {
  name: TIconType;
}

export const Icon: FC<IIcon> = ({ name }) => (
  <Image
    alt="icon"
    height={20}
    src={`/icons/${name}_icon.svg`}
    width={20}
  />
)
