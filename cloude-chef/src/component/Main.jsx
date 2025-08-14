import React, { use } from "react";
import { Recipe } from "./recipe";  
export function Main() {
    let [ingredients, setIngredients] = React.useState(['egg', 'milk', 'bread', 'butter']);
    let [showRecipe, setShowRecipe] = React.useState(false);
    let [randPerson, setRandPerson] = React.useState({});
    let [count, setCount] = React.useState(0);
    let [memes, setMessages] = React.useState([]);
    let [nextMeme, setNextMeme] = React.useState();
    let recipeRef = React.useRef(null);
    console.log("Recipe Ref:", recipeRef);
    React.useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then(response => response.json())
            .then(data => setMessages(data.data.memes))
            .catch(error => console.error("Error fetching memes:", error));
    }, []);
    function handleSubmit(formdata) {
        const recipeName = formdata.get("ingredient").trim();
        setIngredients(prevIng => [...prevIng, recipeName]);
    }

    const ingredientsItems = ingredients.map((ingredient, index) => (
        <li key={index} className="ingredient-item">{ingredient}</li>));

    function fetchRecipe() {
        setTimeout(() => {
            setShowRecipe(prev => !prev);
        }, 1000);
    }

    React.useEffect(() => {
        if (recipeRef.current) {
            recipeRef.current.scrollIntoView({ behavior: "smooth" });
        }}, [showRecipe]);

    React.useEffect(() => {
 fetch(`https://swapi.py4e.com/api/people/${count}`)
        .then(response => response.json())
        .then(data => console.log(data) || setRandPerson(data))
        .catch(error => console.error("Error fetching data:", error));


    }, [count]);

    function handleClick() {
        setCount(prevCount => prevCount + 1);
        setNextMeme(prevMeme => {
            if (prevMeme === undefined || prevMeme === memes.length - 1) {
                return memes[0]; 
            }
            return memes[count];
        })
    }

 const countRef = React.useRef(0);
  const [renderCount, setRenderCount] = React.useState(0);

  const increment = () => {
    countRef.current += 1; // value changes but component won't re-render
    console.log("Count (ref):", countRef.current);
  };

   
    return (
        <main>
             <div>
      <p>Render count: {renderCount}</p>
            <p>Render count: {countRef.current}</p>

      <button onClick={increment}>Increment Ref</button>
      <button onClick={() => setRenderCount(c => c + 1)}>Re-render</button>
    </div>
            <h1 className="chef-title">{randPerson.name}</h1>
            <img src={nextMeme?.url} alt={nextMeme?.name} className="chef-image" />
            <button className="fetch-button" onClick={handleClick}>Fetch Next Person</button>
            <form action={handleSubmit} className="input-recipe-name">

                <input type="text" placeholder="Enter Recipe Name" name="ingredient" className="recipe-name-input" />
                <button type="submit" className="submit-recipe-button">+ Add Ingredient</button>
            </form>
            {ingredients.length > 0 && (
                <section>
                    <h2 className="ingredients-title">Ingredients on hand:</h2>
                    <ul className="ingredients-list">
                        {ingredientsItems}
                    </ul>
                    {ingredients.length > 3 && (
                        <div className="recipe-suggestion">
                            <div>
                                <h3>Ready for a recipe?</h3>
                                <p>Click on the button below to find recipes based on your ingredients.</p>
                            </div>
                            <button className="find-recipes-button" onClick={fetchRecipe}>Find Recipes</button>
                        </div>)}
                </section>)}
            {showRecipe && (
                <Recipe ref={recipeRef} />
           )}
        </main>
    );
}