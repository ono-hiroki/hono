import { useState, useEffect, useRef } from "react";
import { useLayerParams, useEffectWithLayer, Layer, useLayerManager } from "../COPLib";

const CalculationPanel = () => {
    const [numText1, setNumText1] = useState("0");
    const [numText2, setNumText2] = useState("0");
    const [operatorText, setOperatorText] = useState("+");
    const [result, setResult] = useState("0");
        const [getInputRegExp, setInputRegExp] = useLayerParams(undefined, ["Float", "Integer"]);
    const refInputNumText1 = useRef();
    const refInputNumText2 = useRef();
    const refSelectOperator = useRef();
    const layerManager = useLayerManager();
    const layerState = layerManager.getLayerState();
    const texts = [{value: numText1, setter: setNumText1}, {value: numText2, setter: setNumText2}];

    useEffect(() => {
        setInputRegExp(/^(\+|-)?[0-9]+(\.[0-9]*)?$/, "Float"); // Floatレイヤーに対して正規表現をセット
        setInputRegExp(/^(\+|-)?[0-9]+$/, "Integer"); // Integerレイヤーに対して正規表現をセット
    }, []);


    useEffect(() => {
        const exp = "return (" + numText1 + operatorText + numText2 + ");";
        const expResult = Function(exp)();
        setResult(expResult.toString());
    }, [numText1, numText2, operatorText]);

    useEffectWithLayer(() => {
        if (operatorText === "%") {
            setOperatorText("/");
            refSelectOperator.current.value = "/";
        }
    }, layerState.Float && !layerState.Integer);

    useEffectWithLayer(() => {
        const newNumText1 = numText1.replace(/(\.[0-9]*)$/, "");
        const newNumText2 = numText2.replace(/(\.[0-9]*)$/, "");
        setNumText1(newNumText1);
        setNumText2(newNumText2);
        refInputNumText1.current.value = newNumText1;
        refInputNumText2.current.value = newNumText2;
    }, layerState.Integer && !layerState.Float);

    useEffectWithLayer(() => {
        const resultNum = Math.floor(Number(result));
        setResult(resultNum.toString());
    }, layerState.Integer && !layerState.Float, [result]);

        const onInput = (e) => {
        const str = e.target.value;
        const id = Number(e.target.name);
        if(str.match(getInputRegExp())) {
            texts[id].setter(str);
        } else {
            e.target.value = texts[id].value;
        }
    };

    return (
        <div>
            <input ref={refInputNumText1} name="0" type="text" defaultValue={numText1} onInput={onInput} style={{width: 100}} />
            <font> </font>
            <select ref={refSelectOperator} onChange={(e) => setOperatorText(e.target.value)} style={{width: 40}}>
                <option value="+">+</option>
                <option value="-">-</option>
                <option value="*">*</option>
                <option value="/">/</option>
                <Layer condition={layerState.Integer && !layerState.Float}>
                    <option value="%">%</option>
                </Layer>
            </select>
            <font> </font>
            <input ref={refInputNumText2} name="1" type="text" defaultValue={numText2} onInput={onInput} style={{width: 100}} />
            <br />
            <b>Result: </b>
            <input name="result" type="text" value={result} readOnly={true} style={{width: 200}} />
        </div>
    );
};

export default CalculationPanel;