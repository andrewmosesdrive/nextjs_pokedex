import useFetch from "react-fetch-hook";
import CardBody from "./CardBody";

function PokeCardDesktop() {
  const { isLoading, error, data } = useFetch(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151"
  );
  console.log(data);

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div className="grid grid-cols-3 space-y-4 space-x-4 max-w-6xl justify-center items-center mx-auto">
      {data.results.map((value, index) => {
        return (
          <>
            <CardBody index={index} value={value} />
          </>
        );
      })}
    </div>
  );
}

export default PokeCardDesktop;
