// TODO 整理して完成させる
import Head from 'next/head'
import styles from 'src/styles/Home.module.css'
import {Footer} from "src/components/Footer"
import {Main} from "src/components/Main";
import {Header} from "src/components/Header";
import React from "react";

const WebSite01 = (props: any) => {

    return (
        <div className={styles.container}>
            <html lang="ja">
            <Head>
                {/*<meta charset="utf-8">*/}
                <title>1-1 女性向けサイト</title>
                {/*<meta name="description" content="書籍「動くWebデザインアイディア帳」のサンプルサイトです">*/}
                {/*    <meta name="robots" content="noindex,nofollow">*/}
                {/*        <meta name="keywords" content="">*/}
                {/*            <meta name="viewport" content="width=device-width,initial-scale=1.0">*/}

                <link
                    href="https://fonts.googleapis.com/css?family=Noto+Serif+JP%7CParisienne&display=swap"
                    rel="stylesheet"/>


                {/*    <link rel="stylesheet" type="text/css" href="css/reset.css">*/}
                {/*        <link rel="stylesheet" type="text/css" href="css/parts.css">*/}
                {/*            <link rel="stylesheet" type="text/css" href="css/layout.css">*/}
            </Head>
            <body>
            <div id="splash">
                <div id="splash-logo">
                    <p><span class="slide-in slideAnimeLeftRight"><span class="slide-in_inner slideAnimeRightLeft">Beautiful Days</span></span>
                    </p>
                </div>
            </div>
            <div class="splashbg1"></div>
            <div class="splashbg2"></div>

            <div id="wrapper">
                <header id="header">
                    <div class="header-area">
                        <p class="glowAnime">白金台にある<br/>癒しのエステサロン</p>
                        <h1 class="glowAnime">Beautiful Days</h1>

                    </div>
                    <div class="scrolldown2"><span>Scroll</span></div>
                    <div id="header-img"></div>
                </header>

                <div class="openbtn"><span></span><span></span><span></span></div>
                <nav id="g-nav">
                    <div id="g-nav-list">
                        <ul>
                            <li><a href="#"><span class="glowAnime">Beautiful Days</span></a></li>
                            <li class="blurTrigger"><a href="#">Top</a></li>
                            <li class="blurTrigger"><a href="#">About</a></li>
                            <li class="blurTrigger"><a href="#">Menu</a></li>
                            <li class="blurTrigger"><a href="#">Contact</a></li>
                            <li class="blurTrigger"><a href="#">Blog</a></li>
                        </ul>
                    </div>
                </nav>

                <main id="container">
                    <article id="lead" class="inner zoomOutTrigger">
                        <div class="lead-img fadeInTrigger"></div>
                        <div class="lead-area fadeInTrigger">
                            <h2>白金台にある<br/>癒しの<br/>プライベート空間</h2>
                            <p>エステサロン<br/>ビューティフルデイズは、<br/>がんばるあなたが<br/>ちょっと疲れた時に<br/>立ち寄れる<br/>ほっとする時間を<br/>つくります。</p>
                            <div class="lead-btn"><a href="#" class="btn04 bordertop"><span>お店のご紹介</span></a></div>
                        </div>
                    </article>

                    <section id="menu">
                        <h2><span class="slide-in leftAnime"><span
                            class="slide-in_inner leftAnimeInner">Menu</span></span></h2>
                        <ul class="slider">
                            <li>
                                <section class="fadeInTrigger"><a href="#">
                                    <figure class="circle"><span class="mask"><img src="img/01.jpg" alt=""/></span>
                                    </figure>
                                    <div class="menu-area">
                                        <h3>ハンドケア / フットケア</h3>
                                        <p>3,000 yen～</p>
                                    </div>
                                </a></section>
                            </li>
                            <li>
                                <section class="fadeInTrigger"><a href="#">
                                    <figure class="circle"><span class="mask"><img src="img/02.jpg" alt=""/></span>
                                    </figure>
                                    <div class="menu-area">
                                        <h3>ウェディングメニュー</h3>
                                        <p>12,000 yen～</p>
                                    </div>
                                </a></section>
                            </li>
                            <li>
                                <section class="fadeInTrigger"><a href="#">
                                    <figure class="circle"><span class="mask"><img src="img/03.jpg" alt=""/></span>
                                    </figure>
                                    <div class="menu-area">
                                        <h3>ボディトリートメント</h3>
                                        <p>8,000 yen～</p>
                                    </div>
                                </a></section>
                            </li>
                            <li>
                                <section class="fadeInTrigger"><a href="#">
                                    <figure class="circle"><span class="mask"><img src="img/04.jpg" alt=""/></span>
                                    </figure>
                                    <div class="menu-area">
                                        <h3>フェイシャル</h3>
                                        <p>5,000 yen～</p>
                                    </div>
                                </a></section>
                            </li>
                            <li>
                                <section class="fadeInTrigger"><a href="#">
                                    <figure class="circle"><span class="mask"><img src="img/05.jpg" alt=""/></span>
                                    </figure>
                                    <div class="menu-area">
                                        <h3>メイク / セット</h3>
                                        <p>3,000 yen～</p>
                                    </div>
                                </a></section>
                            </li>

                        </ul>
                        <div class="menu-btn fadeInTrigger"><a href="#"
                                                               class="btn04 bordertop"><span>メニュー一覧を見る</span></a></div>

                    </section>

                    <section id="contact" class="inner">
                        <div class="contact-img fadeInTrigger"></div>
                        <div class="contact-area fadeInTrigger">
                            <h2>ご予約方法</h2>
                            <dl>
                                <dt><a href="tel:03-1234-5678">TEL 03-1234-5678</a></dt>
                                <dd>（営業時間：10:00-20:00）</dd>
                            </dl>
                            <div class="contact-btn"><a href="#" class="btn04 bordertop"><span>お問い合わせ</span></a></div>

                        </div>
                    </section>

                    <article id="blog" class="inner">
                        <h2><span class="slide-in leftAnime"><span
                            class="slide-in_inner leftAnimeInner">Blog</span></span></h2>
                        <div class="blog-area">
                            <article class="fadeInTrigger"><a href="#" class="bgDU">
                                <figure class="mask"><img src="img/blog_01.jpg" alt=""/>
                                    <time datetime="2021-03-04">2021.3.4</time>
                                </figure>
                                <div class="cap">
                                    <time datetime="2021-08-09">2021.3.4</time>
                                    <h3>お得なコスメキャンペーンを実施中！</h3>
                                    <p>エステサロンビューティフルデイズの<br/>春のコスメキャンペーンがスタートしました。...</p>
                                    <span>Read More</span>

                                </div>
                            </a></article>
                            <div class="blog-block">
                                <article class="fadeInTrigger"><a href="#" class="bgDU">
                                    <figure class="mask"><img src="img/blog_02.jpg" alt=""/>
                                        <time datetime="2021-01-04">2021.1.4</time>
                                    </figure>
                                    <div class="cap">
                                        <h3>新春のご挨拶</h3>
                                        <span>Read More</span>

                                    </div>
                                </a></article>
                                <article class="fadeInTrigger"><a href="#" class="bgDU">
                                    <figure class="mask"><img src="img/blog_04.jpg" alt=""/>
                                        <time datetime="2020-12-25">2020.12.25</time>
                                    </figure>
                                    <div class="cap">
                                        <h3>本日のお客様</h3>
                                        <span>Read More</span>

                                    </div>
                                </a></article>
                                <article class="fadeInTrigger"><a href="#" class="bgDU">
                                    <figure class="mask"><img src="img/blog_03.jpg" alt=""/>
                                        <time datetime="2020-12-24">2020.12.24</time>
                                    </figure>
                                    <div class="cap">
                                        <h3>クリスマスイブの準備はおすみですか？</h3>
                                        <span>Read More</span>

                                    </div>
                                </a></article>
                                <article class="fadeInTrigger"><a href="#" class="bgDU">
                                    <figure class="mask"><img src="img/blog_05.jpg" alt=""/>
                                        <time datetime="2020-11-09">2020.11.09</time>
                                    </figure>
                                    <div class="cap">
                                        <h3>美容に良い食べ物のご紹介！</h3>
                                        <span>Read More</span>

                                    </div>
                                </a></article>
                                <article class="fadeInTrigger"><a href="#" class="bgDU">
                                    <figure class="mask"><img src="img/blog_06.jpg" alt=""/>
                                        <time datetime="2020-08-09">2020.8.9</time>
                                    </figure>
                                    <div class="cap">
                                        <h3>夏のイチオシコスメ！</h3>
                                        <span>Read More</span>

                                    </div>
                                </a></article>
                                <article class="fadeInTrigger"><a href="#" class="bgDU">
                                    <figure class="mask"><img src="img/blog_07.jpg" alt=""/>
                                        <time datetime="2020-07-07">2020.7.7</time>
                                    </figure>
                                    <div class="cap">
                                        <h3>ブログはじめました</h3>
                                        <span>Read More</span>

                                    </div>
                                </a></article>

                            </div>

                        </div>
                    </article>
                </main>

                <footer id="footer" class="inner">
                    <dl>
                        <dt><span class="slide-in leftAnime"><span
                            class="slide-in_inner leftAnimeInner">白金台の癒しのエステサロン</span></span></dt>
                        <dd><span class="slide-in leftAnime"><span
                            class="slide-in_inner leftAnimeInner">Beautiful Days</span></span></dd>
                    </dl>
                    <div class="footer-list">
                        <div class="slide-in leftAnime">
                            <div class="slide-in_inner leftAnimeInner">
                                <ul>
                                    <li><a href="#">Top</a></li>
                                    <li><a href="#">About</a></li>
                                    <li><a href="#">Menu</a></li>
                                    <li><a href="#">Contact</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <p id="page-top" class="hide-btn"><a href="#"><span></span></a></p>
                    <small><span class="slide-in leftAnime"><span class="slide-in_inner leftAnimeInner">&copy; Beautiful days</span></span></small>
                </footer>
            </div>


            <script src="https://code.jquery.com/jquery-3.4.1.min.js"
                    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            <script src="js/script.js"></script>
            </body>
            </html>
            <style jsx global>{LayoutCss}</style>
            <style jsx global>{ResetCss}</style>
            <style jsx global>{PartsCss}</style>
        </div>
    )
}

