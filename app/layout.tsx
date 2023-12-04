import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import ConvexProvider from '@/app/convex-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Admin',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <ConvexProvider>
        <html lang="en">
          <body className={inter.className}>{children}</body>
        </html>
      </ConvexProvider>
    </ClerkProvider>
  )
}
