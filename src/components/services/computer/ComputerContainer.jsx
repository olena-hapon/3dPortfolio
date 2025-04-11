"use client";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import ComputerModel from './ComputerModel'
import { OrbitControls, PerspectiveCamera,Stage } from "@react-three/drei";

const ComputerContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="Loading...">
        <Stage environment="night" intensity={0.1}>
          <ComputerModel scale={0.6} position={[-1, 0, 1.8]} />
        </Stage>
        <OrbitControls enableZoom={false} autoRotate />
        <PerspectiveCamera position={[-1,0,1.8]} zoom={0.6} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default ComputerContainer;