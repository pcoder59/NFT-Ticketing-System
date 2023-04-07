import '/styles/style.css';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  return <Component {...pageProps} isWalletConnected={isWalletConnected} setIsWalletConnected={setIsWalletConnected} />;
}

export default MyApp;
