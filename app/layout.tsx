import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Impar Climatização e Sistemas - Climatização, Ventilação e Exaustão',
  description: 'A Impar é uma empresa especializada em climatização, ventilação e exaustão. Desenvolvemos projetos e realizamos instalações de sistemas de água gelada, VRF e splitões em Santa Catarina.',
  keywords: 'climatização, ventilação, exaustão, ar condicionado, VRF, água gelada, split, Santa Catarina, São José',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}