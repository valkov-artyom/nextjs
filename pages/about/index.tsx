import React from 'react';
import Router from 'next/router'
import {MainLayout} from "../../layouts/Layout";

export default function About({title}) {

    const linkHandler = () => {
        Router.push('/')
    }
return (
        <MainLayout>
            <h1>{title.map((el) => (
                <p>{el.title}</p>
            ))}</h1>
            <hr/>
            <button onClick={linkHandler}>Go to home page</button>
            <button onClick={() => Router.push('posts')}>Go to posts page</button>
        </MainLayout>
    )
}

About.getInitialProps = async () => {
    const response  = await fetch(`http://localhost:4200/about`);
    const data = await response.json();

    return {
        title: data
    }
}