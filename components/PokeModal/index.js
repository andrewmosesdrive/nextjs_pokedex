import { useState, useEffect } from "react";
import { a, useSpring } from "react-spring";
import PokeModel from "./PokeModel";

export default function index({ setShow, name, types }) {
  console.log(types);

  const generateColorsFromType = (type) => {
    switch (type) {
      case "grass":
        return "green";
        break;
      case "poison":
        return "purple";
        break;
      case "fire":
        return "red";
        break;
      case "flying":
        return "sky";
        break;
      case "bug":
        return "lime";
        break;
      case "normal":
        return "gray";
        break;
      case "electric":
        return "yellow";
        break;
      case "ground":
        return "brown";
        break;
        case "water":
            return "blue";
            break;

      default:
        break;
    }
  };

  const colors = types.map((type) => generateColorsFromType(type));

  const [modal, animateModal] = useSpring(() => ({
    opacity: 0,
  }));

  useEffect(() => {
    animateModal.start({ opacity: 0.9 });
  }, []);
  console.log(setShow);
  return (
    <div onClick={() => setShow(false)}>
      <a.div
        className={`absolute fixed inset-0 bg-gradient-to-r from-${colors[0]}-500 ${colors[1] ? `to-${colors[1]}-400` : `to-${colors[0]}-300`}  z-10`}
        style={modal}
      ></a.div>
      <div className="absolute top-0 left-0 z-20 w-full h-full">
        <PokeModel name={name} />
      </div>
    </div>
  );
}
