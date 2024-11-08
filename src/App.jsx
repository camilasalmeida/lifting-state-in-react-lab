import "./App.css";
import BurgerStack from './components/BurgerStack.jsx' 
import IngredientList from './components/IngredientsList.jsx' 
import { useState } from 'react';

export const availableIngredients = [
  { name: "Kaiser Bun", color: "saddlebrown" },
  { name: "Sesame Bun", color: "sandybrown" },
  { name: "Gluten Free Bun", color: "peru" },
  { name: "Lettuce Wrap", color: "olivedrab" },
  { name: "Beef Patty", color: "#3F250B" },
  { name: "Soy Patty", color: "#3F250B" },
  { name: "Black Bean Patty", color: "#3F250B" },
  { name: "Chicken Patty", color: "burlywood" },
  { name: "Lettuce", color: "lawngreen" },
  { name: "Tomato", color: "tomato" },
  { name: "Bacon", color: "maroon" },
  { name: "Onion", color: "lightyellow" },
  { name: "Cheddar Cheese", color: "#FDE18B" },
  { name: "Swiss Cheese", color: "#F1E1A8" },
];
//-----------------------------------------------------------------------------------\\
const App = () => {
  const [stack, setStack] = useState([]);

  const addToBurger = (newIngredient) => {
    console.log('New ingredient has been added to the burger: ', newIngredient);
    const updatedStack = [...stack, newIngredient];
    setStack(updatedStack);
    console.log(updatedStack);
  };

  const removeFromBurger = (removeIngredient) => {
    console.log('Removing this ingredient from the burger: ', removeIngredient);
    const updatedStackAfterRemoving = stack.filter(ingredient => ingredient !== removeIngredient)                                   // Use the filter() method to create a new array that excludes the ingredient we are removing.
    setStack(updatedStackAfterRemoving);
  }
  
  return (
    <main>
      <h1>Your Burger Stacker App 🍔</h1>
      <section>
      <IngredientList availableIngredients={availableIngredients} addToBurger={addToBurger} />
        <BurgerStack stack={ stack } removeFromBurger={ removeFromBurger } />
        </section>
    </main>
  );
};

export default App;
