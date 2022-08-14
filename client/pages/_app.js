import { useState } from 'react';
import { LoginContext } from '../components/Contexts/LoginContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  return (
    <LoginContext.Provider value={{ username, setUsername }}>
      <Component {...pageProps} />
    </LoginContext.Provider>
  )
}

export default MyApp