export default WebSite01

const LayoutCss =`
@charset "utf-8";
/* レイアウトのためのCSS */
body{
    background:#e2a2b1;
    font-family: 'Noto Serif JP', serif;
color: #555;
font-size:1rem;
line-height:1.85;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
-webkit-text-size-adjust: 100%; 
word-wrap: break-word;
    letter-spacing: 0.2em;
}

body.appear{
    background:#f8f9fa;
}


ul{
margin:0;
padding: 0;
list-style: none;
}

a{
color: #555;
text-decoration: none;
    outline: none;
}

img{
    width:100%;
    height: auto;
    vertical-align: bottom;
}

*{
    box-sizing: border-box
}

/* font-family */

h1,
#g-nav-list li:nth-child(1),
#menu h2,
#blog h2,
#footer dl dd,
#splash-logo{
    font-family:'Parisienne', cursive;
}

/* heading */
#menu h2,
#blog h2{
    font-size: 4rem;
    text-align: center;
    margin: 0 0 50px 0;
    font-weight: normal;
    color: #e2a2b1;
}

@media screen and (max-width:768px) {
#menu h2,
#blog h2{
    font-size: 3rem;
    }
    
}

/* area */

#container{
    overflow-x: hidden;
}

.inner{
    width:100%;
    margin:0 auto;
    padding:70px;
}

@media screen and (max-width:940px) {
.inner{
    padding:30px;
}
}

/* splash */

#splash-logo p{
    font-size:1.8rem;
    font-weight: normal;
    white-space: nowrap;
}

/* header */

.header-area{
    position: fixed;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    z-index: 2;
    color: #fff;
    text-align: center;
}

.header-area h1{
    display: block;
    font-size: 6vw;
    font-weight: normal;
    line-height: 1;
    letter-spacing: 0;
    padding: 0 10px;
}

.header-area p{
    font-size: 1.3vw;
    letter-spacing: 0.4em;
    margin: 0 0 20px 0;
}

.header-area p br{
    display: none;
}


@media screen and (max-width:960px) {
.header-area h1{
    font-size:4rem;
}
.header-area p{
    font-size:0.8rem;
    whitewhite-space:no
}

.header-area p br{
    display: block;
}

}

/* gnavi */

#g-nav-list li:nth-of-type(1) a{
    font-size: 2rem;
    text-transform: none;
    font-weight: normal;
    line-height: 1;
    white-space: nowrap;
    margin: 0 0 20px 0;
}

#g-nav-list li:nth-of-type(2){
    animation-delay: .2s;
}
#g-nav-list li:nth-of-type(3){
    animation-delay: .4s;
}
#g-nav-list li:nth-of-type(4){
    animation-delay: .6s;
}
#g-nav-list li:nth-of-type(5){
    animation-delay: .8s;
}
#g-nav-list li:nth-of-type(6){
    animation-delay: 1.1s;
}
#g-nav-list li:nth-of-type(7){
    animation-delay: 1.3s;
}
/* lead */

#lead{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding-top:140px;
}

#lead .lead-img{
     width:46%;
    min-height: 400px;
    background: url("../img/lead.jpg") no-repeat center;
    background-size: cover;
}

#lead .lead-area{
    width:52%;
    display: flex;
    flex-wrap: wrap;
    justify-content:space-around;
    flex-direction: row-reverse;
}

@media screen and (max-width:1060px) {
#lead .lead-img{
     width:30%;
}
#lead .lead-area{
    width:68%;
}
}

@media screen and (max-width:768px) {
#lead{
    flex-direction: column-reverse;
}

#lead .lead-img,
#lead .lead-area{
    width:100%;
} 
    
#lead .lead-img{
    min-height: 250px;
    }
    
#lead .lead-area{
    margin: 0 0 140px 0;
    min-height: 20em;
    justify-content: center;
}
}

#lead .lead-area h2,
#lead .lead-area p,
#lead .lead-area .lead-btn a{
    -ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;    
    text-orientation: upright;
}

#lead .lead-area h2{
    width:28%;
    line-height:2.5;
    font-size:1.4rem;
}

#lead .lead-area p{
     width:48%;   
    padding: 50px 0 0 0;
    line-height: 2.8;
}

#lead .lead-area .lead-btn{
    width:10%; 
    position: relative;
    top: 240px;
}

#lead .btn04{
    padding:20px 15px;
}


@media screen and (max-width:1300px) {
#lead .lead-area h2{
    line-height:2;
}
#lead .lead-area p{
    line-height: 2.3;
}    
}

@media screen and (max-width:768px) {
#lead .lead-area .lead-btn{
    width:100%;
    top: 50px;
    text-align: center;
}
    
    .btn04{
        width:250px;
    }
    
#lead .lead-area h2,
#lead .lead-area p{
    width:auto;
} 
    
#lead .lead-area h2{
    margin:0 0 0 20px;
    line-height: 2.2;
}
    
#lead .lead-area p{
    line-height: 2;
}  
    
#lead .lead-area .lead-btn a{
    -ms-writing-mode: lr-tb;
    -webkit-writing-mode: horizontal-tb;
    writing-mode: horizontal-tb;
}

#lead .btn04{
    padding: 10px 30px;
}
    
}

@media screen and (max-width:470px) {
#lead .lead-area h2{
    line-height: 1.8;
}
#lead .lead-area p{   
    height: 23em;
}
    
_:-ms-lang(x)::-ms-backdrop, #lead .lead-area p{
    width:8em;
}
    
#lead .lead-area p br{
    display: none;
}
}

@media screen and (max-width:350px) {
#lead .lead-area h2{
    line-height: 1.6;
}
#lead .lead-area p {
    line-height: 1.8;
}
}

/* menu */

#menu{
    padding: 70px 0;
}

#menu section{
    background: #fff;
    margin: 0 0 10px 0;
}

#menu section h3{
    font-size: 0.9rem;
    margin: 0 0 10px 0;
}

#menu section p{
    font-size: 0.8rem;
}

#menu .menu-area{
    padding: 20px;
    box-shadow: 5px 0 10px #ccc;
}

#menu .menu-btn{
    text-align: center;
    margin: 50px 0 0 0;
}

/* contact */

#contact{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    flex-direction: row-reverse;
}

#contact .contact-img{
    width:70%;
    min-height: 300px;
    background:url("../img/contact.jpg") no-repeat center;
    background-size: cover;
}

#contact .contact-area{
    width:25%;
    text-align: center;
}

@media screen and (max-width:1190px) {
#contact .contact-img{
    width:60%;
    }
#contact .contact-area{
    width:35%;
    }
}

@media screen and (max-width:768px) {
#contact .contact-img{
    width:48%;
    }
#contact .contact-area{
    width:48%;
    }
}

@media screen and (max-width:600px) {
#contact .contact-img,
#contact .contact-area{
    width:100%;
    }
#contact .contact-img{
        margin:0 0 50px 0;
}
}

#contact .contact-area h2{
     font-size:1.3rem;   
    margin:0 0 10px 0;
}

#contact .contact-area dt{
     font-size:1.2rem;   
    margin:0 0 10px 0;
}

#contact .contact-area dd{
    font-size: 0.8rem;
    margin:0 0 30px 0;
}

/* blog */

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

/* footer */

#footer{
    border-top: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
}

#footer dl{
     width:30%;   
}

#footer dl dt{
    font-size: 0.8rem;
}

#footer dl dd{
    font-size: 2rem;
}

@media screen and (max-width:900px) {
    #footer dl{
        margin: 50px 0;
    }
}

@media screen and (max-width:768px) {

#footer dl dd{
    font-size: 1.5rem;
}
    
}

#footer .footer-list{
     width:65%; 
    text-align: right;
}

#footer ul li{
    display: inline-block;
    padding: 0 10px;
    font-size: 0.8rem;
    line-height: 3;
}

#footer small{
    text-align: right;
    margin: 20px 0 0 0;
    display: block;
    width: 100%;
    font-size: 0.7rem;
}

#footer #page-top span{
    display: inline-block;
  width: 13px;
  height: 13px;
  border-top: 4px solid #fff;
  border-left: 4px solid #fff;
  transform: rotate(45deg);
}


@media screen and (max-width:900px){
#footer dl,
#footer .footer-list,
#footer small{
    width:100%;
    text-align: center;
}
    
}
`
const ResetCss=`
    /*!
 * ress.css • v1.2.2
 * MIT License
 * github.com/filipelinhares/ress
 */

/* # =================================================================
   # Global selectors
   # ================================================================= */

html {
  box-sizing: border-box;
  overflow-y: scroll; /* All browsers without overlaying scrollbars */
  -webkit-text-size-adjust: 100%; /* iOS 8+ */
}

*,
::before,
::after {
  background-repeat: no-repeat; /* Set \`background-repeat: no-repeat\` to all elements and pseudo elements */
  box-sizing: inherit;
}

::before,
::after {
  text-decoration: inherit; /* Inherit text-decoration and vertical align to ::before and ::after pseudo elements */
  vertical-align: inherit;
}

* {
  padding: 0; /* Reset \`padding\` and \`margin\` of all elements */
  margin: 0;
}

/* # =================================================================
   # General elements
   # ================================================================= */

/* Add the correct display in iOS 4-7.*/
audio:not([controls]) {
  display: none;
  height: 0;
}

hr {
  overflow: visible; /* Show the overflow in Edge and IE */
}

/*
* Correct \`block\` display not defined for any HTML5 element in IE 8/9
* Correct \`block\` display not defined for \`details\` or \`summary\` in IE 10/11
* and Firefox
* Correct \`block\` display not defined for \`main\` in IE 11
*/
article,
aside,
details,
figcaption,
figure,
footer,
header,
main,
menu,
nav,
section,
summary {
  display: block;
}

summary {
  display: list-item; /* Add the correct display in all browsers */
}

small {
  font-size: 80%; /* Set font-size to 80% in \`small\` elements */
}

[hidden],
template {
  display: none; /* Add the correct display in IE */
}

abbr[title] {
  border-bottom: 1px dotted; /* Add a bordered underline effect in all browsers */
  text-decoration: none; /* Remove text decoration in Firefox 40+ */
}

a {
  background-color: transparent; /* Remove the gray background on active links in IE 10 */
  -webkit-text-decoration-skip: objects; /* Remove gaps in links underline in iOS 8+ and Safari 8+ */
}

a:active,
a:hover {
  outline-width: 0; /* Remove the outline when hovering in all browsers */
}

code,
kbd,
pre,
samp {
  font-family: monospace, monospace; /* Specify the font family of code elements */
}

b,
strong {
  font-weight: bolder; /* Correct style set to \`bold\` in Edge 12+, Safari 6.2+, and Chrome 18+ */
}

dfn {
  font-style: italic; /* Address styling not present in Safari and Chrome */
}

/* Address styling not present in IE 8/9 */
mark {
  background-color: #ff0;
  color: #000;
}

/* https://gist.github.com/unruthless/413930 */
sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/* # =================================================================
   # Forms
   # ================================================================= */

input {
  border-radius: 0;
}

/* Apply cursor pointer to button elements */
button,
[type="button"],
[type="reset"],
[type="submit"],
[role="button"] {
  cursor: pointer;
}

/* Replace pointer cursor in disabled elements */
[disabled] {
  cursor: default;
}

[type="number"] {
  width: auto; /* Firefox 36+ */
}

[type="search"] {
  -webkit-appearance: textfield; /* Safari 8+ */
}

[type="search"]::-webkit-search-cancel-button,
[type="search"]::-webkit-search-decoration {
  -webkit-appearance: none; /* Safari 8 */
}

textarea {
  overflow: auto; /* Internet Explorer 11+ */
  resize: vertical; /* Specify textarea resizability */
}

button,
input,
optgroup,
select,
textarea {
  font: inherit; /* Specify font inheritance of form elements */
}

optgroup {
  font-weight: bold; /* Restore the font weight unset by the previous rule. */
}

button {
  overflow: visible; /* Address \`overflow\` set to \`hidden\` in IE 8/9/10/11 */
}

/* Remove inner padding and border in Firefox 4+ */
button::-moz-focus-inner,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  border-style: 0;
  padding: 0;
}

/* Replace focus style removed in the border reset above */
button:-moz-focusring,
[type="button"]::-moz-focus-inner,
[type="reset"]::-moz-focus-inner,
[type="submit"]::-moz-focus-inner {
  outline: 1px dotted ButtonText;
}

button,
html [type="button"], /* Prevent a WebKit bug where (2) destroys native \`audio\` and \`video\`controls in Android 4 */
[type="reset"],
[type="submit"] {
  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS */
}

button,
select {
  text-transform: none; /* Firefox 40+, Internet Explorer 11- */
}

/* Remove the default button styling in all browsers */
button,
input,
select,
textarea {
  background-color: transparent;
  border-style: none;
  color: inherit;
}

/* Style select like a standard input */
select {
  -moz-appearance: none; /* Firefox 36+ */
  -webkit-appearance: none; /* Chrome 41+ */
}

select::-ms-expand {
  display: none; /* Internet Explorer 11+ */
}

select::-ms-value {
  color: currentColor; /* Internet Explorer 11+ */
}

legend {
  border: 0; /* Correct \`color\` not being inherited in IE 8/9/10/11 */
  color: inherit; /* Correct the color inheritance from \`fieldset\` elements in IE */
  display: table; /* Correct the text wrapping in Edge and IE */
  max-width: 100%; /* Correct the text wrapping in Edge and IE */
  white-space: normal; /* Correct the text wrapping in Edge and IE */
}

::-webkit-file-upload-button {
  -webkit-appearance: button; /* Correct the inability to style clickable types in iOS and Safari */
  font: inherit; /* Change font properties to \`inherit\` in Chrome and Safari */
}

[type="search"] {
  -webkit-appearance: textfield; /* Correct the odd appearance in Chrome and Safari */
  outline-offset: -2px; /* Correct the outline style in Safari */
}

/* # =================================================================
   # Specify media element style
   # ================================================================= */

img {
  border-style: none; /* Remove border when inside \`a\` element in IE 8/9/10 */
}

/* Add the correct vertical alignment in Chrome, Firefox, and Opera */
progress {
  vertical-align: baseline;
}

svg:not(:root) {
  overflow: hidden; /* Internet Explorer 11- */
}

audio,
canvas,
progress,
video {
  display: inline-block; /* Internet Explorer 11+, Windows Phone 8.1+ */
}

/* # =================================================================
   # Accessibility
   # ================================================================= */

/* Hide content from screens but not screenreaders */
@media screen {
  [hidden~="screen"] {
    display: inherit;
  }
  [hidden~="screen"]:not(:active):not(:focus):not(:target) {
    position: absolute !important;
    clip: rect(0 0 0 0) !important;
  }
}

/* Specify the progress cursor of updating elements */
[aria-busy="true"] {
  cursor: progress;
}

/* Specify the pointer cursor of trigger elements */
[aria-controls] {
  cursor: pointer;
}

/* Specify the unstyled cursor of disabled, not-editable, or otherwise inoperable elements */
[aria-disabled] {
  cursor: default;
}

/* # =================================================================
   # Selection
   # ================================================================= */

/* Specify text selection background color and omit drop shadow */

::-moz-selection {
  background-color: #b3d4fc; /* Required when declaring ::selection */
  color: #000;
  text-shadow: none;
}

::selection {
  background-color: #b3d4fc; /* Required when declaring ::selection */
  color: #000;
  text-shadow: none;
}
    `
