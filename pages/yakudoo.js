import * as THREE from 'three'
import styled from 'styled-components';
import React, {useState, useEffect} from 'react'


export default function Home() {
    const Description = styled.div`
    position: absolute;
    top: 10px;
    width: 100%;
    text-align: center;
    z-index: 100;
    display:block;
`;

    const [width, setWidth] = useState(0);
    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);
    const [height, setHeight] = useState(0);
    useEffect(() => {
        setHeight(window.innerHeight);
    }, []);

    useEffect(() => {
        var scene = new THREE.Scene();
        var camera = new THREE.PerspectiveCamera( 30, window.innerWidth/window.innerHeight, 0.1, 1000 );

        var renderer = new THREE.WebGLRenderer();
        renderer.setSize( window.innerWidth, window.innerHeight );
        document.body.appendChild( renderer.domElement );

        var geometry = new THREE.BoxGeometry( 20, 20, 20);
        var material = new THREE.MeshNormalMaterial();
        var cube = new THREE.Mesh( geometry, material );
        scene.add( cube );

        camera.position.set(
            10,
            10,
            200
        )

        var light = new THREE.PointLight( 0xFFFF00 );
        light.position.set( 10, 0, 25 );
        scene.add( light );


        var render = function () {
            requestAnimationFrame( render );

            renderer.render(scene, camera);
        };

        render();


    }, [width, height]);


    return (
        <div>
            あいうえお
        </div>
    )

}
