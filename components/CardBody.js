import React from "react";
import Image from "next/image";
import { useSpring, a, config } from "react-spring";

export default function Card({ index, value }) {
 

  const [rawr, animate] = useSpring(() => ({
    transform: "rotate(0deg) scale(1.0)",
  }));

  const handleAnimate = (enter) => {
    let random = Math.floor(Math.random() * (5 + 10 + 1)) + -10;
    enter
      ? (animate.start({ transform: `rotate(${random}deg) scale(1.1)`}))
      : animate.start({ transform: "rotate(0deg) scale(1.0)" });
  };

  return (
    <div
      key={index}
      className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
    >
      <a.div
        onMouseEnter={() => handleAnimate(true)}
        onMouseLeave={() => handleAnimate(false)}
        style={rawr}
      >
        <Image
          className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`}
          alt="Woman's Face"
          width={250}
          height={250}
        />
      </a.div>
      <div className="text-center space-y-2 sm:text-left">
        <div className="space-y-0.5">
          <p className="text-lg text-black font-semibold">
            {value.name.substr(0, 1).toUpperCase() + value.name.substr(1)}
          </p>
          <p className="text-gray-500 font-medium"># {index + 1}</p>
        </div>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Details
        </button>
      </div>
    </div>
  );
}