const PartsCss=`
@charset "utf-8";
/*==================================================
機能編　4-2-5　背景色が伸びる（中央から外）
===================================*/

/*========= ローディング画面のためのCSS ===============*/
#splash {
\tposition: fixed;
\twidth: 100%;
\theight: 100%;
\tbackground:#e2a2b1;
\tz-index: 9999999;
\ttext-align:center;
\tcolor:#fff;
}

#splash-logo {
\tposition: absolute;
\ttop: 50%;
\tleft: 50%;
\ttransform: translate(-50%, -50%);
}

/*========= 画面遷移のためのCSS ===============*/

/*画面遷移アニメーション*/

.splashbg1,
.splashbg2{
\tdisplay: none;
}

body.appear .splashbg1,
body.appear .splashbg2{
\tdisplay:block;
}

/*右に消えるエリア*/
body.appear .splashbg1{
\tanimation-name:PageAnime;
\tanimation-duration:1.2s;
\tanimation-timing-function:ease-in-out;
\tanimation-fill-mode:forwards;
    content: "";
    position:fixed;
\tz-index: 999;
    width: 100%;
    height: 100vh;
    top: 0;
\tleft:50%;
    transform: scaleX(1);
    background-color:#e2a2b1;/*伸びる背景色の設定*/
}

@keyframes PageAnime{
\t0% {
\t\ttransform-origin:left;
\t\ttransform:scaleX(1);
\t}
\t50% {
\t\ttransform-origin:right;
\t}
\t100% {
\t\ttransform-origin:right;
\t\ttransform:scaleX(0);
\t}
}

/*左に消えるエリア*/
body.appear .splashbg2{
\tanimation-name:PageAnime2;
\tanimation-duration:1.2s;
\tanimation-timing-function:ease-in-out;
\tanimation-fill-mode:forwards;
    content: "";
    position:fixed;
\tz-index: 999;
    width: 100%;
    height: 100vh;
    top: 0;
\tright:50%;
    transform: scaleX(1);
    background-color:#e2a2b1;/*伸びる背景色の設定*/
}

@keyframes PageAnime2{
\t0% {
\t\ttransform-origin:right;
\t\ttransform:scaleX(1);
\t}

\t50% {
\t\ttransform-origin:left;
\t}
\t100% {
\t\ttransform-origin:left;
\t\ttransform:scaleX(0);
\t}
}

/*画面遷移の後現れるコンテンツ設定*/
#wrapper{
\topacity: 0;/*はじめは透過0に*/
}

/*bodyにappearクラスがついたら出現*/
body.appear #wrapper{
\tanimation-name:PageAnimeAppear;
\tanimation-duration:1s;
\tanimation-delay:0.2s;
\tanimation-fill-mode:forwards;
\topacity: 0;
}

@keyframes PageAnimeAppear{
\t0% {
\topacity: 0;
\t}
\t100% {
\topacity: 1;
}
}

/*==================================================
機能編　5-1-25 クリックしたらナビ背景コンテンツがぼかされる※IE11非対応
===================================*/

/*========= ぼかしのためのCSS ===============*/

.mainblur{
\tfilter: blur(8px);
}


/*========= ナビゲーションのためのCSS ===============*/

#g-nav{
    /*position:fixed;にし、z-indexの数値を小さくして最背面へ*/
    position:fixed;
\tz-index: -1;
\topacity: 0;/*はじめは透過0*/
    /*ナビの位置と形状*/
\ttop:0;
\twidth:100%;
    height: 100vh;/*ナビの高さ*/
\tbackground:rgba(266,162,172,0.8);/*背景を少し透過させる*/
    /*動き*/
\ttransition: all 0.3s;
}

/*アクティブクラスがついたら透過なしにして最前面へ*/
#g-nav.panelactive{
\topacity: 1;
\tz-index:999;
}

/*ナビゲーションの縦スクロール*/
#g-nav.panelactive #g-nav-list{
    /*ナビの数が増えた場合縦スクロール*/
    position: fixed;
    z-index: 999; 
    width: 100%;
    height: 100vh;/*表示する高さ*/
    overflow: auto;
    -webkit-overflow-scrolling: touch;
}

/*ナビゲーション*/
#g-nav ul {
    display: none;/*はじめは非表示*/
    /*ナビゲーション天地中央揃え*/
    position: absolute;
    z-index: 999;
    top:50%;
    left:50%;
    transform: translate(-50%,-50%);
}

#g-nav.panelactive ul {
    display: block;
}
/*リストのレイアウト設定*/

#g-nav li{
\tlist-style: none;
    text-align: center; 
}

#g-nav li a{
\tcolor: #fff;
\ttext-decoration: none;
\tpadding:10px;
\tdisplay: block;
\ttext-transform: uppercase;
\tletter-spacing: 0.1em;
\tfont-weight: bold;
}

/*==================================================
機能編　5-2-2 ボタン：2本線が×に
===================================*/

/*ボタン外側*/
.openbtn{
\tposition:fixed;
    z-index: 9999;/*ボタンを最前面に*/
\ttop:10px;
\tright: 10px;
\tcursor: pointer;
    width: 50px;
    height:50px;
}
\t
/*ボタン内側*/

.openbtn span{
    display: inline-block;
    transition: all .4s;/*アニメーションの設定*/
    position: absolute;
    left: 13px;
    height: 3px;
\tbackground-color: #666;
  }


.openbtn span:nth-of-type(1) {
\ttop:22px;\t
  \twidth: 50%;
}

.openbtn span:nth-of-type(2) {
\ttop:29px;
  \twidth:30%;
}

/*activeクラスが付与されると線が回転して×に*/

.openbtn.active span:nth-of-type(1) {
    top: 20px;
    left: 16px;
    transform: translateY(6px) rotate(-45deg);
    width: 35%;
}

.openbtn.active span:nth-of-type(2) {
    top: 32px;
    left: 16px;
    transform: translateY(-6px) rotate(45deg);
    width: 35%;
}

/*==================================================
機能編　9-1-2 丸が動いてスクロールを促す
===================================*/

/*スクロールダウン全体の場所*/
.scrolldown2{
    /*描画位置※位置は適宜調整してください*/
\tposition:fixed;
\tbottom:10px;
\tleft:50%;
    z-index: 2;
}

/*Scrollテキストの描写*/
.scrolldown2 span{
    /*描画位置*/
\tposition: absolute;
\tleft:10px;
\tbottom:10px;
    /*テキストの形状*/
\tcolor: #eee;
\tfont-size: 0.7rem;
\tletter-spacing: 0.05em;
\t/*縦書き設定*/
\t-ms-writing-mode: tb-rl;
    -webkit-writing-mode: vertical-rl;
    writing-mode: vertical-rl;
}

/* 丸の描写 */
.scrolldown2:before {
    content: "";
    /*描画位置*/
    position: absolute;
    bottom:0;
    left:-4px;
    /*丸の形状*/
\twidth:10px;
\theight:10px;
\tborder-radius: 50%;
\tbackground:#eee;
    /*丸の動き1.6秒かけて透過し、永遠にループ*/
\tanimation:
\t\tcirclemove 1.6s ease-in-out infinite,
\t\tcirlemovehide 1.6s ease-out infinite;
}

/*下からの距離が変化して丸の全体が上から下に動く*/
@keyframes circlemove{
      0%{bottom:45px;}
     100%{bottom:-5px;}
 }

/*上から下にかけて丸が透過→不透明→透過する*/
@keyframes cirlemovehide{
      0%{opacity:0}
     50%{opacity:1;}
    80%{opacity:0.9;}
\t100%{opacity:0;}
 }

/* 線の描写 */
.scrolldown2:after{
\tcontent:"";
    /*描画位置*/
\tposition: absolute;
\tbottom:0;
\tleft:0;
    /*線の形状*/
\twidth:2px;
\theight: 50px;
\tbackground:#eee;
}

/*==================================================
機能編　　7-1-21\t線から塗に変化（上から下）
===================================*/

/* ボタン共通設定 */
.btn04 {
    /*線の基点とするためrelativeを指定*/
\tposition: relative;
    /*ボタンの形状*/
\tdisplay:inline-block;
    padding:10px 30px;
\tcolor:#333;
\tborder:1px solid #ccc;
    text-decoration: none;
    outline: none;
    /*はみ出す背景色を隠す*/
 \toverflow: hidden;
}

/*hoverした際のボタンの形状*/
.btn04:hover {
\tcolor:#fff;
\tborder-color: transparent;
    /*色の変化を遅らせる*/
\ttransition-delay: .6s;
}

/*線の設定*/
.btn04 span{
    display: block;
    z-index: 2;
}

/*== 線から塗に変化（上から下） */

/*線の設定*/
.bordertop span::before,
.bordertop span::after {
    content: '';
    /*絶対配置で線の位置を決める*/
    position: absolute;
    width:1px;
    height: 0;
    /*線の形状*/
    background: #e2a2b1;
    /*アニメーションの設定*/
\ttransition: all .3s;
}

/*左線*/
.bordertop span::before {
    left:0;
    top:0;
}

/*右線*/
.bordertop span::after {
    right:0;
    top:0;
}

/*hoverをすると線が伸びる*/
.bordertop:hover span::before,
.bordertop:hover span::after {
    height: 100%;
}

/*背景の設定*/
.bordertop::before{
\tcontent: '';
    /*絶対配置で線の位置を決める*/
\tposition: absolute;
\tleft: 0;
    top:0;
\tz-index: -1;
    /*背景の形状*/
\twidth: 100%;
\theight: 0;
\tbackground:#e2a2b1;
    /*アニメーションの設定*/
\ttransition: all .3s;
}

/*hoverをすると背景が伸びる*/
.bordertop:hover::before{
\theight: 100%;
    /*0.4秒遅れてアニメーション*/
\ttransition-delay: .4s;
}


/*==================================================
機能編　8-1-4\tページ内にある指定の範囲内で下から出現
===================================*/

/*リンクの形状*/
#page-top a{
\tdisplay: flex;
\tjustify-content:center;
\talign-items:center;
\tbackground:#e2a2b1;
\twidth: 60px;
\theight: 50px;
\tcolor: #fff;
\ttext-align: center;
\ttext-transform: uppercase; 
\ttext-decoration: none;
\tfont-size:0.6rem;
\ttransition:all 0.3s;
}

#page-top a:hover{
\tbackground: #999;
\theight: 55px;
}

/*リンクを右下に固定*/
#page-top {
\tposition: fixed;
\tright: 0;
\tbottom:0;
\tz-index: 2;
    /*はじめは非表示*/
\topacity: 0;
\ttransform: translateY(100px);
}

/*　上に上がる動き　*/

#page-top.UpMove{
\tanimation: UpAnime 0.5s forwards;
}
@keyframes UpAnime{
  from {
    opacity: 0;
\ttransform: translateY(100px);
  }
  to {
    opacity: 1;
\ttransform: translateY(0);
  }
}

/*　下に下がる動き　*/

#page-top.DownMove{
\tanimation: DownAnime 0.5s forwards;
}
@keyframes DownAnime{
  from {
  \topacity: 1;
\ttransform: translateY(0);
  }
  to {
  \topacity: 1;
\ttransform: translateY(100px);
  }
}

/*==================================================
機能編　6-1-6 複数画像を並列に見せる
===================================*/
.slider {/*横幅94%で左右に余白を持たせて中央寄せ*/
   width:94%;
    margin:0 auto;
}

.slider img {
    width:100%;/*スライダー内の画像を横幅100%に*/
    height:auto;
}

/*slickのJSで書かれるタグ内、スライド左右の余白調整*/

.slider .slick-slide {
    margin:0 10px;
}

/*矢印の設定*/

/*戻る、次へ矢印の位置*/
.slick-prev, 
.slick-next {
    position: absolute;/*絶対配置にする*/
    top: 42%;
    cursor: pointer;/*マウスカーソルを指マークに*/
    outline: none;/*クリックをしたら出てくる枠線を消す*/
    border-top: 2px solid #999;/*矢印の色*/
    border-right: 2px solid #999;/*矢印の色*/
    height: 15px;
    width: 15px;
}

.slick-prev {/*戻る矢印の位置と形状*/
    left: -1.5%;
    transform: rotate(-135deg);
}

.slick-next {/*次へ矢印の位置と形状*/
    right: -1.5%;
    transform: rotate(45deg);
}

/*ドットナビゲーションの設定*/

.slick-dots {
    text-align:center;
\tmargin:20px 0 0 0;
}

.slick-dots li {
    display:inline-block;
\tmargin:0 5px;
}

.slick-dots button {
    color: transparent;
    outline: none;
    width:8px;/*ドットボタンのサイズ*/
    height:8px;/*ドットボタンのサイズ*/
    display:block;
    border-radius:50%;
    background:#ccc;/*ドットボタンの色*/
}

.slick-dots .slick-active button{
    background:#e2a2b1;/*ドットボタンの現在地表示の色*/
}

/*==================================================
   印象編 4 最低限おぼえておきたい動き
===================================*/

/* 4-1 ふわっ（その場で） */
.fadeIn{
animation-name: fadeInAnime;
animation-duration:2s;/*ゆっくり出現するため数値変更*/
animation-fill-mode:forwards;
opacity:0;
}

@keyframes fadeInAnime{
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
/* 4-4 ボンッ（拡大） */
.zoomOut{
\tanimation-name: zoomOutAnime;
\tanimation-duration:0.5s;
\tanimation-fill-mode:forwards;
}

@keyframes zoomOutAnime{
  from {
\ttransform: scale(1.2);
\topacity: 0;
  }

  to {
    transform:scale(1);
\topacity: 1;
  }
}

/* スクロールをしたら出現する要素にはじめに透過0を指定　*/
 
.zoomOutTrigger{
    opacity: 0;
}

/*===========================================================*/
/* 印象編　8 テキストの動き　/
/*===========================================================*/

/*========= 8-2 テキストが流れるように出現（左から右） ===============*/

/*全共通*/

.slide-in {
\toverflow: hidden;
    display: inline-block;
    padding: 0 10px;/*英語がはみ出るので見えるように余白追記*/
}

.slide-in_inner {
\tdisplay: inline-block;

}

/*左右のアニメーション*/
.leftAnime,
.rightAnime{
    opacity: 0;/*事前に透過0にして消しておく*/
}

.slideAnimeLeftRight {
\tanimation-name: slideText-100;
\tanimation-duration:0.8s;
\tanimation-fill-mode:forwards;
    opacity: 0;
}

@keyframes slideText-100 {
  from {
\ttransform: translateX(-100%); /*要素を左の枠外に移動*/
        opacity: 0;
  }

  to {
\ttransform: translateX(0);/*要素を元の位置に移動*/
    opacity: 1;
  }
}

.slideAnimeRightLeft {
\tanimation-name: slideText100;
\tanimation-duration:0.8s;
\tanimation-fill-mode:forwards;
    opacity: 0;
}


@keyframes slideText100 {
  from {
\ttransform: translateX(100%);/*要素を右の枠外に移動*/
    opacity: 0;
  }

  to {
\ttransform: translateX(0);/*要素を元の位置に移動*/
    opacity: 1;
  }
}

/*========= 8-9 テキストがじわっと出現 ===============*/

.blur{
\tanimation-name: blurAnime;
\tanimation-duration:1s;
\tanimation-fill-mode:forwards;
}

@keyframes blurAnime{
  from {
\tfilter: blur(10px);
\ttransform: scale(1.02);
\topacity: 0;
  }

  to {
\tfilter: blur(0);
\ttransform: scale(1);
\topacity: 1;
  }
}
 
.blurTrigger{
    opacity: 0;
}



/*========= 8-17　テキストがほのかに光りながら出現 ===============*/

.glowAnime span{opacity: 0;}
.glowAnime.glow span{ animation:glow_anime_on 1s ease-out forwards; }
@keyframes glow_anime_on{
\t0% { opacity:0; text-shadow: 0 0 0 #fff,0 0 0 #fff;}
\t50% { opacity:1;text-shadow: 0 0 10px #fff,0 0 15px #fff; }
\t100% { opacity:1; text-shadow: 0 0 0 #fff,0 0 0 #fff;}
}


/*==================================================
   7 画像リンクの動き
===================================*/

span.mask{
\tdisplay: block;/*画像をくくるspanタグをブロック要素にする*/
\toverflow: hidden;/*はみ出ているものを隠す*/
}

/*　7-9 波紋　*/

.circle span.mask{
\tposition: relative;/*波紋の基点となる位置を定義*/
}

.circle span.mask::before {
\tposition: absolute;
\tcontent: '';
\ttransform: scale(0);/*円の大きさ初期値は0*/
\topacity: 0;/*透過0*/
\twidth:100%;/*円のサイズ指定*/
\theight:100%;/*円のサイズ指定*/
\tborder-radius:50%;/*円の角丸指定*/
\tbackground: rgba(255,255,255,0.2);/*円の背景色*/
}

.circle span.mask:hover::before {/*hoverした時の変化*/
\tanimation: circle 0.75s;/*アニメーションの名前と速度を定義*/
}

@keyframes circle {
  0% {
  transform: scale(0);
  opacity: 1;/*透過なし*/
  }
  30% {
    opacity: 1;
  }
  100% {
  transform: scale(2);/*アニメーションで大きくなった2倍の円の指定*/
  }
}

/* 7-11 背景が出現＋テキスト（上から） */

.bgDU,
.bgDU .mask{
    display: block;
\tposition:relative;/*背景色とテキストの基点となる位置を定義*/
    overflow: hidden;
}

.bgDU .mask::before{
\tcontent:'';
\tposition: absolute;
\tz-index: 2;
\tleft:0;
\ttop:0;
\topacity:0;/*透過0*/
\ttransition: .3s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
    transform: translateY(100%);
\tbackground:#e2a2b2;/*背景色*/
\twidth:100%;
\theight: 100%;\t
}

.bgDU:hover .mask::before{/*hoverした時の変化*/
\topacity:1;/*透過なしに変化*/
\ttransform: translateY(0);
}

.bgDU .cap{/*画像の上のテキスト*/
\tposition: absolute;
\topacity:0;/*透過0*/
\ttransition: .5s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
\tz-index:3;/*テキストを前面に出す*/
\ttop: 50%;
    left: 50%;
\ttransform: translate(-50%,-50%);/*テキストの位置中央指定*/
\tcolor: #fff;/*テキストの色を変えたい場合はここを修正*/
}

.bgDU:hover .cap{/*hoverした時の変化*/
\topacity:1;/*透過なしに変化*/
}

/*==================================================
    印象編　6-7 スクロールするとヘッダー背景画像が拡大（エリアの動き）
===================================*/

#header{
\tposition: relative;/*背景を設定するdivの基点とするためrelativeをかける*/
    width: 100%;
\theight:100vh;
    overflow: hidden;
}

#header-img{
\tposition: fixed;/*背景を固定するためfixedをかける*/
\tz-index: 1;/*#container,#footerよりも下に配置するために数値を小さくする*/
    top: 0;/*topの位置がJSで変化*/
\t/*以下画面で背景画像を表示させるための指定*/
    width: 100%;
\theight:100vh;
\tbackground: url("../img/main.jpg") no-repeat top center;/*背景画像の設定*/
\tbackground-size:cover;
\ttransform-origin:center;/*変化する基点を中心からに設定*/
}

#container,
#footer{
\tposition: relative;/*#header-imgよりも配置を上にするためにrelativeをつける*/
\tz-index: 3;/*#header-imgよりもz-indexの値を大きな数値にして上に表示*/
    background:#f8f9fa;

}

`
