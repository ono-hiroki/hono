import React, {useEffect, useRef, useState} from "react";
import {css, keyframes} from "@emotion/react";
import {useInView} from "react-intersection-observer";
import {Slider} from "./Slider";


const menu = css`
    padding: 70px 0;
    
    section {
    background: #fff;
    margin: 0 0 10px 0;
}   
    section h3 {
    font-size: 0.9rem;
    margin: 0 0 10px 0;
}
    #menu section p {
    font-size: 0.8rem;
}
    .menu-area {
    padding: 20px;
    box-shadow: 5px 0 10px #ccc;
}
    h2 {
    font-family: 'Parisienne', cursive;
    font-size: 4rem;
    text-align: center;
    margin: 0 0 50px 0;
    font-weight: normal;
    color: #e2a2b1;
}
    @media screen and (max-width: 768px) {
     h2 {
        font-size: 3rem;
    }

}
`

const leftAnime = css`
    opacity: 0;
`
const slideTextX100 = keyframes`
  from {
    transform: translateX(-100%); /*要素を左の枠外に移動*/
        opacity: 0;
  }

  to {
    transform: translateX(0);/*要素を元の位置に移動*/
    opacity: 1;
  }
`
const slideAnimeLeftRight = css`
    animation-name:${slideTextX100};
    animation-duration:0.8s;
    animation-fill-mode:forwards;
    opacity: 0;
`
const slideTextX_100 = keyframes`
  from {
    transform: translateX(100%);/*要素を右の枠外に移動*/
    opacity: 0;
  }

  to {
    transform: translateX(0);/*要素を元の位置に移動*/
    opacity: 1;
  }
`
const slideAnimeRightLeft = css`
    animation-name:${slideTextX_100};
    animation-duration:0.8s;
    animation-fill-mode:forwards;
    opacity: 0;
`
const slideIn = css`
    overflow: hidden;
    display: inline-block;
    padding: 0 10px;
`
const slideInInner = css`
    display: inline-block;
`

const Items = [
    {
        img: "/webSite1/01.jpg",
        title: "ハンドケア / フットケア",
        price: "3,000 yen～",
    },
    {
        img: "/webSite1/02.jpg",
        title: "ウェディングメニュー",
        price: "12,000 yen～",
    },
    {
        img: "/webSite1/03.jpg",
        title: "ボディトリートメント",
        price: "8,000 yen～",
    },
    {
        img: "/webSite1/04.jpg",
        title: "フェイシャル",
        price: "5,000 yen～",
    },
    {
        img: "/webSite1/05.jpg",
        title: "メイク / セット",
        price: "3,000 yen～",
    },
]

const slider = css`
   width:94%;
   margin:0 auto;
   
   img {
    width:100%;/*スライダー内の画像を横幅100%に*/
    height:auto;
}
    
`

const  menuBtn = css`
    text-align: center;
    margin: 50px 0 0 0;
`

const btn04 = css`
    /*線の基点とするためrelativeを指定*/
    position: relative;
    /*ボタンの形状*/
    display:inline-block;
    padding:10px 30px;
    color:#333;
    border:1px solid #ccc;
    text-decoration: none;
    outline: none;
    /*はみ出す背景色を隠す*/
    overflow: hidden;
    
    &:hover {
    color:#fff;
    border-color: transparent;
    /*色の変化を遅らせる*/
    transition-delay: .6s;
    
    span{
    display: block;
    z-index: 2;
}

}
`

const borderTop = css`
span::before,
span::after {
    content: '';
    position: absolute;
    width:1px;
    height: 0;
    background: #e2a2b1;
    transition: all .3s;
    }
    span::before {
    left:0;
    top:0;
}
    span::after {
    right:0;
    top:0;
}
    &:hover span::before,
    &:hover span::after {
    height: 100%;
}

&::before{
    content: '';
    position: absolute;
    left: 0;
    top:0;
    z-index: -1;
    width: 100%;
    height: 0;
    background:#e2a2b1;
    transition: all .3s;
}

&:hover::before{
    height: 100%;
    transition-delay: .4s;
}

`

const Menu = () => {
    const {ref, inView} = useInView({
        threshold: 0,
    });

    const fadein = useInView({
        threshold: 0,
    })

    return (
        <>
            <section id="menu" css={menu} ref={ref}>
                <h2>
                    <span css={[slideIn, inView && slideAnimeLeftRight]}>
                        <span css={[slideInInner, inView && slideAnimeRightLeft]}>Menu</span>
                    </span>
                </h2>
                <Slider/>
                <div className="fadeInTrigger" css={menuBtn}>
                    <a href="#" className="btn04 bordertop" css={[btn04, borderTop]}><span>メニュー一覧を見る</span></a>
                </div>


            </section>
        </>
    )
}

export default Menu;
