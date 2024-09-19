import type { Metadata } from 'next'
import './globals.css'
import {Navigation} from "@/app/components/Navigation";
import {getSession} from "@/app/utils/session.utils";


export const metadata: Metadata = {
    title: 'Team Eats',
    description: 'Local, New Mexican owned restaurants',
}

type RootLayoutProps = {
    children: React.ReactNode
}


export default async function RootLayout(props : RootLayoutProps) {
    const { children } = props

    const session = await getSession()

    return (
        <html  lang="en" suppressHydrationWarning>

        <body>
        <Navigation session={session} />
        {children}
        </body>
        </html>
    )
}