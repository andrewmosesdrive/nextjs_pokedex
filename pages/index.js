import useFetch from "react-fetch-hook";
import Image from 'next/image';

export default function Home() {

  const { isLoading, error, data } = useFetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=151');
  console.log(data)

  if (isLoading) return "Loading...";
  if (error) return "Error!";

  return (
    <div>
      {data.results.map((value, index) => {

        return (
          <div key={index} className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
            <Image
              className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`}
              alt="Woman's Face"
              width={250}
              height={250}
            />
            <div className="text-center space-y-2 sm:text-left">
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  {value.name.substr(0,1).toUpperCase() + value.name.substr(1)}
                </p>
                <p className="text-gray-500 font-medium">
                  # {index + 1}
                </p>
              </div>
              <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Details</button>
            </div>

          </div>
        )
      })}
    </div>
  )
}
