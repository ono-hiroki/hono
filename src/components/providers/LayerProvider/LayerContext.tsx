import {createContext, Dispatch, SetStateAction} from "react";

export interface Dependency {
    name: string;
    dependentType: boolean; // 依存したい状態
}

export interface DependencyGroup {
    type: "AND" | "OR";
    dependencies: (Dependency | DependencyGroup)[];
}

export interface Layer {
    name: string;
    isActive: boolean; // state
    group: string;
    params: any;
    dependencies?: DependencyGroup;
}

export interface GroupConfig {
    name: string;
    // TODO arrow duplicateにする
    //      true: 重複を許可する
    //      false: 重複を許可しない
    isDuplicate: boolean;
}

export type Layers = Layer[];

export interface LayerStateHookResult {
    layers: Layers;
    getLayer: (name: string) => Layer;
    groupConfigs: GroupConfig[];
    getActiveLayers: () => Layers;
    getLayerParam: (name: string) => any;
    getLayersParam: (names: string[]) => any[];
    getAllLayersParams: () => any;
    getActiveLayersParams: () => any;
    getLayersByGroup: (group: string) => Layers;
    getActiveLayersByGroup: (group: string) => Layers;
    getInactiveLayersByGroup: (group: string) => Layers;
    getLayerParamsByGroup: (group: string) => any;
    evaluateDependencies: (dependencies: DependencyGroup) => boolean;
    applyDependenciesToAllLayers: (layers: Layers) => Layers;
}

export const initialLayerStateHookResult: LayerStateHookResult = {
    layers: [],
    getLayer: () => {
        return {
            name: "",
            isActive: false,
            group: "",
            params: {},
        };
    },
    groupConfigs: [],
    getActiveLayers: () => {
        return [];
    },
    getLayerParam: () => {
        return {};
    },
    getLayersParam: () => {
        return [];
    },
    getAllLayersParams: () => {
        return {};
    },
    getActiveLayersParams: () => {
        return {};
    },
    getLayersByGroup: () => {
        return [];
    },
    getActiveLayersByGroup: () => {
        return [];
    },
    getInactiveLayersByGroup: () => {
        return [];
    },
    getLayerParamsByGroup: () => {
        return {};
    },
    evaluateDependencies: () => {
        return false;
    },
    applyDependenciesToAllLayers: () => {
        return [];
    },
};


export const LayerStateContext = createContext<LayerStateHookResult>(
    initialLayerStateHookResult,
);

export interface LayerActionHookResult {
    setLayers: Dispatch<SetStateAction<Layers>>;
    addLayer: (layers: Layer[]) => void;
    removeLayer: (name: string) => void;
    toggleLayer: (name: string) => void;
    activeLayer: (name: string) => void; // TODO: この関数名は微妙 activateLayerの方がいいかも
    inactiveLayer: (name: string) => void; // TODO: この関数名は微妙 deactivateLayerの方がいいかも
    setLayerParams: (name: string, params: Record<string, any>) => void;
    setGroupConfig: (name: string, config: GroupConfig) => void;
    setLayerGroup: (name: string | string[], group: string) => void;
    addDependency: (name: string, dependencies: DependencyGroup) => void;
}


export const initialLayerActionHookResult: LayerActionHookResult = {
    setLayers: () => {
    },
    addLayer: () => {
    },
    removeLayer: () => {
    },
    toggleLayer: () => {
    },
    activeLayer: () => {
    },
    inactiveLayer: () => {
    },
    setLayerParams: () => {
    },
    setGroupConfig: () => {
    },
    setLayerGroup: () => {
    },
    addDependency: () => {
    }
};

export const LayerActionContext = createContext<LayerActionHookResult>(
    initialLayerActionHookResult,
);
