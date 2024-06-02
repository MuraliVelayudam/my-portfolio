'use client'

import { delay, motion } from 'framer-motion'

export default function SectionDivider() {
    return (
        <motion.div
            className="h-16 w-1 bg-gray-300/70 rounded-full my-9  hidden sm:block"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.125 }}
        ></motion.div>
    )
}
