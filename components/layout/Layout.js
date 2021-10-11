import React from 'react';
import Header from './Header';
import { css, Global } from '@emotion/react';
import Head from 'next/head'

const Layout = props => {
    return (
        <>
            <Global 
                styles={css`
                    :root{
                        --primario: #c5a87d;
                        --gris: #3d3d3d;
                        --gris2: #6f6f6f;
                        --gris3: #e1e1e1;
                        --gris4: #f0f0f0;
                    }
                `}
            />
            <Head>
                <title>SUIGNERIS</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" 
                    integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" 
                    crossOrigin="anonymous" referrerPolicy="no-referrer" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                <link href="https://fonts.googleapis.com/css2?family=Ephesis&family=Open+Sans:wght@400;700&family=Roboto+Slab:wght@400;700&family=Roboto:wght@700&display=swap" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300&display=swap" rel="stylesheet"></link>
            </Head>
            <Header></Header>
            <main>
                {props.children}
            </main>
        </>
    );
};

export default Layout;