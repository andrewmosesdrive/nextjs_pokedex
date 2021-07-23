import useFetch from "react-fetch-hook";
import { useEffect } from "react";
import CardBody from "./CardBody";
import { useQuery, gql } from "@apollo/client";

const GET_POKEMANS = gql`
  query samplePokeAPIquery {
    pokemon_v2_pokemon(order_by: { id: asc }, limit: 151) {
      id
      name
      pokemon_v2_pokemontypes {
        type_id
      }
    }
  }
`;

const types = [
  "normal",
  "fighting",
  "flying",
  "poison",
  "ground",
  "rock",
  "bug",
  "ghost",
  "steel",
  "fire",
  "water",
  "grass",
  "electric",
  "psychic",
  "ice",
  "dragon",
  "dark",
  "fairy",
  "unknown",
  "shadow",
];

function PokeCardContainer() {
  const { loading, error, data } = useQuery(GET_POKEMANS);

  return (
    <div className="grid grid-cols-3 space-y-4 space-x-4 max-w-6xl justify-center items-center mx-auto">
      {data &&
        data.pokemon_v2_pokemon.map((pokemon) => {
          let typesArray =
            pokemon.pokemon_v2_pokemontypes.map(
              (pokemonType) => types[pokemonType.type_id - 1]
            ) || "";

          return (
            <>
              <CardBody
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                types={typesArray}
              />
            </>
          );
        })}
    </div>
  );
}

export default PokeCardContainer;
