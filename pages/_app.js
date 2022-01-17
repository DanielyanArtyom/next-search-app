import React from 'react'
import Head from 'next/head'
import { wrapper } from '../redux/store'
import '../styles/main.scss'

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <title>Search App</title>
            <meta name="description" content="Search app for " />
            <link href="https://fonts.googleapis.com/css2?family=Irish+Grover&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <Component {...pageProps} />
    </>
);

export default wrapper.withRedux(MyApp)