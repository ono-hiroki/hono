import Head from 'next/head';
import {useEffect, useRef} from "react";
import {useInView} from "react-intersection-observer";
import styled from "@emotion/styled";

interface Props {
    inVieww: boolean;
}

const Section = styled.div<Props>`
  // transition: all 1s ease;
  // transform: ${(props) => props.inVieww ? "translateY(0)" : "translateY(50px)"};
  // opacity: ${(props) => (props.inVieww ? 1 : 0.5)};
`;

const Ugomemo312 = (props: any) => {
    const prop1 = useInView({
        threshold: 0,
    });

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

            <div className="wrapper">
                <Section
                    ref={textRandomAnime1.ref}
                    inVieww={textRandomAnime1.inView}
                >
                    <div
                        // @ts-ignore
                        className={['TextRandomAnime', textRandomAnime1.inView && 'appearRandomtext']}
                        ref={elm}
                    >aaテキストがバラバラに出現しますテキストがバラバラに出現しますテキストがバラバラに出現します</div>
                </Section>


                <br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓

                <p className="TextRandomAnime">スクロール後、テキストがバラバラに出現しますテキストがバラバラに出現しますテキストがバラバラに出現します</p>

            </div>

            <Section
                ref={prop1.ref}
                inVieww={prop1.inView}
            >
                <h2>{`Header inside viewport ${prop1.inView}.`}</h2>
                <p>
                    スクロールとするとヌルッと出てくるよ?！
                </p>
            </Section>
            <br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <style jsx global>{Style}</style>
        </>
    )
}

export default Ugomemo312;

const Style = `@charset "utf-8";
@charset "utf-8";

/*========= レイアウトのためのCSS ===============*/
p{
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
animation-delay: .5s;/* spanのついた2の倍数の文字列の変化を0.5秒遅らせる*/
}
.TextRandomAnime.appearRandomtext span:nth-child(3n+1) {
animation-delay: .15s;/* spanのついた3の倍数＋1の文字列の変化を0.15秒遅らせる*/
}
`
