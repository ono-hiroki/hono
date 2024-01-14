import React, {useEffect} from 'react';
import {Layer, LayerProvider, useLayerState} from "../../components";
import {useLayerAction} from "../../components";

const integerLayer = {
    name: "integer",
    isActive: false,
    group: "default",
    params: null,
};
const floatLayer = {
    name: "float",
    isActive: true,
    group: "default",
    params: null,
};
const Index = (props: any) => {
    const {activeLayer, inactiveLayer, addLayer, setGroupConfig} = useLayerAction();
    const {getLayer, layers} = useLayerState();

    useEffect(() => {
        setGroupConfig("default", {
            name: "default",
            isDuplicate: false,
        });
        addLayer([integerLayer, floatLayer]);
    }, []);

    useEffect(() => {
        console.log(layers);
    }, [layers]);

    const onClickFloat = () => {
        activeLayer("float");
    };
    const onClickInteger = () => {
        activeLayer("integer");
    };

    return (

        <div>
            <br/>
            aaa
            {/*<CalculationPanel/>*/}
            {/*<br/>*/}
            <div>
                <Layer condition={true}>
                    <button disabled className={"bg-gray-500 m-2"}>Float</button>
                    <button onClick={onClickInteger}>Integer</button>
                </Layer>

                <Layer condition={true}>
                    <button onClick={onClickFloat}>Float</button>
                    <button disabled className={"bg-gray-500 m-2"}>Integer</button>
                </Layer>
            </div>
        </div>

    );
}

export default Index;
