import Head from 'next/head';
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import {css} from "@emotion/react";
import {any, number} from "prop-types";

const Ugomemo510 = (props: any) => {
    const waveCanvas = useRef(null);

    // @ts-ignore
    let unit = 100, canvasList: (HTMLElement | null)[], info = {
        seconds: any,
        t: any
    }, colorList: string[][];

    const init = () => {
        info.seconds = 0;
        info.t = 0;
        canvasList = [];
        colorList = [];
        // canvas1個めの色指定
        canvasList.push(document.getElementById("waveCanvas"));
        colorList.push(['#43c0e4']);

        // 各キャンバスの初期化
        for (let canvasIndex in canvasList) {
            let canvas = canvasList[canvasIndex];
            // @ts-ignore
            canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
            // @ts-ignore
            canvas.height = 200;//波の高さ
            // @ts-ignore
            canvas.contextCache = canvas.getContext("2d");
        }
        // 共通の更新処理呼び出し
        update();
    }

    const update = () => {
        for (let canvasIndex in canvasList) {
            let canvas = canvasList[canvasIndex];
            // 各キャンバスの描画
            draw(canvas, colorList[canvasIndex]);
        }
        // @ts-ignore
        info.seconds = info.seconds + .014;
        // @ts-ignore
        info.t = info.seconds * Math.PI;
        // 自身の再起呼び出し
        setTimeout(update, 35);
    }

    const draw = (canvas: HTMLElement | null, color: any) => {

        // @ts-ignore
        let context = canvas.contextCache;
        // @ts-ignore
        context.clearRect(0, 0, canvas.width, canvas.height);

        //波を描画 drawWave(canvas, color[数字（波の数を0から数えて指定）], 透過, 波の幅のzoom,波の開始位置の遅れ )
        drawWave(canvas, color[0], 1, 3, 0);
    }

    const drawWave = (canvas: HTMLElement | null , color: any, alpha: number, zoom: number, delay: number) => {
        // @ts-ignore
        let context = canvas.contextCache;
        context.fillStyle = color;//塗りの色
        context.globalAlpha = alpha;
        context.beginPath(); //パスの開始
        // @ts-ignore
        drawSine(canvas, info.t / 0.5, zoom, delay);
        // @ts-ignore
        context.lineTo(canvas.width + 10, canvas.height);
        // @ts-ignore
        context.lineTo(0, canvas.height);
        context.closePath()
        context.fill();
    }

    const drawSine = (canvas: HTMLElement | null, t: number, zoom: number, delay: number) => {
        // @ts-ignore
        let xAxis = Math.floor(canvas.height / 2);
        let yAxis = 0;
        // @ts-ignore
        let context = canvas.contextCache;
        let x = t;
        let y = Math.sin(x) / zoom;
        context.moveTo(yAxis, unit * y + xAxis); //スタート位置にパスを置く


        // @ts-ignore
        for (let i = yAxis; i <= canvas.width + 10; i += 10) {
            x = t + (-yAxis + i) / unit / zoom;
            y = Math.sin(x - delay) / 3;
            context.lineTo(i, unit * y + xAxis);
        }
    }

    useEffect(() => {
        init();
    }, []);




    return (
        <>
            <Head>
                <title>ugomemo3-1-1</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
            </Head>

            <div id="wrapper">
                <p>※参照　<a href="https://jsfiddle.net/39we73t1/" target="_blank">https://jsfiddle.net/39we73t1/</a></p>
                <canvas id="waveCanvas" ref={waveCanvas}/>
            </div>

            {/*<div>*/}
            {/*    <div*/}
            {/*        ref={textRandomAnime1.ref}>*/}
            {/*        /!*@ts-ignore*!/*/}
            {/*        <p ref={elm} css={[p,textRandomAnime1.inView && roll]}>*/}
            {/*            テキストがバラバラに出現しますテキストがバラバラに出現しますテキストがバラバラに出現します*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓*/}

            <style jsx global>{Style}</style>
        </>
    )
}
export default Ugomemo510;

const Style = `
 #wrapper{
    width:100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
}
 
 canvas{
    position: absolute;
    bottom: 0;
    left:0;
    width: 100%;
}
`
