import React from "react";
import { usePokemonQuery } from "../redux/store/store";

const PokemonList = () => {
  const { data } = usePokemonQuery(undefined);
  return (
    <div>
      {(data || []).map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
