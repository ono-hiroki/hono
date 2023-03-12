import React, {useEffect, useRef, useState} from "react";
import styled from "styled-components";

const Splash = styled.div`
position: fixed;
width: 100%;
height: 100%;
background:#e2a2b1;
z-index: 9999999;
text-align:center;
color:#fff;
`;

const SplashLogo = styled.div`
p {
    font-size:1.8rem;
    font-weight: normal;
    white-space: nowrap;
}

position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
font-family:'Parisienne', cursive;
`;

const SplashLogoPinSpan = styled.span`
overflow: hidden;
display: inline-block;
padding: 0 10px;/*英語がはみ出るので見えるように余白追記*/

animation-name: slideText-100;
animation-duration:0.8s;
animation-fill-mode:forwards;
// opacity: 0;
`

const SplashLogoPinSpanInner = styled.span`
display: inline-block;
animation-name: slideText100;
animation-duration:0.8s;
animation-fill-mode:forwards;
// opacity: 0;
`

const SplashTag = (props: { text: string; }) => {
    const [fadeProp, setFadeProp] = useState({fade: 'fade-in'});
    const leftAnime = useRef(null);
    const leftAnimeInner = useRef(null);

    // useEffect(() => {
    //     const timeout = setInterval(() => {
    //         if (fadeProp.fade === 'fade-in') {
    //             setFadeProp({fade: 'fade-out'})
    //         }
    //     }, 1400);
    //     return () => {
    //         clearInterval(timeout)
    //     };
    //
    // }, [fadeProp.fade]);

    useEffect(() => {
        console.log('leftAnime', leftAnime)
        console.log('leftAnimeInner', leftAnimeInner)
        // @ts-ignore
        let elemPos = leftAnime.current?.offsetTop;
    });


    return (
        <>
            <Splash className={fadeProp.fade}>
                <SplashLogo id='splash-logo'>
                    <p>
                        <SplashLogoPinSpan ref={leftAnime}>
                            <SplashLogoPinSpanInner ref={leftAnimeInner}>Beautiful Days</SplashLogoPinSpanInner>
                        </SplashLogoPinSpan>
                    </p>
                </SplashLogo>
            </Splash>
        </>
    )
}

export default SplashTag;
