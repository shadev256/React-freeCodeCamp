 
 export default function GameResult(prop){
    return (<>
    {
      prop.isWon ? 
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