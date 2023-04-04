import React from 'react';
import Head from 'next/head';
import Header from '/components/header.js';
import Main from '/components/main.js';
import Footer from '/components/footer.js';
import { useState } from 'react';

export default function Home() {
    const [isWalletConnected, setIsWalletConnected] = useState(false);

    return (
        <div>
            <Head>
                <title>NFT Ticketing System</title>
            </Head>
            <Header isWalletConnected={isWalletConnected} setIsWalletConnected={setIsWalletConnected}></Header>
            <Main isWalletConnected={isWalletConnected}></Main>
            <Footer></Footer>
        </div>  
    );
}
