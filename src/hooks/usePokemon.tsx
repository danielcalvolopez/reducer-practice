import React, { useEffect, useState } from "react";

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

const usePokemon = () => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  useEffect(() => {
    fetch("/pokemon.json")
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, []);
  return { pokemon };
};

export default usePokemon;
