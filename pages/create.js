import React from 'react';
import Head from 'next/head';
import Header from '/components/header.js';
import Footer from '/components/footer.js';
import Events from '../components/events';

export default function Create(props) {
    return (
        <div>
            <Head>
                <title>NFT Ticketing System - Create Tickets</title>
            </Head>
            <Header isWalletConnected={props.isWalletConnected} setIsWalletConnected={props.setIsWalletConnected}></Header>
            <Events isWalletConnected={props.isWalletConnected}></Events>
            <Footer></Footer>
        </div>
    );
}