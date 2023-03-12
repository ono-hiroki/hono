import Head from 'next/head';
import {useRef} from "react";
import { useInView } from "react-intersection-observer";
import styled from "@emotion/styled";

const Ugomemo312 = (props: any) => {
    const fadeInUpTrigger = useRef(null);

    const { ref, inView } = useInView({
        threshold: 0,
    });

    return (
        <>
            <Head>
                <title>ugomemo3-1-1</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
            </Head>
            <div className="wrapper">
                <p>スクロールをすると動きます</p>
                <br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓<br/>↓
            </div>
            <Section ref={ref} inView={inView}>
                <h2>{`Header inside viewport ${inView}.`}</h2>
                <p>スクロールとするとヌルッと出てくるよ！</p>
            </Section>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <style jsx global>{Style}</style>
        </>
    )
}
interface Props {
    inView: boolean;
}

const Section = styled.section<Props>`
  transition: all 1s ease;
  transform: ${(props) =>
    props.inView ? "translateY(0)" : "translateY(50px)"};
  opacity: ${(props) => (props.inView ? 1 : 0.5)};
`;

export default Ugomemo312;

const Style = `
@charset "utf-8";

/*動きのきっかけの起点となるクラス名 はじめは非表示に*/
.fadeInUpTrigger,
.fadeInDownTrigger,
.fadeInUpTriggerOnce{
    opacity:0;
}

/*========= アニメーションの指定 ===============*/


/* アニメーションの回数を決めるCSS*/

.count2{  
animation-iteration-count: 2;/*この数字を必要回数分に変更*/
}

/* アニメーションスタートの遅延時間を決めるCSS*/

.delay-time{  
animation-delay: 0.5s;
}

/* アニメーション自体が変化する時間を決めるCSS*/

.change-time{  
animation-duration: 4.5s;/*この数字を変化させたい時間に変更*/
}

/*========= レイアウトのためのCSS ===============*/

.wrapper{
overflow: hidden;
}


.flex{
display:flex;
flex-wrap: wrap;
}

.box{
width: 220px;
padding: 20px;
margin:0 20px 20px 0;
background: #666;
color: #fff;
box-sizing:border-box;
}

a{
text-decoration: none;
display: block;
color: #fff;
}
`
