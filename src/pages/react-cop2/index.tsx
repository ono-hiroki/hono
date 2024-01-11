import React, {useEffect, useLayoutEffect, useState} from 'react';
import {Layer, LayerProvider} from "../../components";
import {useLayerProvider} from "../../components/providers/LayerProvider/useLayerProvider";
// import LayerSwitchingButton from "../../components/Calculator/LayerSwitchingButton";
import LayerSwitchingButton from "../../components/cop_calculator/LayerSwitchingButton";

const integerLayer = {
    name: "integer",
    isActive: true,
    group: "default",
    params: null,
};
const floatLayer = {
    name: "float",
    isActive: false,
    group: "default",
    params: null,
};
const Index = (props: any) => {
    const layerProvider = useLayerProvider([integerLayer, floatLayer]);
    useEffect(() => {
        layerProvider.setGroupConfig("default", {name: "default", isDuplicate: false});
        // console.log(layerProvider.layers)
    }, []);

    const onClickFloat = () => {
        layerProvider.activeLayer("float");
        layerProvider.activeLayer("integer");
        // layerProvider.inactiveLayer("integer");
        console.log(layerProvider.layers)

    };

    const onClickInteger = () => {
        layerProvider.activeLayer("integer");
        layerProvider.inactiveLayer("float");
    };
    return (
        <LayerProvider>
            <div>
                <br/>

                {/*<CalculationPanel/>*/}
                {/*<br/>*/}
                <div>
                    <Layer condition={layerProvider.getLayer("float").isActive}>
                        <button disabled className={"bg-gray-500 m-2"}>Float</button>
                        <button onClick={onClickInteger}>Integer</button>
                    </Layer>
                    <Layer condition={layerProvider.getLayer("integer").isActive}>
                        <button onClick={onClickFloat}>Float</button>
                        <button disabled className={"bg-gray-500 m-2"}>Integer</button>
                    </Layer>
                </div>
            </div>
        </LayerProvider>
    );
}

export default Index;
