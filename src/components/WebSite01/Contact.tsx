import React, {useEffect, useRef, useState} from "react";
import {css, keyframes} from "@emotion/react";
import {useInView} from "react-intersection-observer";

// TODO fadeInのアニメーションを追加する

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


const Contact = () => {
    const {ref, inView} = useInView({
        threshold: 0,
    });

    return (
        <>
            <section id="contact" className="inner" css={[inner, contact]}>
                <div className="fadeInTrigger" css={contactImg}/>
                <div className="fadeInTrigger" css={contactArea}>
                    <h2>ご予約方法</h2>
                    <dl>
                        <dt><a href="tel:03-1234-5678">TEL 03-1234-5678</a></dt>
                        <dd>（営業時間：10:00-20:00）</dd>
                    </dl>
                    <div><a href="#" css={[btn04, borderTop]}><span>お問い合わせ</span></a></div>

                </div>
            </section>
        </>
    )
}

export default Contact;
