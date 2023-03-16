import React, {useEffect, useRef, useState} from "react";
import {css, keyframes} from "@emotion/react";
import {useInView} from "react-intersection-observer";
import styles from "../../styles/Home.module.css";
import BlogArticle from "./BlogArticle";

// TODO css in js

const contact = css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
`
const inner = css`
    width:100%;
    margin:0 auto;
    padding:70px;

@media screen and (max-width:940px) {
    padding:30px;
}
`
const contactImg = css`
    width:70%;
    min-height: 300px;
    background:url("/webSite1/contact.jpg") no-repeat center;
    background-size: cover;
    
    @media screen and (max-width:1190px) {
    width:60%;
    }
    
    @media screen and (max-width:768px) {
    width:48%;
    }

    @media screen and (max-width:600px) {
        width:100%;
        margin:0 0 50px 0;
    }
`
const contactArea = css`
    width:25%;
    text-align: center;
    
    @media screen and (max-width:1190px) {
    width:35%;
    }
    @media screen and (max-width:768px) {
    width:48%;
    } 
    @media screen and (max-width:600px) {
    width:100%;
    }
    h2 {
     font-size:1.3rem;
    margin:0 0 10px 0;
    }
    dt{
     font-size:1.2rem;
    margin:0 0 10px 0;
    }
    dd{
    font-size: 0.8rem;
    margin:0 0 30px 0;
}
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

const blogBlock = css`
    width:68%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    article{
     margin:0 0 3vh 0;
    }
    
    article:nth-of-type(1){
    width:42%;
    animation-delay: 0.5s;
    }
    
    article:nth-of-type(2){
    width:20%;
    animation-delay: 1.5s;
    }
    
    article:nth-of-type(3){
    width:32%;
    animation-delay: 1s;
    }

    article:nth-of-type(4){
    width:32%;
    animation-delay: .8s;
    }

    article:nth-of-type(5){
    width:20%;
    animation-delay: 1.8s;
    }
    
    article:nth-of-type(6){
    width:42%;
    animation-delay: 1.5s;
    }
`

const ITEMS = [
    {
        img: "/webSite1/blog_02.jpg",
        dateTime: "2021-3-4",
        dateTimeString: "2021.3.4",
        title: "新春のご挨拶",
    },
    {
        img: "/webSite1/blog_04.jpg",
        dateTime: "2021-3-4",
        dateTimeString: "2021.3.4",
        title: "本日のお客様！",
    },
    {
        img: "/webSite1/blog_03.jpg",
        dateTime: "2021-1-4",
        dateTimeString: "2021.1.4",
        title: "クリスマスイブの準備はおすみですか",
    },
    {
        img: "/webSite1/blog_05.jpg",
        dateTime: "2021-1-4",
        dateTimeString: "2021.1.4",
        title: "美容に良い食べ物のご紹介",
    },
    {
        img: "/webSite1/blog_06.jpg",
        dateTime: "2021-3-4",
        dateTimeString: "2021.3.4",
        title: "夏のイチオシコスメ",
    },
    {
        img: "/webSite1/blog_07.jpg",
        dateTime: "2021-3-4",
        dateTimeString: "2021.3.4",
        title: "ブログはじめました",
    }
    ]

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

const Contact = () => {
    const {ref, inView} = useInView({
        threshold: 0,
    });

    return (
        <>
            <article id="blog" className="inner" css={inner}>
                <h2><span className="slide-in leftAnime" css={[slideIn]}>
                    <span className="slide-in_inner leftAnimeInner" css={[slideInInner]}>Blog</span>
                </span></h2>


                <div className="blog-area">
                    <article className="fadeInTrigger">
                        <a href="#" className="bgDU">
                            <figure className="mask"><img src="/webSite1/blog_01.jpg" alt=""/>
                                <time dateTime="2021-03-04">2021.3.4</time>
                            </figure>
                            <div className="cap">
                                <time dateTime="2021-08-09">2021.3.4</time>
                                <h3>お得なコスメキャンペーンを実施中！</h3>
                                <p>エステサロンビューティフルデイズの<br/>春のコスメキャンペーンがスタートしました。...</p>
                                <span>Read More</span>
                            </div>
                        </a>
                    </article>

                    <div className="blog-block">
                        {ITEMS.map((item, index) => {
                            return (
                                <BlogArticle
                                    key={index}
                                    img={item.img}
                                    dateTime={item.dateTime}
                                    dateTimeString={item.dateTimeString}
                                    title={item.title}
                                />
                            );
                        })}
                    </div>

                </div>
            </article>
            {/*<style jsx global>{Style}</style>*/}
        </>
    )
}

export default Contact;

const Style = `

`
