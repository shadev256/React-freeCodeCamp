import starFilled from "/src/images/star-filled.png"
import starEmpty from "/src/images/star-empty.png"

export function Star(prop){
    const { isFilled } = prop;
    const starIcon = isFilled ? starFilled : starEmpty;

return(
     <button
                            onClick={()=> prop.onClick("Mon")}
                            aria-pressed={prop.isFilled}
                            aria-label={prop.isFilled ? "Remove from favorites" : "Add to favorites"}
                            className="favorite-button"
                        >
     <img
                            src={starIcon}
                            alt={isFilled ? "filled star icon" : "empty star icon"}
                            className="favorite"
                        />
                        </button>
)
}