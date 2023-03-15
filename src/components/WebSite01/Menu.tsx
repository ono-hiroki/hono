import React, {useEffect, useRef, useState} from "react";
import {css, keyframes} from "@emotion/react";
import {useInView} from "react-intersection-observer";

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

// TODO スライダーの実装

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

                <ul className="slider" css={slider}>
                    {Items.map((item, index) => {
                        return (
                            <li key={index}>
                                <section className="fadeInTrigger">
                                    <a href="#">
                                        <figure className="circle">
                                            <span className="mask">
                                                <img src={item.img} alt=""/>
                                            </span>
                                        </figure>
                                        <div className="menu-area">
                                            <h3>{item.title}</h3>
                                            <p>{item.price}</p>
                                        </div>
                                    </a>
                                </section>
                            </li>
                        );
                    })}
                </ul>
                <div className="menu-btn fadeInTrigger"><a href="#"
                                                           className="btn04 bordertop"><span>メニュー一覧を見る</span></a></div>



            </section>
        </>
    )
}

export default Menu;
