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

                </main>

                {/*<footer id="footer" class="inner">*/}
                {/*    <dl>*/}
                {/*        <dt><span class="slide-in leftAnime"><span*/}
                {/*            class="slide-in_inner leftAnimeInner">白金台の癒しのエステサロン</span></span></dt>*/}
                {/*        <dd><span class="slide-in leftAnime"><span*/}
                {/*            class="slide-in_inner leftAnimeInner">Beautiful Days</span></span></dd>*/}
                {/*    </dl>*/}
                {/*    <div class="footer-list">*/}
                {/*        <div class="slide-in leftAnime">*/}
                {/*            <div class="slide-in_inner leftAnimeInner">*/}
                {/*                <ul>*/}
                {/*                    <li><a href="#">Top</a></li>*/}
                {/*                    <li><a href="#">About</a></li>*/}
                {/*                    <li><a href="#">Menu</a></li>*/}
                {/*                    <li><a href="#">Contact</a></li>*/}
                {/*                    <li><a href="#">Blog</a></li>*/}
                {/*                </ul>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <p id="page-top" class="hide-btn"><a href="#"><span></span></a></p>*/}
                {/*    <small><span class="slide-in leftAnime"><span class="slide-in_inner leftAnimeInner">&copy; Beautiful days</span></span></small>*/}
                {/*</footer>*/}
            </div>


            {/*<script src="https://code.jquery.com/jquery-3.4.1.min.js"*/}
            {/*        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>*/}
            {/*<script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>*/}
            {/*<script src="js/script.js"></script>*/}

            {/*</html>*/}
            {/*<style jsx global>{LayoutCss}</style>*/}
            {/*<style jsx global>{ResetCss}</style>*/}
            {/*<style jsx global>{PartsCss}</style>*/}
            <style jsx global>{globalStyles}</style>
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
`
