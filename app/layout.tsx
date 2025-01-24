import "./globals.css"
import { Inter } from "next/font/google"
import { Toaster } from 'react-hot-toast'

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Product Catalog",
  description: "Browse our amazing products",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster />
        <header className="bg-white shadow-sm">
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}

