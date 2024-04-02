import { ReactNode } from 'react'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kevin',
  description: 'Kevin - телеграмм бот для продуктовой аналитики',
}

const RootLayout = ({
  children,
}: Readonly<{
  children: ReactNode;
}>) => (
  <html lang="ru">
    <body>
      {children}
    </body>
  </html>
)

export default RootLayout
