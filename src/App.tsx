import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './App.css'
import OnlyMobile from './Components/OnlyMobile'
import HomePage from './Pages/HomePage'
import VerificationPage from './Pages/VerificationPage'
import CreateAcctPage from './Pages/CreateAcctPage'
import SecureAcct from './Pages/SecureAcct'

const App: React.FC = () => {
  const [count, setCount] = useState(0)

  const [page, setPage] = useState<number>(1)

  const [width, setWidth] = useState<number>(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  let isMobile: boolean = width > 768;

  if (isMobile) {
    return <OnlyMobile />;
  }

  return (
    <div className="App">
      {page === 1 ? <HomePage /> : page === 2 ? <VerificationPage /> : page === 3 ? <CreateAcctPage /> : page === 4 ? <SecureAcct /> : null}
    </div>
  )
}

export default App
