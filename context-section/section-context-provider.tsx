'use client'

import { links } from '@/lib/data'
import { createContext, useContext, useState } from 'react'

type SectionTYPE = (typeof links)[number]['name']
interface IContextSection {
    activeSection: SectionTYPE
    setActiveSection: React.Dispatch<React.SetStateAction<SectionTYPE>>
    lastTimeOfClick: number
    setLastTimeOfClick: React.Dispatch<React.SetStateAction<number>>
}

export const createContextSectionActive = createContext<IContextSection | null>(
    null
)

export default function ActiveContextSection({
    children,
}: {
    children: React.ReactNode
}) {
    const [activeSection, setActiveSection] = useState<SectionTYPE>('Home')
    const [lastTimeOfClick, setLastTimeOfClick] = useState(0)
    return (
        <createContextSectionActive.Provider
            value={{
                activeSection,
                setActiveSection,
                lastTimeOfClick,
                setLastTimeOfClick,
            }}
        >
            {children}
        </createContextSectionActive.Provider>
    )
}

export const useActiveSectionContext = () => {
    const context = useContext(createContextSectionActive)

    if (context === null) {
        throw new Error(
            'useActiveSectionContext must be used within an ActiveSectionContextProvider'
        )
    }

    return context
}
