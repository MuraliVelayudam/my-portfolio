'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import SectionHeading from './sectionHeading'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context-section/section-context-provider'
import { useEffect } from 'react'

/* eslint-disable react/no-unescaped-entities */
export default function About() {
    const { ref, inView } = useInView({ threshold: 0.75 })
    const { setActiveSection, lastTimeOfClick } = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - lastTimeOfClick > 1000) {
            setActiveSection('About')
        }
    }, [inView, lastTimeOfClick, setActiveSection])

    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 sm:mt-44"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            id="about"
        >
            <SectionHeading>About Me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{' '}
                <span className="font-medium">
                    Hotel Management and Business Administration
                </span>
                , I decided to pursue my passion for programming. I enrolled in
                a coding bootcamp and learned{' '}
                <span className="font-medium">full-stack web development</span>.{' '}
                <span className="italic">My favorite part of programming</span>{' '}
                is the problem-solving aspect. I{' '}
                <span className="underline">love</span> the feeling of finally
                figuring out a solution to a problem. My core stack is{' '}
                <span className="font-medium">
                    React, Next.js, Node.js, and MongoDB
                </span>
                . I am also familiar with TypeScript. I am always looking to
                learn new technologies. I am currently looking for a{' '}
                <span className="font-medium">full-time position</span> as a
                software developer.
            </p>

            <p className="">
                <span className="italic">When I'm not coding</span>, I enjoy
                playing video games, watching movies, and playing with my dog. I
                also enjoy{' '}
                <span className="font-medium">learning new things</span>.
            </p>
        </motion.section>
    )
}
