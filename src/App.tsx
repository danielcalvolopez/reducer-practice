import React from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";
import usePokemon from "./hooks/usePokemon";

const App = () => {
  const { pokemon } = usePokemon();
  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
};

export default App;
