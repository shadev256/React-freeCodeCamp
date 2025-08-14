import {Dice} from "./Dice.jsx"
import React from "react"
export default function DiceBoard(){
    let [gameState, setgameState ] = React.useState(() => Array.from({length: 10},(_,i) => {
      console.log('testw')  
      var rand = Math.floor(Math.random() * 10);
       return {
        id:i,
        state: false,
        value: rand,
    }}));



    function diceClicked(id){
        console.log(id)
       setgameState(prev =>
    prev.map(x => {
      if (x.id === id) {
        // Toggle `state` for the target item
        return {
          ...x,
          state: !x.state
        };
      }
        return x;
      
    })
  );
    }
      function diceRoll(){
       setgameState(prev =>
    prev.map(x => {
      if( x.state == false){
          return {
              ...x,
              value: Math.floor(Math.random() * 10)
            };
        }
        return x;
      }
    )
  );
    }

    return(<>
       <div className="dice_wrapper">    
    {gameState.map(x =>
           <Dice value={x.value} isHeld={x.state} id={x.id} onClick={diceClicked}/>
        )}
        </div>
        <button className="btn_dice_Roll" onClick={() => diceRoll()}>Roll</button>
    </>)
}