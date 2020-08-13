import React from 'react';
import Router from 'next/router'
import {MainLayout} from "../../layouts/Layout";

export default function Index() {

    const linkHandler = () => {
        Router.push('/')
    }
return (
        <MainLayout>
            <h1>About page</h1>
            <button onClick={linkHandler}>Go to home page</button>
            <button onClick={() => Router.push('posts')}>Go to posts page</button>
        </MainLayout>
    )
}

