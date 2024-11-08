


const IngredientList = (props) => {

    return   (  
    <ul>
        {props.availableIngredients.map((ingredient, index) => {
            return <li key={index}>{ingredient.name}
            <button onClick={() => props.addToBurger(ingredient)}>+</button>               
            </li>;
        })}
    </ul>
    )
}

export default IngredientList;



//The arrow function allows you to pass arguments to the function when the button is clicked.