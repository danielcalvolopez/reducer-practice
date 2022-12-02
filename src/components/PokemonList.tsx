import React, { useContext } from "react";
import { PokemonContext } from "./useContext/PokemonContext";

const PokemonList = () => {
  const { pokemonCtx } = useContext(PokemonContext);
  return (
    <div>
      {pokemonCtx.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
