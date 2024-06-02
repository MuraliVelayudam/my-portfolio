import React from 'react'
import { CgWorkAlt } from 'react-icons/cg'
import { FaReact } from 'react-icons/fa'
import { LuGraduationCap } from 'react-icons/lu'

import fastReactPizza from '@/public/fastReactPizza.jpg'
import Flavour from '@/public/Flavour.png'
import Recipes from '@/public/Recipes.jpg'

export const links = [
    {
        name: 'Home',
        hash: '#home',
    },
    {
        name: 'About',
        hash: '#about',
    },
    {
        name: 'Projects',
        hash: '#projects',
    },
    {
        name: 'Skills',
        hash: '#skills',
    },
    {
        name: 'Contact',
        hash: '#contact',
    },
] as const

export const experiencesData = [
    {
        title: 'Graduated bootcamp',
        location: 'Hyderabad',
        description:
            'Gain proficiency in building full-stack applications, handling databases, creating APIs, and developing user interfaces. Participants will acquire hands-on experience and practical skills in developing web applications using the MERN stack.',
        icon: React.createElement(LuGraduationCap),
        date: '2023',
    },
    {
        title: 'Bench Sales Executive',
        location: 'Plano,Texas (Remote)',
        description:
            'I worked as a Bench Sales Executive. I also up skilled to the full stack.',
        icon: React.createElement(CgWorkAlt),
        date: '2023 - Present',
    },
] as const

export const projectsData = [
    {
        title: 'Fast React Pizza',
        description:
            'The Pizza Ordering App is a convenient and user-friendly mobile application that allows pizza enthusiasts to customize, order, and enjoy their favorite pizzas. Whether you’re craving a classic Margherita, a meat lover’s delight, or a veggie-packed pie, this app has you covered.Integrated with Geo Location.',
        tags: ['React', 'Tailwind'],
        imageUrl: fastReactPizza,
        link: 'https://the-fast-react-pizza-co.vercel.app/',
    },
    {
        title: 'Flavour',
        description:
            'A React Web App with Redux for State Management Flavour, our delightful React web application. It is like a cozy food haven where users can explore, order, and savor their favorite dishes',
        tags: ['React', 'TypeScript', 'Tailwind', 'Redux'],
        imageUrl: Flavour,
        link: 'https://redux-shop-murex.vercel.app/',
    },
    {
        title: 'Recipes',
        description:
            'A Simple Recipes Page, The app offers a comprehensive database of recipes, including breakfast, lunch, dinner, snacks, and desserts.Each recipe includes detailed instructions, ingredient lists, cooking time, and serving size.',
        tags: ['React', 'Next.js', 'Tailwind'],
        imageUrl: Recipes,
        link: 'https://my-recipe-ebon.vercel.app/',
    },
] as const

export const skillsData = [
    'HTML',
    'CSS',
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'shadCn ui',
    'Node.js',
    'Git',
    'Tailwind',
    'Framer Motion',
    'MongoDB',
    'Redux',
    'Express',
    'Python',
] as const
