import THREE from "three";
import {Suspense} from "react";
import { Canvas } from "@react-three/fiber";
import { useTexture, OrbitControls, Float, Decal, Preload } from "@react-three/drei";
import CanvasLoader from "../CanvasLoader";

const Ball = (props:{icon:string}) => {

    const texture = useTexture(props.icon)
    return (
        <Float
            speed={1.75}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0,0,0.05]} />
            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1,1]} />
                <meshStandardMaterial 
                    color="#fff8eb"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal 
                    position={[0,0,1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    flatShading
                    map={texture}
                />
            </mesh>
        </Float>
    )
}

const BallCanvas = ({icon}: {icon:string}) => {
    return (
        <Canvas
            frameloop="always"
        >
            <Suspense fallback={<CanvasLoader />}>
                <Ball icon={icon} />
            </Suspense>

            <Preload all />
        </Canvas>
    );
}
 
export default BallCanvas;