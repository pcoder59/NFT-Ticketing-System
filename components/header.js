import { useState, useEffect } from 'react';

function Header(props) {
  const [metamaskMessage, setMetamaskMessage] = useState(false);
  var user = null;
  
  const handleConnectWallet = async() => {
      try {
           if(typeof window.ethereum !== 'undefined' && window.ethereum.isMetaMask) {
                if(user == null) {
                    user = await window.ethereum.request({ method: 'eth_requestAccounts' });
                    if(user != null) {
                        pros.setIsWalletConnected(true);
                    }
                }
            } else {
                setMetamaskMessage(true);
            }
      } catch(ex) {
          console.error(ex);
      }
  };
  
  useEffect(() => {
     if(user) {
         props.setIsWalletConnected(true);
     } else {
         props.setIsWalletConnected(false);
     }
  }, []);
  
  return (
    <div>
        {metamaskMessage?
        <div id="metamask-message">
          <p>
            Metamask is not installed or not logged in. Please{" "}
            <a href="https://metamask.io/" target="_blank" style={{ color: "blue" }}>
              install Metamask
            </a>{" "}
            to use this website.
          </p>
        </div>:
        null 
        }
        <header>
          <h1>NFT Ticketing System</h1>
          <nav>
            <ul>
              <li>
                <a href="/index">Home</a>
              </li>
              
              {props.isWalletConnected ? (
                <div>
                  <li style={{display: 'inline'}}>
                    <a href="/buy-tickets">Buy Tickets</a>
                  </li>
                  <li style={{display: 'inline'}}>
                    <a href="/create" id="create">
                      Create Events
                    </a>
                  </li>
                  <li style={{display: 'inline'}}>
                    <a href="/inventory" id="inventory">
                      My Account
                    </a>
                  </li>
                </div>
              ) : null}
              {!props.isWalletConnected?
                <li>
                    <a href="#" id="connect" onClick={handleConnectWallet}>
                      Connect Wallet
                    </a>
                </li>
                :
                <li>
                    <a href="#" id="disconnect">
                      Disconnect Wallet
                    </a>
                </li>
              }
              
            </ul>
          </nav>
        </header>
    </div>
  );
}

export default Header;

