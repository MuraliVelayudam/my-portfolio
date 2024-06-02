'use client'

import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'

import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import SubmitBtn from './submitButton'
import { Textarea } from './ui/textarea'
import { useState } from 'react'
import toast from 'react-hot-toast'

const formSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must contain at least 3 character(s)')
        .max(50),
    email: z
        .string()
        .min(2, 'Email must contain at least 3 character(s)')
        .max(50)
        .email('Invalid Email'),
    message: z
        .string()
        .min(2, 'Message must contain at least 3 character(s)')
        .max(1500),
})

export default function ContactForm() {
    const [loading, setLoading] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            email: '',
            message: '',
        },
    })

    let serviceId = process.env.NEXT_PUBLIC_SERVICE_ID as string
    let templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID as string

    function onSubmit(values: z.infer<typeof formSchema>) {
        setLoading(true)
        emailjs
            .send(serviceId, templateId, values, {
                publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
            })
            .then(
                (response) => {
                    toast.success('Mail Sent Successfully')
                    setLoading(false)
                },
                (err) => {
                    toast.error('Something Went Wrong')
                    setLoading(false)
                }
            )
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8 text-start mt-5"
            >
                <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="px-3">Name</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Your Name . . ."
                                    {...field}
                                    className="px-4 placeholder:text-sm dark:text-blue-600 font-semibold"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="px-3">Email</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Your Email . . ."
                                    {...field}
                                    className="px-4 placeholder:text-sm dark:text-blue-600 font-semibold"
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className="px-3">Message</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Your Message . . ."
                                    rows={10}
                                    className="px-4 placeholder:text-sm dark:text-blue-600 font-semibold"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div>
                    <SubmitBtn loading={loading} />
                </div>
            </form>
        </Form>
    )
}
