import {Suspense, useEffect, useState} from "react";
import {Canvas} from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

const ShibaCanvas = () => {
    return (
        <Canvas 
            frameloop="demand"
            shadows
            camera={{position:[0,0,4] ,fov:25}}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    enableZoom={false}
                    autoRotate
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Shiba />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

const Shiba = () => {

    const dog = useGLTF("/assets/models/shiba/scene.gltf");

    return (
        <mesh>
            <ambientLight />
            <primitive 
                object={dog.scene} 
                position={[0,0.3,0.5]}
            />
        </mesh>
    );
}
 
export default ShibaCanvas;