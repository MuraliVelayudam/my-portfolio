'use client'
import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context-section/section-context-provider'
import ContactForm from './contactForm'
import SectionHeading from './sectionHeading'

export default function Contact() {
    const { lastTimeOfClick, setActiveSection } = useActiveSectionContext()
    const { ref, inView } = useInView({ threshold: 0.8 })

    useEffect(() => {
        if (inView && Date.now() - lastTimeOfClick > 1000) {
            setActiveSection('Contact')
        }
    }, [inView, setActiveSection, lastTimeOfClick])

    return (
        <motion.section
            id="contact"
            ref={ref}
            className="mb-28 max-w-[44rem] scroll-mt-28 text-center sm:mb-36 mt-36"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <SectionHeading>Contact Me</SectionHeading>
            <p className="text-gray-500 text-sm text-center dark:text-white/80">
                Please contact me directly at{' '}
                <a
                    href="mailto:murali.krishna01294@gmail.com"
                    className="font-semibold text-gray-950 italic animate-pulse cursor-pointer dark:text-white"
                >
                    murali.krishna01294@gmail.com
                </a>{' '}
                or through this form.
            </p>

            <ContactForm />
        </motion.section>
    )
}
