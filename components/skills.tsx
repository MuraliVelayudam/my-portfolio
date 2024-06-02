'use client'

import { skillsData } from '@/lib/data'
import SectionHeading from './sectionHeading'
import { useActiveSectionContext } from '@/context-section/section-context-provider'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import { motion } from 'framer-motion'

const fadeAnimate = {
    initial: {
        opacity: 0,
        y: 100,
    },
    animate: (i: number) => {
        return {
            opacity: 1,
            y: 0,
            transition: { delay: 0.05 * i },
        }
    },
}

export default function Skills() {
    const { inView, ref } = useInView({
        threshold: 0.5,
    })
    const { setActiveSection, lastTimeOfClick } = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - lastTimeOfClick > 1000) {
            setActiveSection('Skills')
        }
    }, [inView, setActiveSection, lastTimeOfClick])

    return (
        <section
            className="text-center max-w-[52rem] scroll-mt-40 sm:mb-32 mb-32 "
            ref={ref}
            id="skills"
        >
            <SectionHeading>My Skills</SectionHeading>
            <ul className="flex flex-wrap items-center justify-center gap-2 text-gray-700">
                {skillsData.map((each_skill, i) => (
                    <motion.li
                        key={i}
                        className="bg-gray-200 text-gray-950 text-[0.8rem] tracking-wider px-4 py-1 rounded-full font-medium"
                        variants={fadeAnimate}
                        initial="initial"
                        whileInView="animate"
                        custom={i}
                        viewport={{ once: true }}
                    >
                        {each_skill}
                    </motion.li>
                ))}
            </ul>
        </section>
    )
}
