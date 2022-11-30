import React, { useContext } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import {
  ThemeContext,
  ThemeContextProvider,
} from "./components/useContext/ThemeContext";
import usePokemon from "./hooks/usePokemon";

const App = () => {
  const theme = useContext(ThemeContext);
  console.log(theme);
  const { pokemon } = usePokemon();
  return (
    <ThemeContextProvider>
      <div className="App">
        <PokemonList pokemon={pokemon} />
      </div>
    </ThemeContextProvider>
  );
};

export default App;
