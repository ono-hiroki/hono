import React, {useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {css, keyframes} from "@emotion/react";

const splash = css`
position: fixed;
width: 100%;
height: 100%;
background:#e2a2b1;
z-index: 9999999;
text-align:center;
color:#fff;
`

const splashLogo = css`
    font-size:1.8rem;
    font-weight: normal;
    white-space: nowrap;
font-family:'Parisienne', cursive;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const leftAnime = css`
    opacity: 0;
`
const slideIn = css`
    overflow: hidden;
    display: inline-block;
`
const slideIn_inner = css`
    display: inline-block;
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

const SplashTag = (props: { text: string; }) => {
    const [isTimePassed, setIsTimePassed] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setIsTimePassed(true)
        }, 1400);
    });

    const [ref,inView] = useInView({
        threshold: 0,
    });



    return (
        <>
            <div id="splash" css={splash} ref={ref}>
                <div id="splash-logo" css={splashLogo}>
                    <p>
                        <span className="slide-in slideAnimeLeftRight" css={[slideIn, leftAnime, slideAnimeLeftRight]}>
                            <span className="slide-in_inner slideAnimeRightLeft" css={[slideIn_inner, slideAnimeRightLeft]}>Beautiful Days {inView}</span>
                        </span>
                    </p>
                </div>
            </div>

            <div className="splashbg1"/>
            <div className="splashbg2"/>

            {/*<Splash className={fadeProp.fade}>*/}
            {/*    <SplashLogo id='splash-logo'>*/}
            {/*        <p>*/}
            {/*            <SplashLogoPinSpan ref={leftAnime}>*/}
            {/*                <SplashLogoPinSpanInner ref={leftAnimeInner}>Beautiful Days</SplashLogoPinSpanInner>*/}
            {/*            </SplashLogoPinSpan>*/}
            {/*        </p>*/}
            {/*    </SplashLogo>*/}
            {/*</Splash>*/}
        </>
    )
}

export default SplashTag;
