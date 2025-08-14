import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [isWon, setIsWon] = useState(false)

   function GameResult(prop){
    return (<>
    {
      prop ? 
        <div className="win_div">
          <b>You Win!</b>
          <small> Well Done </small>
       </div> :
       <div>
        <h3>Game over!</h3>
        <small>You lost Better start learning Assembly</small>
       </div>
    }
    </>)
   }

  return (
    <>
     <section>
      <h1>Assembly Endgame</h1>
      <p>
        Guess the word in under 8 attempts to keep the <p>programing world safe from Assembly Language</p>
      </p>
      {
        
      }
     </section>
    </>
  )
}

export default App
