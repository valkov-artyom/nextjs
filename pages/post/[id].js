import {useState, useEffect} from 'react'
import {MainLayout} from "../../layouts/Layout";
import Link from 'next/link'
import {useRouter} from "next/router";

export default function Post({ post: serverPost }) {
    const [post, setPost] = useState(serverPost)
    const router = useRouter();

    useEffect(() => {
        async function load() {
            const response  = await fetch(`http://localhost:4200/posts/${router.query.id}`);
            const data = await response.json();
            setPost(data)
        }
        if (!post) {
            load()
        }
    }, [])

    if (!post) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }

    return <MainLayout>
        <h1>{post.title}</h1>
        <hr/>
        <p>{post.body}</p>
        <Link href={`/posts`}><button>Go to posts page</button></Link>
    </MainLayout>
}

export async function getServerSideProps ({query, req}){
    if (!req) {
        return {post: null}
    }
    const response  = await fetch(`http://localhost:4200/posts/${query.id}`);
    const post = await response.json();

    return {
        props : {post}
    }
}

