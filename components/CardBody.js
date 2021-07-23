import { useState, useEffect } from "react";
import Image from "next/image";
import { useSpring, a, config } from "react-spring";
import cry from "../cries/1.mp3";
import TypeTag from "./TypeTag";
import PokeModal from "./PokeModal/index";

export default function CardBody({ id, name, types }) {
  const [showPokeModal, setPokeModal] = useState(false);

  const [rawr, animate] = useSpring(() => ({
    transform: "rotate(0deg) scale(1.0)",
  }));

  const [scale, animateScale] = useSpring(() => ({
    transform: " scale(1.0)",
  }));

  const handleHover = (enter) => {
    let random = Math.floor(Math.random() * (5 + 10 + 1)) + -10;
    enter
      ? (animateScale.start({ transform: `scale(1.1)` }),
        animate.start({ transform: `rotate(${random}deg) scale(1.1)` }))
      : (animateScale.start({ transform: "scale(1.0)" }),
        animate.start({ transform: "rotate(0deg) scale(1.0)" }));
  };

const properName =  name.substr(0, 1).toUpperCase() + name.substr(1)
  return (
    <>

      {showPokeModal ? <PokeModal setShow={setPokeModal} name={properName} types={types}/> : ""}

      <a.div
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
        onClick={() => setPokeModal(true)}
        key={id}
        style={scale}
        className="cursor-pointer py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
      >
        <a.div style={rawr}>
          <Image
            className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0"
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
            alt="Woman's Face"
            width={250}
            height={250}
          />
        </a.div>
        <div className="text-center space-y-2 sm:text-left">
          <div className="space-y-0.5">
            <p className="text-lg text-black font-semibold">
              {name.substr(0, 1).toUpperCase() + name.substr(1)}
            </p>
            <p className="text-gray-500 font-medium"># {id}</p>
          </div>
          <div className="">
            {types.map((type, index) => (
              <TypeTag type={type} key={index} />
            ))}
          </div>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Details
          </button>
        </div>
      </a.div>
    </>
  );
}
