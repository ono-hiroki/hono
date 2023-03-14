import React, {useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {css, keyframes} from "@emotion/react";
import Image from 'next/image'
//TODO 文字のアニメーションを追加する
//TODO scrollのアニメーションを追加する
//TODO 画像のアニメーションを追加する

const headerArea = css`
 font-family:'Parisienne', cursive;
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    z-index: 2;
    color: #fff;
    text-align: center;
    
    h1{
    display: block;
    font-size: 6vw;
    font-weight: normal;
    line-height: 1;
    letter-spacing: 0;
    padding: 0 10px;
}
   
    p{
    font-size: 1.3vw;
    letter-spacing: 0.4em;
    margin: 0 0 20px 0;
}
   
    p br{
    display: none;
}

@media screen and (max-width: 960px) {
    h1{
        font-size:4rem;
    }
    
    p{
        font-size:0.8rem;
        whitewhite-space:no
    }
    
    br{
        display: block;
    }
}
`

const headerAreaP = css`
font-family:'Noto Serif JP', cursive;
`

const headerAreaH1 = css`
font-family:'Parisienne', cursive;
`

const headerImg = css`
  position: fixed;/*背景を固定するためfixedをかける*/
  z-index: 1;/*#container,#footerよりも下に配置するために数値を小さくする*/
    top: 0;/*topの位置がJSで変化*/
  /*以下画面で背景画像を表示させるための指定*/
    width: 100%;
  height:100vh;
  background: url(/webSite1/main.jpg) no-repeat top center;/*背景画像の設定*/
  background-size:cover;
  transform-origin:center;/*変化する基点を中心からに設定*/
`

const Header = () => {
    const [isTimePassed, setIsTimePassed] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsTimePassed(true)
        }, 1500);
    });

    const [ref, inView] = useInView({
        threshold: 0,
    });

    return (
        <header id="header">
            <div css={[headerArea]} ref={ref}>
                <p className="glowAnime" css={headerAreaP}>白金台にある<br/>癒しのエステサロン</p>
                <h1 className="glowAnime" css={headerAreaH1}>Beautiful Days</h1>
            </div>

            <div className="scrolldown2"><span>Scroll</span></div>
            <div id="header-img" css={[headerImg]}/>
        </header>
    )
}

export default Header;
