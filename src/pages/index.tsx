import React from 'react';
import {TailWindHeader} from "../components/TailWindHeader";
import {Card} from "../components/Card";

const Index = (props: any) => {

    return (
        <>
            <TailWindHeader/>
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
                    <h1 className="text-6xl font-bold">
                        About Me
                    </h1>
                    <div className="flex flex-col items-start justify-center text-left">
                        <p className="mt-3">
                            芝浦工業大学 数理科学科 4年<br/>
                            1年間 東大発ベンチャー「株式会社Drafty」にて開発インターン<br/>
                            1年間 株式会社リンクウェルにてインターン<br/>
                            主にLaravel, Ruby on Railsを使用<br/>
                        </p>
                    </div>
                </main>
            </div>
            <Card/>
        </>
    )
}

export default Index;
