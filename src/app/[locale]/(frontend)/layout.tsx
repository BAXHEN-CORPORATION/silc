import React from 'react'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages, setRequestLocale } from 'next-intl/server'
import { notFound } from 'next/navigation'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '../../(frontend)/globals.css'

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }))
}

export const metadata = {
  description: 'SILC – Seminário Intensivo de Cura e Libertação. Seminários presenciais e online ao redor do mundo.',
  title: 'SILC – Seminário Intensivo de Cura e Libertação',
}

interface Props {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound()
  }

  setRequestLocale(locale)
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <body suppressHydrationWarning>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          {/* Offset for fixed nav (72px height at rest) */}
          <main className="pt-[72px]">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
