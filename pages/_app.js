import { useState } from 'react';
import { LoginContext } from '../components/Contexts/LoginContext';
import { GameContext } from '../components/Contexts/GameContext';
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState(0);
  const [start, setStart] = useState(false);
  return (
    <LoginContext.Provider value={{ username, setUsername }}>
      <GameContext.Provider value={{ tracker: [score, setScore], timer: [start, setStart] }}>
        <Component {...pageProps} />
      </GameContext.Provider>
    </LoginContext.Provider>
  )
}

export default MyApp
