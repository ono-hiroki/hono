import Head from 'next/head';
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import {css, keyframes} from "@emotion/react";

const TextRandomAnime = css`
  opacity:0;
  text-align: center;
  padding:50px 0;
  font-size:1.3rem;
  letter-spacing: 0.2em;
`
const text_randomanime_on = keyframes`
0% {
    opacity:0;
}
100% {
    opacity:1;
}
`

const appearRandomtext = css`
opacity:1;
span {
    animation:${text_randomanime_on} 2s ease-out forwards;
}
span:nth-of-type(2n) {
    animation-delay: .5s;
}
span:nth-of-type(3n+1) {
    animation-delay: .25s;
}
`

const text = css`
padding: 32px; 
background-color: 
hotpink; 
font-size: 24px; 
border-radius: 4px; 
&:hover {color: red;}
`


const Ugomemo81 = (props: any) => {
    const textRandomAnime1 = useInView({
        threshold: 0,
    });
    const elm = useRef(null);
    useEffect(() => {
        if (elm.current) {
            // @ts-ignore
            const elmText = elm.current.textContent;
            // @ts-ignore
            elm.current.textContent = "";
            for (let i = 0; i < elmText.length; i++) {
                const span = document.createElement("span");
                span.textContent = elmText[i];
                // @ts-ignore
                elm.current.appendChild(span);
            }
        }
    }, []);

    return (
        <>
            <Head>
                <title>ugomemo3-1-1</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
            </Head>
            <div
                // @ts-ignore
                css={text}>
                Hover to change color.
            </div>

            <div className="wrapper">
                <div
                    ref={textRandomAnime1.ref}
                    // @ts-ignore
                    // inview={textRandomAnime1.inView}
                >
                    <div
                        // @ts-ignore
                        // className={['TextRandomAnime ', textRandomAnime1.inView && ' appearRandomtext']}
                        css={[TextRandomAnime, textRandomAnime1.inView && appearRandomtext ]}
                        ref={elm}
                    >テキストがバラバラに出現しますテキストがバラバラに出現しますテキストがバラバラに出現します
                    </div>
                </div>
            </div>

            <br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓
            <style jsx>{Style}</style>
        </>
    )
}
export default Ugomemo81;

const Style = `@charset "utf-8";
@charset "utf-8";

/*========= レイアウトのためのCSS ===============*/
div{
text-align: center;
padding:50px 0;
font-size:1.3rem;
letter-spacing: 0.2em;
}

/*==================================================
ランダムにテキスト出現する
===================================*/
.TextRandomAnime span{
opacity: 0;
}
.TextRandomAnime.appearRandomtext span{ 
animation:text_randomanime_on .5s ease-out forwards;
}

/*アニメーションで透過を0から1に変化させる*/
@keyframes text_randomanime_on {
0% {opacity:0;}
100% {opacity:1;}
}

.TextRandomAnime.appearRandomtext span:nth-child(2n) {
animation-delay: .5s;
}
.TextRandomAnime.appearRandomtext span:nth-child(3n+1) {
animation-delay: .15s;
}
`
