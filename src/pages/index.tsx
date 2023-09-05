import React from 'react';
import {TailWindHeader} from "../components/TailWindHeader";
import {Card} from "../components/Card";
import {Greeter} from "practice-create-npm-package";
const greeter = new Greeter();

const Index = (props: any) => {
    greeter.greet('hoge');
    return (
        <>

            aa
            <TailWindHeader/>
            <Card/>
        </>
    )
}

export default Index;
