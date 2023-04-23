import * as THREE from 'three'
import styled from 'styled-components';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';

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
        const scene = new THREE.Scene(); // シーンを作成
        const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000); // カメラを作成
        const renderer = new THREE.WebGLRenderer({alpha: false}); // レンダラーを作成
        renderer.setSize(width, height); // レンダラーのサイズを設定
        document.body.appendChild(renderer.domElement); // レンダラーをDOMに追加

        const texture = new THREE.TextureLoader().load('/earth.jpg'); // テクスチャーを読み込み

        // 直方体を作成
        const geometry = new THREE.BoxGeometry(0.1, 1); // ジオメトリを作成
        const material = new THREE.MeshBasicMaterial({map: texture}); // マテリアルを作成
        const cube = new THREE.Mesh(geometry, material); // メッシュを作成
        scene.add(cube); // シーンにメッシュを追加

        // カメラの位置を設定
        camera.position.set(0, 0, 10) // カメラの位置を設定

        // 並行光源
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
        directionalLight.position.set(1, 1, 1);
        scene.add(directionalLight);

        // ポイント光源
        pointLight.position.set(-5, 5, -5);
        scene.add(pointLight);

        // ポイント光源がどこにあるのかを特定する
        const pointLightHelper = new THREE.PointLightHelper(pointLight, 1);
        scene.add(pointLightHelper);

        // マウス操作ができるようにする
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true; // enableDamping は、マウス操作によるカメラの移動を滑らかにする
        controls.dampingFactor = 0.2; // dampingFactor は、移動の減衰率を指定する
        controls.enableZoom = true; // enableZoom は、カメラのズームを有効にする


        const animate = function () { // アニメーションを実行
            requestAnimationFrame(animate); // フレームごとに実行
            cube.rotation.x += 0.01; // メッシュを回転
            cube.rotation.y += 0.01; // メッシュを回転
            renderer.render(scene, camera); // レンダリング
        }
        animate(); // アニメーションを実行


        const geometry2 = new THREE.SphereGeometry(0.5, 60, 60);
        const material2 = new THREE.MeshPhysicalMaterial({map: texture});
        const sphere = new THREE.Mesh(geometry2, material2);
        renderer.setPixelRatio(window.devicePixelRatio);
        scene.add(sphere);
        sphere.position.x = 1;
        sphere.position.y = 1;
        sphere.position.z = 1;

        // ポイント光源を球の周りを巡回する
        function animate2() {
            pointLight.position.set(
                5 * Math.sin(Date.now() / 1000),
                5,
                5 * Math.cos(Date.now() / 1000)
            );

            requestAnimationFrame(animate2);
            renderer.render(scene, camera);
        }
        animate2();

        // ブラウザのリサイズに対応する
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });

    }, []); // width, heightとは、useEffectの第二引数に指定した値が変更されたときに、useEffectの第一引数の関数を実行するという意味

    return (
        <div>
            <div className="globe">

            </div>
        </div>
    )

}
