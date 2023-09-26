import React, {useEffect} from 'react';
import {TailWindHeader} from "../components/TailWindHeader";
import {Card} from "../components/Card";
import {Greeter} from "practice-create-npm-package";
import {Hello, Layer, useLayerParams} from "hono-my-npm-package";
const greeter = new Greeter();

const Index = (props: any) => {
    greeter.greet('hoge');
    Hello();
    const [getInputRegExp, setInputRegExp] = useLayerParams('hoge', ["Float", "Integer"]);
    useEffect(() => {
        setInputRegExp('hoge', 'Float');
        console.log(getInputRegExp());
    }, []);




    return (
        <>
            <Layer condition={false}>
                <div>hoge</div>
            </Layer>
            aa
            <TailWindHeader/>
            <Card/>
        </>
    )
}

export default Index;
