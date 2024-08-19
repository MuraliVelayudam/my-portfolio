/* eslint-disable react/no-unescaped-entities */
'use client'

import { useActiveSectionContext } from '@/context-section/section-context-provider'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect } from 'react'

import { BsArrowRight, BsLinkedin } from 'react-icons/bs'
import { FaGithubSquare } from 'react-icons/fa'
import { HiDownload } from 'react-icons/hi'
import { useInView } from 'react-intersection-observer'

export default function Intro() {
    const { ref, inView } = useInView({
        threshold: 0.5,
    })

    const { setActiveSection, lastTimeOfClick, setLastTimeOfClick } =
        useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - lastTimeOfClick > 1000) {
            setActiveSection('Home')
        }
    }, [inView, setActiveSection, lastTimeOfClick])

    return (
        <section
            className="mb-28 text-center sm:mt-28 mt-44 sm:mb-0 max-w-[50rem] scroll-mt-48"
            id="home"
            ref={ref}
        >
            <div className="flex items-center justify-center">
                <div className="relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: 'tween', duration: '0.2' }}
                    >
                        <Image
                            src="/me.png"
                            alt="Murali"
                            width={192}
                            height={192}
                            priority={true}
                            quality={95}
                            className="rounded-full h-24 w-24 border-[0.35rem] border-white object-cover"
                        />
                    </motion.div>
                    <motion.span
                        className="text-2xl  absolute bottom-0 right-4"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: 'spring',
                            stiffness: '125',
                            delay: 0.1,
                            duration: 0.7,
                        }}
                    >
                        👋
                    </motion.span>
                </div>
            </div>
            <motion.h1
                className="mt-5 text-2xl !leading-[1.5] sm:text-3xl px-4 mb-5 font-medium dark:text-gray-200"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
            >
                <span className="font-bold">Hello, I'm Murali.</span> I'm a{' '}
                <span className="font-bold">full-stack developer</span> enjoy
                building <span className="italic">sites & apps</span>. My focus
                is <span className="underline">React (Next.js)</span>.
            </motion.h1>

            <motion.div
                className="flex items-center justify-center gap-3 text-md flex-col sm:flex-row font-medium"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
            >
                <Link
                    href={'#contact'}
                    className="bg-gray-950 text-white flex items-center rounded-full px-7 py-3 gap-2 outline-none focus:outline-none hover:scale-110 focus:scale-110 active:scale-105 transition group"
                    onClick={() => {
                        setActiveSection('Contact')
                        setLastTimeOfClick(Date.now())
                    }}
                >
                    Contact Me Here{' '}
                    <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
                </Link>
                <a
                    href="/MuraliKrishna_Frontend Developer.pdf"
                    download={true}
                    className="bg-white text-gray-950 flex items-center rounded-full px-10 py-3 gap-2 hover:scale-110 active:scale-105  focus:scale-110 transition group border border-black/10"
                >
                    CV Download{' '}
                    <HiDownload className="opacity-60 group-hover:translate-y-1 transition " />
                </a>
                <div className="flex gap-3 items-center">
                    <a
                        href="https://www.linkedin.com/in/muralikrishnaakkala"
                        target="_blank"
                        className="bg-white text-gray-950 flex items-center rounded-full p-4 border border-black/10 hover:scale-110 focus:scale-110 active:scale-105 transition"
                    >
                        <BsLinkedin />
                    </a>
                    <a
                        href="https://github.com/MuraliVelayudam"
                        target="_blank"
                        className="bg-white text-gray-950 flex items-center rounded-full p-4 border border-black/10 hover:scale-110 focus:scale-110 active:scale-105 transition"
                    >
                        <FaGithubSquare size={19} />
                    </a>
                </div>
            </motion.div>
        </section>
    )
}
