import React, {useEffect, useRef, useState} from "react";
import {css, keyframes} from "@emotion/react";
import {useInView} from "react-intersection-observer";

const inner = css`
    width:100%;
    margin:0 auto;
    padding:70px;
    
    @media screen and (max-width: 940px) {
        padding: 30px;
}
`
const zoomOutTrigger = css`
    opacity:0;
`
const zoomOutAnime = keyframes`
  from {
    transform: scale(1.2);
    opacity: 0;
  }

  to {
    transform:scale(1);
    opacity: 1;
  }
`
const zoomOut = css`
  animation-name: ${zoomOutAnime};
  animation-duration:0.5s;
  animation-fill-mode:forwards;
`

const lead = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top: 140px;
@media screen and (max-width: 768px) {
        flex-direction: column-reverse;
}
`
const leadImg = css`
    width: 46%;
    min-height: 400px;
    background: url("/webSite1/lead.jpg") no-repeat center;
    background-size: cover;
    
    @media screen and (max-width: 1060px) {
        width: 30%;
    }
    
    @media screen and (max-width: 768px) {
        width:100%;     
        min-height: 250px;
    }
}
`
const fadeInAnime = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`
const fadeIn = css`
animation-name: ${fadeInAnime};
animation-duration:2s;/*ゆっくり出現するため数値変更*/
animation-fill-mode:forwards;
opacity:0;
`
const leadArea = css`
    width: 52%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: row-reverse;
    @media screen and (max-width: 1060px) {
        width: 68%;
    }
    @media screen and (max-width: 768px) {
        width: 100%;
        margin: 0 0 140px 0;
        min-height: 20em;
        justify-content: center;
    }
    
    h2, p, .lead-btn a {
        -ms-writing-mode: tb-rl;
        -webkit-writing-mode: vertical-rl;
        writing-mode: vertical-rl;
        text-orientation: upright;
    }
    
    h2 {
        width: 28%;
        line-height: 2.5;
        font-size: 1.4rem;
    }
    
    p {
        width: 48%;
    padding: 50px 0 0 0;
    line-height: 2.8;
    }
    
    .lead-btn {
    width: 10%;
    position: relative;
    top: 240px;
}

@media screen and (max-width: 1300px) {
    h2 {
        line-height: 2;
    }

    p {
        line-height: 2.3;
    }
}
        
@media screen and (max-width: 768px) {
    .lead-btn {
        width: 100%;
        top: 50px;
        text-align: center;
    }

    .btn04 {
        width: 250px;
    }

     h2, p {
        width: auto;
    }

     h2 {
        margin: 0 0 0 20px;
        line-height: 2.2;
    }

     p {
        line-height: 2;
    }

     .lead-btn a {
        -ms-writing-mode: lr-tb;
        -webkit-writing-mode: horizontal-tb;
        writing-mode: horizontal-tb;
    }
}

@media screen and (max-width: 470px) {
    h2 {
        line-height: 1.8;
    }

    p {
        height: 23em;
    }

    _:-ms-lang(x)::-ms-backdrop, p {
        width: 8em;
    }

    p br {
        display: none;
    }
}

@media screen and (max-width: 350px) {
    h2 {
        line-height: 1.6;
    }

   　p {
        line-height: 1.8;
    }
}
`

//TODO leadBtnのアニメーションを追加する

const Header = () => {
    const {ref, inView} = useInView({
        threshold: 0,
    });
    console.log(inView)

    return (
        <article css={[lead, inner, zoomOutTrigger, inView && zoomOut]}>
            <div css={[leadImg, inView && fadeIn]}/>
            <div css={[leadArea, inView && fadeIn]} ref={ref} >
                <h2>白金台にある<br/>癒しの<br/>プライベート空間</h2>
                <p>エステサロン<br/>ビューティフルデイズは、<br/>がんばるあなたが<br/>ちょっと疲れた時に<br/>立ち寄れる<br/>ほっとする時間を<br/>つくります。</p>
                <div className="lead-btn"><a href="#" className="btn04 bordertop"><span>お店のご紹介</span></a></div>
            </div>
        </article>
    )
}

export default Header;
