// TODO 整理して完成させる
import React, {useEffect, useState} from "react";
import {HeadTag} from "../components/WebSite01/Head";
import SplashTag from "../components/WebSite01/Splash";
import Header from "../components/WebSite01/Header";
import {css, keyframes} from "@emotion/react";
import Lead from "../components/WebSite01/Lead";
import Menu from "../components/WebSite01/Menu";

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



                        {/*<section id="contact" class="inner">*/}
                        {/*    <div class="contact-img fadeInTrigger"></div>*/}
                        {/*    <div class="contact-area fadeInTrigger">*/}
                        {/*        <h2>ご予約方法</h2>*/}
                        {/*        <dl>*/}
                        {/*            <dt><a href="tel:03-1234-5678">TEL 03-1234-5678</a></dt>*/}
                        {/*            <dd>（営業時間：10:00-20:00）</dd>*/}
                        {/*        </dl>*/}
                        {/*        <div class="contact-btn"><a href="#" class="btn04 bordertop"><span>お問い合わせ</span></a></div>*/}

                        {/*    </div>*/}
                        {/*</section>*/}

                        {/*<article id="blog" class="inner">*/}
                        {/*    <h2><span class="slide-in leftAnime"><span*/}
                        {/*        class="slide-in_inner leftAnimeInner">Blog</span></span></h2>*/}
                        {/*    <div class="blog-area">*/}
                        {/*        <article class="fadeInTrigger"><a href="#" class="bgDU">*/}
                        {/*            <figure class="mask"><img src="img/blog_01.jpg" alt=""/>*/}
                        {/*                <time datetime="2021-03-04">2021.3.4</time>*/}
                        {/*            </figure>*/}
                        {/*            <div class="cap">*/}
                        {/*                <time datetime="2021-08-09">2021.3.4</time>*/}
                        {/*                <h3>お得なコスメキャンペーンを実施中！</h3>*/}
                        {/*                <p>エステサロンビューティフルデイズの<br/>春のコスメキャンペーンがスタートしました。...</p>*/}
                        {/*                <span>Read More</span>*/}

                        {/*            </div>*/}
                        {/*        </a></article>*/}
                        {/*        <div class="blog-block">*/}
                        {/*            <article class="fadeInTrigger"><a href="#" class="bgDU">*/}
                        {/*                <figure class="mask"><img src="img/blog_02.jpg" alt=""/>*/}
                        {/*                    <time datetime="2021-01-04">2021.1.4</time>*/}
                        {/*                </figure>*/}
                        {/*                <div class="cap">*/}
                        {/*                    <h3>新春のご挨拶</h3>*/}
                        {/*                    <span>Read More</span>*/}

                        {/*                </div>*/}
                        {/*            </a></article>*/}
                        {/*            <article class="fadeInTrigger"><a href="#" class="bgDU">*/}
                        {/*                <figure class="mask"><img src="img/blog_04.jpg" alt=""/>*/}
                        {/*                    <time datetime="2020-12-25">2020.12.25</time>*/}
                        {/*                </figure>*/}
                        {/*                <div class="cap">*/}
                        {/*                    <h3>本日のお客様</h3>*/}
                        {/*                    <span>Read More</span>*/}

                        {/*                </div>*/}
                        {/*            </a></article>*/}
                        {/*            <article class="fadeInTrigger"><a href="#" class="bgDU">*/}
                        {/*                <figure class="mask"><img src="img/blog_03.jpg" alt=""/>*/}
                        {/*                    <time datetime="2020-12-24">2020.12.24</time>*/}
                        {/*                </figure>*/}
                        {/*                <div class="cap">*/}
                        {/*                    <h3>クリスマスイブの準備はおすみですか？</h3>*/}
                        {/*                    <span>Read More</span>*/}

                        {/*                </div>*/}
                        {/*            </a></article>*/}
                        {/*            <article class="fadeInTrigger"><a href="#" class="bgDU">*/}
                        {/*                <figure class="mask"><img src="img/blog_05.jpg" alt=""/>*/}
                        {/*                    <time datetime="2020-11-09">2020.11.09</time>*/}
                        {/*                </figure>*/}
                        {/*                <div class="cap">*/}
                        {/*                    <h3>美容に良い食べ物のご紹介！</h3>*/}
                        {/*                    <span>Read More</span>*/}

                        {/*                </div>*/}
                        {/*            </a></article>*/}
                        {/*            <article class="fadeInTrigger"><a href="#" class="bgDU">*/}
                        {/*                <figure class="mask"><img src="img/blog_06.jpg" alt=""/>*/}
                        {/*                    <time datetime="2020-08-09">2020.8.9</time>*/}
                        {/*                </figure>*/}
                        {/*                <div class="cap">*/}
                        {/*                    <h3>夏のイチオシコスメ！</h3>*/}
                        {/*                    <span>Read More</span>*/}

                        {/*                </div>*/}
                        {/*            </a></article>*/}
                        {/*            <article class="fadeInTrigger"><a href="#" class="bgDU">*/}
                        {/*                <figure class="mask"><img src="img/blog_07.jpg" alt=""/>*/}
                        {/*                    <time datetime="2020-07-07">2020.7.7</time>*/}
                        {/*                </figure>*/}
                        {/*                <div class="cap">*/}
                        {/*                    <h3>ブログはじめました</h3>*/}
                        {/*                    <span>Read More</span>*/}

                        {/*                </div>*/}
                        {/*            </a></article>*/}

                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*</article>*/}
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
