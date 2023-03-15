import React, {useEffect, useRef, useState} from "react";
import {useInView} from "react-intersection-observer";
import {css, keyframes} from "@emotion/react";

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

const hiddenSplash = css`
    display: none;
`

const PageAnime = keyframes`
  0% {
    transform-origin:left;
    transform:scaleX(1);
  }
  50% {
    transform-origin:right;
  }
  100% {
    transform-origin:right;
    transform:scaleX(0);
  }
`

const splashbg1Appear = css`
    animation-name:${PageAnime};
    animation-duration:1.2s;
    animation-timing-function:ease-in-out;
    animation-fill-mode:forwards;
    content: "";
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;
    top: 0;
    left:50%;
    transform: scaleX(1);
    background-color:#e2a2b1;/*伸びる背景色の設定*/
`

const PageAnimeSecond = keyframes`
  0% {
    transform-origin:right;
    transform:scaleX(1);
  }

  50% {
    transform-origin:left;
  }
  100% {
    transform-origin:left;
    transform:scaleX(0);
  }
`

const splashbg2Appear = css`
    animation-name: ${PageAnimeSecond};
    animation-duration:1.2s;
    animation-timing-function:ease-in-out;
    animation-fill-mode:forwards;
    content: "";
    position:fixed;
    z-index: 999;
    width: 100%;
    height: 100vh;
    top: 0;
    right:50%;
    transform: scaleX(1);
    background-color:#e2a2b1;/*伸びる背景色の設定*/
`

type Props = {
    isTimePassed: boolean;
}

const SplashTag = (props: Props) => {

    return (
        <>
            <div css={[splash, props.isTimePassed && hiddenSplash]}>
                <div css={[splashLogo]}>
                    <p>
                        <span css={[slideIn, leftAnime, slideAnimeLeftRight]}>
                            <span css={[slideIn_inner, slideAnimeRightLeft]}>Beautiful Days</span>
                        </span>
                    </p>
                </div>
            </div>

            <div css={[props.isTimePassed && splashbg1Appear]}/>
            <div css={[props.isTimePassed && splashbg2Appear]}/>
        </>
    )
}

export default SplashTag;
