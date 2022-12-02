import React from "react";
import { createContext } from "react";
import usePokemon from "../../hooks/usePokemon";

interface Pokemon {
  id: number;
  name: string;
  type: string[];
  hp: number;
  attack: number;
  defense: number;
  special_attack: number;
  special_defense: number;
  speed: number;
}

export const PokemonContext = createContext({
  pokemon: [] as Pokemon[],
});

export const PokemonContextProvider = ({ children }) => {
  const poke = usePokemon();
  console.log(poke);
  return (
    <PokemonContext.Provider value={poke}>{children}</PokemonContext.Provider>
  );
};
