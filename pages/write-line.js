import * as THREE from 'three'

import React, {useState, useEffect} from 'react'


export default function Home() {
    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    const pointLight = new THREE.PointLight(0xffffff, 2, 100);


    // 解説
    // https://threejs.org/docs/#manual/en/introduction/Creating-a-scene
    useEffect(() => { // componentDidMount
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

        const renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        const geometry = new THREE.BoxGeometry( 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
        const cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.z = 5;

        function animate() {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
            cube.rotation.x += 0.01;
            cube.rotation.y += 0.01;
        }
        animate();


    }, [width, height]); // width, heightとは、useEffectの第二引数に指定した値が変更されたときに、useEffectの第一引数の関数を実行するという意味


    return (
        <div>
            <div className="globe">

            </div>
        </div>
    )

}
