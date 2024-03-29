import { useEffect } from 'react';
import AddTransactionCard from './components/AddTransactionCard';
import Header from './components/Header';
import Hero from './components/Hero';
import Tabuler from './components/Tabuler';
import {
  isWallectConnected,  
  checkIfTransactionExist,
  connectWallet,
} from './shared/Transaction'
import { useGlobalState } from './store';

const App = () => {
  const [connectedAccount] = useGlobalState('connectedAccount');
  useEffect(() => {
    isWallectConnected();
    checkIfTransactionExist();
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <Hero />
      {!connectedAccount ? (
        <div className="text-center mb-10">
          <button
            onClick={connectWallet}
            className="text-white bg-blue-500 py-2 px-5 rounded-xl drop-shadow-xl border border-transparent hover:bg-transparent hover:text-blue-500 hover:border hover:border-blue-500 focus:outline-none focus:ring">
            Connect Wallet
          </button>
        </div>
      ) : (
        <>
          <Tabuler />
          <AddTransactionCard />
        </>
      )}
    </div>
  )
}

export default App
