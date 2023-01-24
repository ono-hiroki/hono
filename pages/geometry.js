import * as THREE from 'three'
import styled from 'styled-components';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

import React, {useState, useEffect} from 'react'


export default function Home() {
    useEffect(() => { // componentDidMount

        //シーン
        const scene = new THREE.Scene();

        //カメラ
        const camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            100
        );
        camera.position.set(-1, 3, 4);

        //レンダラー
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        document.body.appendChild(renderer.domElement);

        //ジオメトリ
        const boxgeometry = new THREE.BoxGeometry(1, 1, 1, 16, 16, 16);
        //マテリアル
        const material = new THREE.MeshNormalMaterial({wireframe: false});
        //メッシュ
        const box = new THREE.Mesh(boxgeometry, material);
        scene.add(box);

        const spheregeometry = new THREE.SphereGeometry(1, 16, 16, 0, 2, 0, Math.PI);
        const sphreematerial = new THREE.MeshNormalMaterial({wireframe: true});
        const sphere = new THREE.Mesh(spheregeometry, sphreematerial);
        sphere.position.set(2, 0, 0);
        scene.add(sphere);

        const planegeometry = new THREE.PlaneGeometry(10, 10, 16, 16);
        const planematerial = new THREE.MeshNormalMaterial({wireframe: false});
        const plane = new THREE.Mesh(planegeometry, planematerial);
        plane.position.set(0, -0.5, -1);
        plane.rotation.x = -Math.PI / 2;
        scene.add(plane);

        const torusgeometry = new THREE.TorusGeometry(1, 0.5, 16, 16);
        const torusmaterial = new THREE.MeshNormalMaterial({wireframe: false});
        const torus = new THREE.Mesh(torusgeometry, torusmaterial);
        torus.position.set(-2, 0, 0);
        torus.rotation.x = Math.PI / 2;
        scene.add(torus);

        const buffergeometry = new THREE.BufferGeometry();
        const vertices = new Float32Array(9);
        vertices[0] = 0; // x
        vertices[1] = 0; // y
        vertices[2] = 0; // z

        vertices[3] = 0;
        vertices[4] = 1;
        vertices[5] = 0;

        vertices[6] = 1;
        vertices[7] = 0;
        vertices[8] = 0;

        console.log(vertices);
        buffergeometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const buffermaterial = new THREE.MeshBasicMaterial({wireframe: false});
        const buffermesh = new THREE.Mesh(buffergeometry, buffermaterial);
        buffermesh.position.set(0, 0, -2);
        buffermesh.rotation.set(0, Math.PI, 0);
        scene.add(buffermesh);


        const shelfgeometry = new THREE.BufferGeometry();
        const shelfvertices = new Float32Array([
            -1, 0, -1,
            1, 0, -1,
            -1, 0, 1,
            1, 0, 1,
        ]);
        shelfgeometry.setAttribute('position', new THREE.BufferAttribute(shelfvertices, 3));
        const shelfmaterial = new THREE.MeshNormalMaterial({wireframe: true});
        const shelfmesh = new THREE.Mesh(shelfgeometry, shelfmaterial);
        shelfmesh.position.set(0, 0.5, -2);
        scene.add(shelfmesh);


        const count = 50;
        const positionArray = new Float32Array(count * 3 * 3);
        for (let i = 0; i < count * 3 * 3; i++) {
            positionArray[i] = (Math.random() - 0.5) * 4; // -2 ~ 2
        }
        const shelfmaterial2 = new THREE.MeshNormalMaterial({wireframe: true});
        const shelfgeometry2 = new THREE.BufferGeometry();
        shelfgeometry2.setAttribute('position', new THREE.BufferAttribute(positionArray, 3));
        const positionAttribute = new THREE.BufferAttribute(positionArray, 3);
        shelfgeometry.setAttribute('position', positionAttribute);
        shelfmesh.position.set(0, 0.5, -2);
        scene.add(shelfmesh);






        //ライト
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
        scene.add(ambientLight);

        //マウス操作
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        window.addEventListener("resize", onWindowResize);

        const clock = new THREE.Clock();

        function animate() {
            const elapsedTime = clock.getElapsedTime();
            // console.log(elapsedTime);

            //オブジェクトの回転
            // sphere.rotation.x = elapsedTime;
            // plane.rotation.x = elapsedTime;
            // octahedron.rotation.x = elapsedTime;
            // torus.rotation.x = elapsedTime;

            // sphere.rotation.y = elapsedTime;
            // plane.rotation.y = elapsedTime;
            // octahedron.rotation.y = elapsedTime;

            // torus.rotation.y = elapsedTime;

            controls.update();

            //レンダリング
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        }

        //ブラウザのリサイズに対応
        function onWindowResize() {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }

        animate();

    }, []); // width, heightとは、useEffectの第二引数に指定した値が変更されたときに、useEffectの第一引数の関数を実行するという意味

    return (
        <div>
            <div className="globe">

            </div>
        </div>
    )

}
