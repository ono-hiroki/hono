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
    const {activeLayer, addLayer, setGroupConfig} = useLayerAction();
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
        activeLayer("integer");
    };
    const onClickInteger = () => {
        activeLayer("float");
    };

    return (

        <div>
            <br/>
            aaa
            {/*<CalculationPanel/>*/}
            {/*<br/>*/}
            <div>
                <Layer condition={getLayer("integer")?.isActive}>
                    <button onClick={onClickInteger}>Integer</button>
                </Layer>

                <Layer condition={getLayer("float")?.isActive}>
                    <button onClick={onClickFloat}>Float</button>
                </Layer>
            </div>
        </div>

    );
}

export default Index;
