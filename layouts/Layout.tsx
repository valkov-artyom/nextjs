import React from 'react'
import Link from 'next/link'
import Head from "next/head";

export const MainLayout = (
    {children, title = 'NextJS App'}
) => {
    return (
        <>
            <Head>
                <title> {title} | Web</title>
                <meta name="keywords" content="next, javascript, nextjs, react" />
                <meta name="description" content="next js app" />
                <meta charSet="utf-8" />
            </Head>
            <nav>
                <Link href={'/'}><a>Home</a></Link>
                <Link href={'/about'}><a>About</a></Link>
                <Link href={'/posts'}><a>Posts</a></Link>
            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
            nav {
            position: fixed;
            height: 60px;
            left: 0;
            right: 0;
            top: 0;
            background: darkblue;
            display: flex;
            justify-content: space-around;
            align-items: center;
            }
            nav a {
            color: #fff
            
            }
            main {
            margin-top: 60px;
            }
            `}</style>
        </>
    )
}