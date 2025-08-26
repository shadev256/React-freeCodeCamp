import { useState } from 'react'
import React from 'react'
import GameResult from './GameResult.jsx'
function App() {
const [gameState, setGameState] = useState(() => {
  const words = ["apple", "banana", "grape", "orange", "mango"];
  const randomWord = words[1] || words[Math.floor(Math.random() * words.length)];
  return {
    isWon: false,
    isEnded: false,
    languageList: ['Javascript', 'C#', 'Python', 'Java', 'C++'],
    failedAttemp: 0,
    alphabetArry: Array.from({ length: 26 }, (_, i) => String.fromCharCode(i + 65)),
    words,
    rando: Array.from(randomWord),
    guessed: Array(randomWord.length)
  };
});

React.useEffect(()=>{
function handleKeyDown(e){
  console.log(e.key)
  var randoIndex = gameState.rando.findIndex(x => x.toLowerCase() === e.key.toLowerCase());

   if (!gameState.guessed[randoIndex]){
    setGameState(prevState => {
      return prevState.
    })
   }

 
}

window.addEventListener("keydown",handleKeyDown)
  return () => window.removeEventListener("keydown", handleKeyDown);
}, [])

 function getWord(){
  let tempGues =[...gameState.guessed];
  return gameState.rando.map((x, i) =>{ 
         let index = tempGues.findIndex(y => y === x);

          if (index !== -1) {
            tempGues.splice(index, 1);
          }
          return (<div key={i} className="w_item">{index !== -1 ? x : ""}</div>)})
 }
  console.log(gameState)

  return (
    <>
     <section >
      <h1>Assembly Endgame</h1>
      <p>
        Guess the word in under 8 attempts to keep the </p><p>programing world safe from Assembly Language</p>
      
     </section>
     <section >
      {
        gameState.isEnded && <GameResult isWon={gameState.isWon}/>
      }
     </section>
     <section>
        {
          gameState.languageList.map((x, index) =>{
            return (
              <div key={index}>
                {gameState.failedAttemp != 0 && index <= gameState.failedAttemp ? <div>Dead Man</div> : <div>{x}</div>}
              </div>
            )
          })
        }
     </section>
    <section className='word_section'>
        {
          getWord()
        }
    </section>

     <section className="keyboard">
        {
        gameState.alphabetArry.map((x,i) => <div key={i} className="kb_item">{x}</div>)

        }
     </section>
    </>
  )
}

export default App
