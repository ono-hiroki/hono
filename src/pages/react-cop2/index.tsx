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
        setGroupConfig("default", {name: "default", isDuplicate: true});
        addLayer([integerLayer, floatLayer]);
        console.log(activeLayer)
        console.log('layers')
        console.log(layers)
        console.log('getLayer("float")')
        console.log(getLayer("float"))
    }, []);

    const onClickFloat = () => {
        activeLayer("float");
        inactiveLayer("integer");
    };
    const onClickInteger = () => {
        activeLayer("integer");
        inactiveLayer("float");
    };

    return (
        <LayerProvider>
            <div>
                <br/>

                {/*<CalculationPanel/>*/}
                {/*<br/>*/}
                <div>
                    <Layer condition={getLayer("float").isActive}>
                        <button disabled className={"bg-gray-500 m-2"}>Float</button>
                        <button onClick={onClickInteger}>Integer</button>
                    </Layer>

                    <Layer condition={getLayer("integer").isActive}>
                        <button onClick={onClickFloat}>Float</button>
                        <button disabled className={"bg-gray-500 m-2"}>Integer</button>
                    </Layer>
                </div>
            </div>
        </LayerProvider>
    );
}

export default Index;
