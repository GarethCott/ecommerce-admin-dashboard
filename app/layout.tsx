import './globals.css'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { ThemeProvider } from '@/components/ui/ThemeProvider'
import { ModalProvider } from '@/providers/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin dashboard',
  description: 'Admin dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className={inter.className}>
            {/* <ThemeProvider attribute="class" defaultTheme="system" enableSystem> */}
              <ModalProvider/>
                {children}
            {/* </ThemeProvider> */}
            </body>
        </html>
      </ClerkProvider>
  )
}
