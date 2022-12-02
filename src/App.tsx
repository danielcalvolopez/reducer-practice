import React from "react";
import "./App.css";
import { PokemonContextProvider } from "./components/useContext/PokemonContext";
import usePokemon from "./hooks/usePokemon";

const App = () => {
  const { pokemon } = usePokemon();
  return (
    <PokemonContextProvider>
      <div className="App"></div>
    </PokemonContextProvider>
  );
};

export default App;
