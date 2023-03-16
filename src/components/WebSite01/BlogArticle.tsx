import React from "react";
import {css, keyframes} from "@emotion/react";
import {useInView} from "react-intersection-observer";

const bgDU = css`
    display: block;
    position:relative;/*背景色とテキストの基点となる位置を定義*/
    overflow: hidden;
    
   &:hover {
    opacity:1;/*透過なしに変化*/
    transform: translateY(0);
    }
    
    :hover .cap{/*hoverした時の変化*/
    opacity:1;/*透過なしに変化*/
    }
`
const mask = css`
    display: block;
    position:relative;/*背景色とテキストの基点となる位置を定義*/
    overflow: hidden;
    
    &::before{
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
 
    &::before{/*hoverした時の変化*/
    opacity:1;/*透過なしに変化*/
    transform: translateY(0);
    }
`
const cap = css`
    position: absolute;
    opacity:0;/*透過0*/
    transition: .5s ease-in-out;/*移り変わる速さを変更したい場合はこの数値を変更*/
    z-index:3;/*テキストを前面に出す*/
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);/*テキストの位置中央指定*/
    color: #fff;/*テキストの色を変えたい場合はここを修正*/
    
`
type Props = {
    img: string,
    dateTime: string,
    dateTimeString: string,
    title: string,
}

const Contact = (props: Props) => {

    const {ref, inView} = useInView({
        threshold: 0,
    });

    return (
        <>
            <article className="fadeInTrigger">
                <a href="#" className="bgDU">
                    <figure className="mask">
                        <img src={props.img} alt=""/>
                        <time dateTime={props.dateTime}>{props.dateTimeString}</time>
                    </figure>
                    <div className="cap">
                        <h3>{props.title}</h3>
                        <span>Read More</span>
                    </div>
                </a>
            </article>
        </>
    )
}

export default Contact;
