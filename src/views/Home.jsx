import { useState, useEffect } from 'react'
import AddButton from '../components/AddButton'
import CreateMission from '../components/CreateMission'
import Hero from '../components/Hero'
import Missions from '../components/Missions'
import { loadMissions } from '../services/blockchain'
import { useGlobalState } from '../store'

const Home = () => {
  const [missions] = useGlobalState('missions');
  const [isAdmin, setAdmin] = useState(false);
  const [account, setAccount] = useState('');
  const admin = process.env.REACT_APP_BESW;
  const admin_tolower=admin.toLowerCase();
  console.log(admin)

  useEffect(async () => {

    const handleAccountsChanged = (accounts) => {
      if (accounts.length > 0 && accounts[0] !== account) {
        window.location.reload();
      }
    };

    const checkConnection = async () => {
      if (window.ethereum) {
        try {
          const accounts = await window.ethereum.request({ method: 'eth_accounts' });
          window.ethereum.on('accountsChanged', handleAccountsChanged);
          if (accounts.length === 0) {
            setAdmin(false);
          }
          else {
            setAccount(accounts[0]);
            const account_toLower=accounts[0].toLowerCase();
            console.log(`account_toLower`, account_toLower);
            console.log(`admin_tolower`, admin_tolower);
            if (account_toLower === admin_tolower){
            setAdmin(true);
            console.log(`accounts[0]`, accounts[0]);
            console.log(`isAdmin`, isAdmin);
            
            }
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        alert('Please install Metamask')
      }
    };

    checkConnection();
    await loadMissions()
  }, [])
  return (
    <>
      <Hero />
      <Missions missions={missions} />
      <CreateMission />
      {isAdmin && <AddButton />}
    </>
  )
}

export default Home
