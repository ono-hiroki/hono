import Head from 'next/head';
import styled from 'styled-components';

const Container = styled.div`
    padding: 0 2rem;
`;

const Index = (props: any) => {
    return (
        <>
        <Head>
            <title>ugomemo3-1-1</title>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css"/>
        </Head>
            <div className="wrapper">
                <p>ページに遷移すると、すぐ現れます</p>


                <div className="flex">
                    <div className="box animate__animated animate__fadeInUp">すぐ現れるボックス</div>
                    <div className="box animate__animated animate__fadeInUp animate__infinite">アニメーション無限ループ</div>
                    <div className="box animate__animated animate__fadeInUp count2">独自設定：アニメーション回数指定（2回）</div>
                </div>

                <div className="flex">
                    <div className="box animate__animated animate__fadeInUp animate__delay-1s">アニメーションが1秒遅れでスタート</div>
                    <div className="box animate__animated animate__fadeInUp animate__delay-2s">アニメーションが2秒遅れでスタート</div>
                    <div className="box animate__animated animate__fadeInUp animate__delay-3s">アニメーションが3秒遅れでスタート</div>
                    <div className="box animate__animated animate__fadeInUp animate__delay-4s">アニメーションが4秒遅れでスタート</div>
                    <div className="box animate__animated animate__fadeInUp animate__delay-5s">アニメーションが5秒遅れでスタート</div>
                    <div className="box animate__animated animate__fadeInUp delay-time">（CSS独自設定）アニメーションが0.5秒遅れでスタート
                    </div>
                </div>

                <div className="flex">
                    <div className="box animate__animated animate__fadeInUp animate__slow">アニメーションの変化のスピードが遅い</div>
                    <div className="box animate__animated animate__fadeInUp animate__slower">アニメーションの変化のスピードがさらに遅い</div>
                    <div className="box animate__animated animate__fadeInUp animate__fast">アニメーションの変化のスピードが速い</div>
                    <div className="box animate__animated animate__fadeInUp animate__faster">アニメーションの変化のスピードがさらに速い</div>
                    <div className="box animate__animated animate__fadeInUp change-time">（CSS独自設定）アニメーションの変化のスピードが4.5秒
                    </div>
                </div>
            </div>
            <style jsx >{Style}</style>
        </>
    )
}

export default Index;

const Style = `
@charset "utf-8";

/* アニメーションの回数を決めるCSS*/

.count2{  
animation-iteration-count: 2;/*この数字を必要回数分に変更*/
}

/* アニメーションスタートの遅延時間を決めるCSS*/

.delay-time{  
animation-delay: 0.5s;
}

/* アニメーション自体が変化する時間を決めるCSS*/

.change-time{  
animation-duration: 4.5s;/*この数字を変化させたい時間に変更*/
}

/*========= レイアウトのためのCSS ===============*/

.wrapper{
overflow: hidden;
}


.flex{
display:flex;
flex-wrap: wrap;
}

.box{
width: 220px;
padding: 20px;
margin:0 20px 20px 0;
background: #666;
color: #fff;
box-sizing:border-box;
}

a{
text-decoration: none;
display: block;
color: #fff;
}
`
