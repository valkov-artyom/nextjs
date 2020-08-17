import Link from 'next/link'
import {MainLayout} from "../layouts/Layout";
import Head from 'next/head'
export default function Index() {
    return  <>
        <MainLayout>
            <h1>Hello next.js</h1>
            <p><Link href={'/about'}><a>About</a></Link></p>
            <p><Link href={'/posts'}><a>Posts</a></Link></p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
        </MainLayout>
    </>
}