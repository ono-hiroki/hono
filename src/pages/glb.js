import Head from 'next/head'
import {Suspense} from "react"
import {Canvas, useLoader} from "@react-three/fiber"
import {Environment, OrbitControls} from "@react-three/drei"
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader"

const Model = () => {
    // location of the 3D model
    const gltf = useLoader(GLTFLoader, "test2.gltf");
    return (
        <>
            {/* Use scale to control the size of the 3D model */}
            <primitive object={gltf.scene} scale={1}/>
        </>
    );
};

export default function Home() {
    return (
        <div>
            <Head>
                <title>Three.js Example</title>
                <meta name="description" content="Generated by create next app"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>

            <div className="globe">
                <Canvas shadows dpr={[1, 2]} camera={{position: [0, 0, 4], fov: 50}}>
                    <ambientLight intensity={0.7}/>
                    <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow/>
                    <Suspense fallback={null}>
                        <Model/>
                        {/* To add environment effect to the model */}
                        <Environment preset="city"/>
                    </Suspense>
                    <OrbitControls autoRotate/>
                </Canvas>
            </div>

        </div>
    )
}
