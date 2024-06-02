'use client'

import React, { useEffect } from 'react'
import SectionHeading from './sectionHeading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useInView } from 'react-intersection-observer'
import { useActiveSectionContext } from '@/context-section/section-context-provider'

export default function Projects() {
    const { ref, inView } = useInView({ threshold: 0.5 })

    const { setActiveSection, lastTimeOfClick } = useActiveSectionContext()

    useEffect(() => {
        if (inView && Date.now() - lastTimeOfClick > 1000) {
            setActiveSection('Projects')
        }
    }, [inView, setActiveSection, lastTimeOfClick])

    return (
        <section id="projects" className="scroll-mt-32 mt-32 mb-36" ref={ref}>
            <SectionHeading>Projects</SectionHeading>
            <div>
                {projectsData.map((each_Project, index) => (
                    <React.Fragment key={index}>
                        <Project {...each_Project} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    )
}
