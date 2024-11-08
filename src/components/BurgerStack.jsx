

const BurgerStack = (props) => {
    return ( 
        <ul>
            {props.stack.map((ingredient, index) => {
                return <li key={index}>{ingredient.name}
                <button onClick={() => props.removeFromBurger(ingredient)}>Remove Ingredient</button>
                </li>
            })}
        </ul>
    )
}

export default BurgerStack;