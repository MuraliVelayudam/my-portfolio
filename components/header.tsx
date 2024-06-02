'use client'

import { motion } from 'framer-motion'
import { links } from '@/lib/data'
import Link from 'next/link'
import clsx from 'clsx'
import { useActiveSectionContext } from '@/context-section/section-context-provider'

export default function Header() {
    const { activeSection, setActiveSection, setLastTimeOfClick } =
        useActiveSectionContext()

    return (
        <header className="z-[999] relative">
            <motion.div
                className="fixed bg-white top-0 left-1/2  h-[4.5rem] rounded-none w-full border border-white border-opacity-40 bg-opacity-80 sm:rounded-full shadow-lg shadow-black/[0.03] backdrop-blur-[0.05rem] sm:top-6 sm:h-[3.2rem] sm:w-[36rem]"
                initial={{ opacity: 0, y: -100, x: '-50%' }}
                animate={{ opacity: 1, y: 0, x: '-50%' }}
            ></motion.div>
            <nav className="flex fixed top-[0.15rem] left-1/2 -translate-x-1/2 h-12 py-2 sm:top-[1.7rem] sm:p-0 sm:h-[initial]">
                <ul className="flex items-center justify-center gap-y-1 sm:gap-5 text-[0.9rem] font-medium flex-wrap sm:flex-nowrap w-[22rem] sm:w-[initial] text-gray-500">
                    {links.map((each) => (
                        <motion.li
                            key={each.hash}
                            className="flex items-center justify-center h-3/4 relative"
                            initial={{ opacity: 0, y: -100 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <Link
                                href={each.hash}
                                onClick={() => {
                                    setActiveSection(each.name)
                                    setLastTimeOfClick(Date.now())
                                }}
                                className={clsx(
                                    'flex items-center justify-center px-2 py-3 w-full hover:text-gray-950 transition',
                                    {
                                        'text-gray-950':
                                            activeSection === each.name,
                                    }
                                )}
                            >
                                {each.name}

                                {each.name === activeSection && (
                                    <motion.span
                                        className="bg-gray-100 absolute rounded-full inset-0 -z-10"
                                        layoutId="activeSection"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 380,
                                            damping: 30,
                                        }}
                                    ></motion.span>
                                )}
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}
