import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

const Earth = () => {

    const earth = useGLTF("/assets/models/planet/scene.gltf");

    return (
        <mesh>
            <primitive
                object={earth.scene}
                scale={2.5}
            />
        </mesh>
    )
}

const EarthCanvas = () => {

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-4,3,6]
            }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls 
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Earth />
            </Suspense>
        </Canvas>
    );
}
 
export default EarthCanvas;