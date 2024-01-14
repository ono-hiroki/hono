import React, {type ReactNode, useState} from "react";

import {
    Dependency,
    DependencyGroup,
    GroupConfig,
    Layer,
    LayerActionContext,
    type Layers,
    LayerStateContext
} from "./LayerContext";
import {useLayerProvider} from "./useLayerProvider";

export {useLayerState, useLayerAction} from "./hooks";

export const LayerProvider: React.FC<{ children: ReactNode }> = ({
                                                                     children,
                                                                 }) => {
    const {
        layers,
        groupConfigs,
        setLayers,
        setGroupConfig,
        addLayer,
        getLayer,
        getActiveLayers,
        getActiveLayersParams,
        getAllLayersParams,
        toggleLayer,
        activeLayer,
        inactiveLayer,
        removeLayer,
        setLayerGroup,
        getLayerParam,
        getLayersParam,
        getLayersByGroup,
        getActiveLayersByGroup,
        getInactiveLayersByGroup,
        evaluateDependencies,
        addDependency,
        applyDependenciesToAllLayers,
        getLayerParamsByGroup,
        setLayerParams,
    } = useLayerProvider();


    return (
        <LayerStateContext.Provider
            value={{
                layers,
                groupConfigs,
                getLayer,
                getActiveLayers,
                getLayerParam,
                getLayersParam,
                getActiveLayersParams,
                getAllLayersParams,
                getLayersByGroup,
                getActiveLayersByGroup,
                getInactiveLayersByGroup,
                getLayerParamsByGroup,
                evaluateDependencies,
                applyDependenciesToAllLayers,
            }}
        >
            <LayerActionContext.Provider
                value={{
                    setLayers,
                    setGroupConfig,
                    addLayer,
                    removeLayer,
                    toggleLayer,
                    activeLayer,
                    inactiveLayer,
                    setLayerParams,
                    setLayerGroup,
                    addDependency,
                }}
            >
                {children}
            </LayerActionContext.Provider>
        </LayerStateContext.Provider>
    );
};
