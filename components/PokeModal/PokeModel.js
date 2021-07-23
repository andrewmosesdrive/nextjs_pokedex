import { useRef, useState, useEffect, Suspense } from "react";
import * as THREE from "three";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";

let GLTFLoader;

const Pokemon = ({ url, ...props }) => {
  console.log(name)
  const gltf = useLoader(GLTFLoader, url);
  const mesh = useRef()
  useFrame((state, delta) => (mesh.current.rotation.y += 0.005))

  return <primitive ref={mesh} object={gltf.scene} />;
};

export default function PokeModel({name}) {
  useEffect(() => {
    GLTFLoader = require("three/examples/jsm/loaders/GLTFLoader").GLTFLoader;
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 8] }}>
     
      <Suspense fallback={null}>
        <Pokemon url={`./models/${name}.glb`} />
      </Suspense>
    </Canvas>
  );
}
