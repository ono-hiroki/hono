// TODO 整理して完成させる
import React, {useEffect, useState} from "react";
import {HeadTag} from "../components/WebSite01/Head";
import SplashTag from "../components/WebSite01/Splash";
import Header from "../components/WebSite01/Header";
import {css, keyframes} from "@emotion/react";
import Lead from "../components/WebSite01/Lead";
import Menu from "../components/WebSite01/Menu";
import Contact from "../components/WebSite01/Contact";
import Blog from "../components/WebSite01/Blog";
import Footer from "../components/WebSite01/Footer";

const main = css`
    position: relative;/*#header-imgよりも配置を上にするためにrelativeをつける*/
    z-index: 3;/*#header-imgよりもz-indexの値を大きな数値にして上に表示*/
    background:#f8f9fa;
`

const WebSite01 = (props: any) => {

    const [isTimePassed, setIsTimePassed] = useState(false);
    const [isSecondTimePassed, setIsSecondTimePassed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTimePassed(true)
        }, 1200);
        setTimeout(() => {
            setIsSecondTimePassed(true)
        }, 2100);
    });

    return (
        <>
            <HeadTag/>
            {/*<SplashTag isTimePassed={isTimePassed}/>*/}
            <div id="wrapper">
                <Header isSecondTimePassed={isSecondTimePassed}/>
                {/*<div class="openbtn"><span></span><span></span><span></span></div>*/}
                {/*<nav id="g-nav">*/}
                {/*    <div id="g-nav-list">*/}
                {/*        <ul>*/}
                {/*            <li><a href="#"><span class="glowAnime">Beautiful Days</span></a></li>*/}
                {/*            <li class="blurTrigger"><a href="#">Top</a></li>*/}
                {/*            <li class="blurTrigger"><a href="#">About</a></li>*/}
                {/*            <li class="blurTrigger"><a href="#">Menu</a></li>*/}
                {/*            <li class="blurTrigger"><a href="#">Contact</a></li>*/}
                {/*            <li class="blurTrigger"><a href="#">Blog</a></li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</nav>*/}

                <main id="container" css={main}>
                    <Lead/>
                    <Menu/>
                    <Contact/>
                    <Blog/>
                    <Footer/>
                </main>

            </div>

            <style jsx>{globalStyles}</style>
        </>
    )
}

export default WebSite01

const globalStyles = `
    h1{
    font-family: 'Parisienne', cursive;
}
body {
    background: #e2a2b1;
    font-family: 'Noto Serif JP', serif;
    color: #555;
    font-size: 1rem;
    line-height: 1.85;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    word-wrap: break-word;
    letter-spacing: 0.2em;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
}

a {
    color: #555;
    text-decoration: none;
    outline: none;
}

img {
    width: 100%;
    height: auto;
    vertical-align: bottom;
}

* {
    box-sizing: border-box
}












#blog{
    margin:0 0 50px 0;
}
.blog-area{
    display: flex;
    justify-content: space-between;
    text-align: center;
    flex-wrap: wrap;
    overflow: hidden;
}

.blog-area article:nth-of-type(1){
    width:30%;
}

.blog-area .blog-block{
    width:68%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}

.blog-area .blog-block article{
     margin:0 0 3vh 0;
}

.blog-area .blog-block article:nth-of-type(1){
    width:42%;
    animation-delay: 0.5s;
}
.blog-area .blog-block article:nth-of-type(2){
    width:20%;
    animation-delay: 1.5s;
}
.blog-area .blog-block article:nth-of-type(3){
    width:32%;
    animation-delay: 1s;
}

.blog-area .blog-block article:nth-of-type(4){
    width:32%;
    animation-delay: .8s;
}
.blog-area .blog-block article:nth-of-type(5){
    width:20%;
    animation-delay: 1.8s;
}
.blog-area .blog-block article:nth-of-type(6){
    width:42%;
    animation-delay: 1.5s;
}

@media screen and (max-width:1300px) {
    .blog-area .blog-block article:nth-of-type(n+1){
        width:48%;
    }
}

@media screen and (max-width:820px) {
    .blog-area article:nth-of-type(1){
        width:50%;
        margin:0 auto 3vh auto;
    }

    .blog-area .blog-block article:nth-of-type(1){
         margin: 0 0 3vh 0;
    }

    .blog-area .blog-block{
            width:100%;
    }
}

@media screen and (max-width:768px){
    .blog-area .blog-block article:nth-of-type(n+1){
        animation-delay: .5s;
    }

    .blog-area article:nth-of-type(1){
        width:100%;
    }
}

@media screen and (max-width:450px){
.blog-area .blog-block article:nth-of-type(n+1) {
    width:100%;
    animation-delay: 0s!important;
    }
}


.blog-area h3{
    font-size:1rem;
    margin: 0 0 20px 0;
}

@media screen and (max-width:450px){

  .blog-area h3{
    font-size:0.9rem;
}

  .blog-area p{
  display: none;
    }
}

.blog-area time{
     font-size: 0.8rem;
}

.blog-area img{
    width: auto;
    height:32vh;
}

.blog-area article:nth-of-type(1) img{
    height:67vh;
}

.blog-area .blog-block article:nth-of-type(1) img{
    height:32vh;
}


@media screen and (max-width:820px) {
.blog-area article:nth-of-type(1) img{
    width:100%;
    height:auto;
}
.blog-area .blog-block article:nth-of-type(1) img{
    width:auto;
    height:32vh;
    }
}

@media screen and (max-width:450px){
.blog-area img,
.blog-area .blog-block article:nth-of-type(1) img{
    width:100%;
    height:auto;
}
}

.blog-area figure time{
    position: absolute;
    bottom:0;
    left:0;
    background:rgba(226,162,178,0.8);
    display: block;
    width:100%;
    padding: 10px;
    color: #fff;
}

.blog-area p{
     margin:0 0 20px 0;
    text-align: left;
    font-size: 0.9rem;
}

.blog-area span{
     border:1px solid rgba(255,255,255,0.7);
    display: inline-block;
    padding:5px 10px;
    text-align: center;
    font-size: 0.8rem;
    white-space: nowrap;
}

.bgDU,
.bgDU .mask{
    display: block;
    position:relative;/*背景色とテキストの基点となる位置を定義*/
    overflow: hidden;
}

.bgDU .mask::before{
    content:'';
    position: absolute;
    z-index: 2;
    left:0;
    top:0;
    opacity:0;/*透過0*/
    transition: .3s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
    transform: translateY(100%);
    background:#e2a2b2;/*背景色*/
    width:100%;
    height: 100%;    
}

.bgDU:hover .mask::before{/*hoverした時の変化*/
    opacity:1;/*透過なしに変化*/
    transform: translateY(0);
}

.bgDU .cap{/*画像の上のテキスト*/
    position: absolute;
    opacity:0;/*透過0*/
    transition: .5s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
    z-index:3;/*テキストを前面に出す*/
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);/*テキストの位置中央指定*/
    color: #fff;/*テキストの色を変えたい場合はここを修正*/
}

.bgDU:hover .cap{/*hoverした時の変化*/
    opacity:1;/*透過なしに変化*/
}

`
