import Head from 'next/head';
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import {css} from "@emotion/react";
import {any, number} from "prop-types";

const Ugomemo510 = (props: any) => {
    const waveCanvas = useRef(null);


    let unit = 100, canvasList, info = {}, colorList;

    const init = () => {
        // @ts-ignore
        info.seconds = 0; info.t = 0;
        canvasList = [];
        colorList = [];
        // @ts-ignore
        canvasList = [document.getElementById("waveCanvas")];
        console.log(canvasList)
        colorList = ['#43c0e4'];
        // @ts-ignore
        for (let i = 0; i < canvasList.length; i++) {
            // @ts-ignore
            const canvas = canvasList[i];
            // @ts-ignore
            canvas.width = document.documentElement.clientWidth; //Canvasのwidthをウィンドウの幅に合わせる
            // @ts-ignore
            canvas.height = 200;//波の高さ
            // @ts-ignore
            canvas.contextCache = canvas.getContext("2d");

        }

        update();
    }

    const update = () => {
        for (let i = 0; i < canvasList.length; i++) {
            let canvas = canvasList[i];

            draw(canvas, colorList[i]);
        }

        info.seconds = info.seconds + 0.14;
        info.t = info.seconds * Math.PI;

        setTimeout(update,35);
    }

    const draw = (canvas: { contexCache: any; width: any; height: any; }, color: any) => {
        let context = canvas.contexCache;
        console.log(context);
        // context.clearRect(0, 0, canvas.width, canvas.height);
        drawWave(canvas, color[0], 1, 3, 0);
    }

    const drawWave = (canvas, color, alpha, zoom, delay) => {

        let context = canvas.contexCache;
        // TypeError: Cannot set properties of undefinedの修正すると以下
        context.fillStyle = color;
        context.globalAlpha = alpha;
        context.beginPath();
        drawSine(canvas,info.t / 0.5, zoom, delay);
        context.lineTo(canvas.width + 10, canvas.height);
        context.lineTo(0, canvas.height);
        context.closePath();
        context.fill();
    }

    const drawSine = (canvas, t, zoom, delay) => {
        let xAxis = Math.floor(canvas.height / 2);
        let yAxis = 0;
        let context = canvas.contexCache;
        let x = t;
        let y = Math.sin(x) / zoom;
        context.moveTo(yAxis, unit * y + xAxis);

        for (let i = yAxis; i <= canvas.width + 10; i += 10) {
            x = t + (-yAxis + i) / unit / zoom;
            y = Math.sin(x - delay) / zoom;
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
