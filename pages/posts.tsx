import {useState, useEffect} from 'react'
import Link from 'next/link'
import {MainLayout} from "../layouts/Layout";
import {IPost} from "../interfaces/post";
import {NextPageContext} from "next";
import axios from 'axios';

interface IPagePosts {
    posts: IPost[]
}

export default function Posts({posts: serverPosts}: IPagePosts) {
    const [posts, setPosts] = useState(serverPosts)
    useEffect(() => {
        async  function load() {
         const response  = await fetch('http://localhost:4200/posts');
         const json = await response.json();
         setPosts(json)
        }
        if(!serverPosts) {
            load()
        }
    }, [])

    if(!posts) {
        return <MainLayout>
            <p>Loading...</p>
        </MainLayout>
    }

    return (
        <MainLayout>
            <h1>Posts page</h1>
            <pre>
                <ul>
                    {posts.map((post) =>(
                        <li key={post.id}>
                            <Link href={`/post/[id]`} as={`post/${post.id}`}><a>{post.title}</a></Link>
                        </li>
                    ))}
                </ul>
            </pre>
        </MainLayout>

    )
}

Posts.getInitialProps = async ({req}: NextPageContext) => {
/*    if (!req) {
        return {posts: null}
    }

    const response  = await fetch('http://localhost:4200/posts');
    const posts: IPost[] = await response.json();*/
    let posts: any
    axios.get('http://localhost:4200/posts')
        .then((data: any) => {
            if(data && data.data) {
            posts.push(data)
            }
        })
    return {
        posts
    }
}