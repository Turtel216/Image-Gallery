import NavBar from './components/NavBar'
import './globals.css'
import type { Metadata } from 'next'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Image-Gallery',
  description: 'A Poject by Dimitrios Papakonstantinou',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  )
}
