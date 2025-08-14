export function Dice({ value, isHeld, id, onClick }) {
    let backgroundStyle = isHeld ? "btn-warning" : ""
  
    return (
        <>
            <button className={`dice ${backgroundStyle}`}  onClick={(x) => onClick(id)}>
                {value}
            </button>
            
        </>
    )
}