interface ISectionHeadingProps {
    children: React.ReactNode
}

export default function SectionHeading({ children }: ISectionHeadingProps) {
    return (
        <h2 className="text-3xl mb-6 caption-top font-medium text-center">
            {children}
        </h2>
    )
}
