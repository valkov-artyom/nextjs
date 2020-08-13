import React from "react";
import '../styles/style.scss'
export default function MyApp({Component, pageProps}) {
    return (
        <>
            <Component {...pageProps}/>
{/*            <style jsx global>{`
            body {
            font-family: 'Roboto Condensed', sans-serif;
            }`}</style>*/}
        </>
    )
}