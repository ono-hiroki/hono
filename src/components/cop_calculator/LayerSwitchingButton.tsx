import { useLayerProvider } from "../providers/LayerProvider/useLayerProvider";
import { Layer } from "../index";
import {useEffect, useLayoutEffect, useState} from "react";


const LayerSwitchingButton = () => {
    const layerManager = useLayerProvider();
    const [isFloatLayerActive, setIsFloatLayerActive] = useState(false);
    const integerLayer = {
        name: "integer",
        isActive: false,
        group: "default",
        params: null,
    };
    const floatLayer = {
        name: "float",
        isActive: false,
        group: "default",
        params: null,
    };

    useEffect(() => {

        // After useLayoutEffect has run, update the isActive status of the "float" layer
        setIsFloatLayerActive(layerManager.getLayer("float").isActive);
    }, []);




    const layerProvider = useLayerProvider();
    useLayoutEffect(() => {
        layerProvider.addLayer([integerLayer, floatLayer]);
        console.log(layerProvider.layers)
    }, []);

    const onClickFloat = () => {
        layerManager.activeLayer("float");
        layerManager.inactiveLayer("integer");
    };

    const onClickInteger = () => {
        layerManager.activeLayer("integer");
        layerManager.inactiveLayer("float");
    };

    return (
        <div>
            <Layer condition={isFloatLayerActive}>
                <button disabled>Float</button>
                <button onClick={onClickInteger}>Integer</button>
            </Layer>
            <Layer condition={layerManager.getLayer("integer").isActive}>
                <button onClick={onClickFloat}>Float</button>
                <button disabled>Integer</button>
            </Layer>
        </div>
    );
};

export default LayerSwitchingButton;
