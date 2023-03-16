import React, {useEffect, useRef, useState} from "react";
import {css, keyframes} from "@emotion/react";
import {useInView} from "react-intersection-observer";

const footer = css`
 font-family: 'Parisienne', cursive;
    position: relative;/*#header-imgよりも配置を上にするためにrelativeをつける*/
    z-index: 3;/*#header-imgよりもz-indexの値を大きな数値にして上に表示*/
    background:#f8f9fa;
    border-top: 1px solid #ccc;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

     dl {
    width: 30%;
}

     dl dt {
    font-size: 0.8rem;
   
}

     dl dd {
    font-size: 2rem;
}

@media screen and (max-width: 900px) {
         dl {
        margin: 50px 0;
    }
}

@media screen and (max-width: 768px) {

         dl dd {
        font-size: 1.5rem;
    }

}

    .footer-list {
    width: 65%;
    text-align: right;
    }

     ul li {
    display: inline-block;
    padding: 0 10px;
    font-size: 0.8rem;
    line-height: 3;
    }

     small {
    text-align: right;
    margin: 20px 0 0 0;
    display: block;
    width: 100%;
    font-size: 0.7rem;
    }

     #page-top span {
    display: inline-block;
    width: 13px;
    height: 13px;
    border-top: 4px solid #fff;
    border-left: 4px solid #fff;
    transform: rotate(45deg);
    }


@media screen and (max-width: 900px) {
         dl,
         .footer-list,
         small {
        width: 100%;
        text-align: center;
    }
}

`

const inner = css`
    width: 100%;
    margin: 0 auto;
    padding: 70px;
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

const Footer = () => {
    const {ref, inView} = useInView({
        threshold: 0,
    });

    const fadein = useInView({
        threshold: 0,
    })

    return (
        <>
            <footer id="footer" className="inner" css={[footer, inner]} ref={ref}>
                <dl>
                    <dt><span className="slide-in leftAnime"><span
                        className="slide-in_inner leftAnimeInner">白金台の癒しのエステサロン</span></span></dt>
                    <dd><span className="slide-in leftAnime"><span
                        className="slide-in_inner leftAnimeInner">Beautiful Days</span></span></dd>
                </dl>
                <div className="footer-list">
                    <div className="slide-in leftAnime" css={[slideIn, slideAnimeLeftRight]}>
                        <div className="slide-in_inner leftAnimeInner" css={[slideInInner]} >
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
                <p id="page-top" className="hide-btn"><a href="#"><span></span></a></p>
                <small><span className="slide-in leftAnime"><span
                    className="slide-in_inner leftAnimeInner">&copy; Beautiful days</span></span></small>
            </footer>

        </>
    )
}

export default Footer;
