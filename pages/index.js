import React from 'react';
import Head from 'next/head';
import Header from '/components/header.js';
import Main from '/components/main.js';
import Footer from '/components/footer.js';

export default function Home() {
    return (
        <div>
            <Head>
                <title>NFT Ticketing System</title>
            </Head>
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>  
    );
}
