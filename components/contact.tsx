'use client'
import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context-section/section-context-provider'
import toast from 'react-hot-toast'
import ContactForm from './contactForm'
import SectionHeading from './sectionHeading'

export default function Contact() {
    const { lastTimeOfClick, setActiveSection } = useActiveSectionContext()
    const { ref, inView } = useInView({ threshold: 0.8 })

    const emailRef = useRef(null)

    const onHandleCopyToClipboard = () => {
        if (emailRef.current) {
            const email = emailRef.current.innerText

            if (navigator.clipboard) {
                navigator.clipboard
                    .writeText(email)
                    .then(() => {
                        toast.success('Email copied to clipboard!')
                    })
                    .catch((error) => {
                        console.error('Error copying to clipboard:', error)
                    })
            } else {
                const textarea = document.createElement('textarea')
                textarea.value = email
                document.body.appendChild(textarea)
                textarea.select()
                document.execCommand('copy')
                document.body.removeChild(textarea)
                toast.success('Email copied to clipboard!')
            }
        }
    }

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
                <span
                    ref={emailRef}
                    onClick={onHandleCopyToClipboard}
                    className="font-semibold text-gray-950 italic animate-pulse cursor-pointer dark:text-white"
                >
                    murali.krishna01294@gmail.com
                </span>{' '}
                or through this form.
            </p>

            <ContactForm />
        </motion.section>
    )
}
