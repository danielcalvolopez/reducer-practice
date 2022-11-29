import React from "react";

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

const PokemonList = ({ pokemon }: { pokemon: Pokemon[] }) => {
  return (
    <div>
      {pokemon.map((pokemon) => (
        <div key={pokemon.id}>{pokemon.name}</div>
      ))}
    </div>
  );
};

export default PokemonList;
