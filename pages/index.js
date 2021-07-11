import useFetch from "react-fetch-hook";;

export default function Home() {

  const { isLoading, error, data } = useFetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  console.log(data)
  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      yeet
    </div>
  )
}
