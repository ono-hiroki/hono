import React from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import '@splidejs/splide/css';
import {css} from "@emotion/react";
// TODO レスポンシブ　ex:スマホの時は１枚ずつ表示

const Items = [
    {
        img: "/webSite1/01.jpg",
        title: "ハンドケア / フットケア",
        price: "3,000 yen～",
    },
    {
        img: "/webSite1/02.jpg",
        title: "ウェディングメニュー",
        price: "12,000 yen～",
    },
    {
        img: "/webSite1/03.jpg",
        title: "ボディトリートメント",
        price: "8,000 yen～",
    },
    {
        img: "/webSite1/04.jpg",
        title: "フェイシャル",
        price: "5,000 yen～",
    },
    {
        img: "/webSite1/05.jpg",
        title: "メイク / セット",
        price: "3,000 yen～",
    },
]
const slider = css`
   width:94%;
   margin:0 auto;
   
   img {
    width:100%;/*スライダー内の画像を横幅100%に*/
    height:auto;
}
`
const menuArea = css`
    padding: 20px;
    box-shadow: 5px 0 10px #ccc;
`
export const Slider = () => {
    return (
        <>
            <Splide
                options={{
                    rewind: true,
                    gap: '1rem',
                    perPage: 3,
                }}
                css={slider}
            >
                {Items.map((item, index) => {
                        return (
                            <SplideSlide key={index}>
                                <a href="#">
                                    <figure className="circle">
                                            <span className="mask">
                                                <img src={item.img} alt=""/>
                                            </span>
                                    </figure>
                                    <div className="menu-area" css={menuArea}>
                                        <h3>{item.title}</h3>
                                        <p>{item.price}</p>
                                    </div>
                                </a>
                            </SplideSlide>
                        )
                    }
                )}
            </Splide>
        </>
    );
}
