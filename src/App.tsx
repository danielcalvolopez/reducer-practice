import React from "react";
import "./App.css";
import usePokemon from "./hooks/usePokemon";

const App = () => {
  const { pokemon } = usePokemon();
  return <div className="App">{JSON.stringify(pokemon)}</div>;
};

export default App;
