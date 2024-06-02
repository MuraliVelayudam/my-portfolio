import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import SectionContextProvider from '@/context-section/section-context-provider'
import { Toaster } from 'react-hot-toast'
import Footer from '@/components/footer'
import ThemeSwitch from '@/components/theme-switch'
import ThemeContextProvider from '@/context-section/themeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Murali',
    description: 'Murali is a MernStack Developer',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en" className="!scroll-smooth">
            <body
                className={`${inter.className} transition text-gray-950 relative pt-28 sm:pt-36 bg-gray-50 dark:bg-gray-700 dark:text-gray-50  dark:text-opacity-90`}
            >
                <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
                <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
                <ThemeContextProvider>
                    <SectionContextProvider>
                        <Header />
                        {children}
                        <Footer />
                        <Toaster position="top-right" />
                        <ThemeSwitch />
                    </SectionContextProvider>
                </ThemeContextProvider>
            </body>
        </html>
    )
}
