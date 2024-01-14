import React, { createContext, useState, useContext } from "react";
import colorData from "./color-data.json";


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

export default function ColorProvider({ children }: any) {
    const [layers, setLayers] = useState<Layers>([]);
    const [groupConfigs, setGroupConfigs] = useState<GroupConfig[]>([]);


    // LayerStateHookResult
    const getLayer = (name: string): Layer => {
        if (!layers.some((layer) => layer.name === name))
            throw new Error("layer name is not found");
        return layers.find((layer) => layer.name === name)!;
    };
    const getActiveLayers = (): Layers => {
        const activeLayers = layers.filter((layer) => layer.isActive);
        if (activeLayers.length === 0) return [];
        return activeLayers;
    };
    const getActiveLayersParams = (): any[] => {
        return layers
            .filter((layer) => layer.isActive)
            .map((layer) => layer.params);
    };
    const getAllLayersParams = (): any[] => {
        return layers.map((layer) => layer.params);
    };
    const getLayerParam = (name: string): any => {
        const targetLayer: Layer | undefined = layers.find(
            (layer) => layer.name === name,
        );
        if (!targetLayer) throw new Error("layer name is not found");
        return targetLayer.params;
    };

    const getLayersParam = (names: string[]): any => {
        if (!names.every((name) => layers.some((layer) => layer.name === name)))
            throw new Error("layer name is not found");
        const targetLayers: Layer[] = layers.filter((layer) =>
            names.includes(layer.name),
        );
        return targetLayers.map((layer) => layer.params);
    };

    const getLayersByGroup = (group: string): Layers => {
        if (!layers.some((layer) => layer.group === group))
            throw new Error("layer group is not found");
        return layers.filter((layer) => layer.group === group);
    };
    const getActiveLayersByGroup = (group: string): Layers => {
        if (!layers.some((layer) => layer.group === group))
            throw new Error("layer group is not found");
        return layers.filter((layer) => layer.isActive && layer.group === group);
    };
    const getInactiveLayersByGroup = (group: string): Layers => {
        if (!layers.some((layer) => layer.group === group))
            throw new Error("layer group is not found");
        return layers.filter((layer) => !layer.isActive && layer.group === group);
    };

    // TODO: LayerActionHookResultのunresolvedLayersに入れる関数を作る。
    //       その関数をテストする
    //       その関数を使って、addLayer, removeLayer, toggleLayer, activeLayer, inactiveLayerを作る
    //       しらんけど
    // LayerActionHookResult
    const addLayer = (newLayers: Layer[]): void => {
        const unresolvedLayers = [...layers, ...newLayers];

        const resolvedLayers = applyDependenciesToAllLayers(unresolvedLayers);
        setLayers(resolvedLayers);
    };

    const removeLayer = (name: string): void => {
        if (!layers.some((layer) => layer.name === name))
            throw new Error("layer name is not found");
        const unresolvedLayers = layers.filter((layer) => layer.name !== name);

        const resolvedLayers = applyDependenciesToAllLayers(unresolvedLayers);
        setLayers(resolvedLayers);
    };
    const toggleLayer = (name: string): void => {
        if (!layers.some((layer) => layer.name === name))
            throw new Error("layer name is not found");

        const unresolvedLayers = layers.map((layer) => {
            if (layer.name === name) {
                return {
                    ...layer,
                    isActive: !layer.isActive,
                };
            } else {
                return layer;
            }
        });
        const resolvedLayers = applyDependenciesToAllLayers(unresolvedLayers);
        setLayers(resolvedLayers);
    };
    const activeLayer = (name: string): void => {
        if (!layers.some((layer) => layer.name === name))
            throw new Error("layer name is not found");

        let unresolvedLayers = layers.map((layer) => {
            if (layer.name === name) {
                return { ...layer, isActive: true };
            } else {
                return layer;
            }
        });

        // もしactiveLayerのlayerが重複を許可していない場合、他のレイヤーを非活性化する
        const group = layers.find((layer) => layer.name === name)?.group;
        const groupConfig = groupConfigs.find(
            (groupConfig) => groupConfig.name === group,
        );
        const isDuplicate = groupConfig?.isDuplicate ?? true; // グループ設定がない場合は重複を許可する

        if (!isDuplicate) {
            unresolvedLayers = unresolvedLayers.map((layer) => {
                if (layer.group === group && layer.name !== name) {
                    return {
                        ...layer,
                        isActive: false,
                    };
                } else {
                    return layer;
                }
            });
        }

        const resolvedLayers = applyDependenciesToAllLayers(unresolvedLayers);
        setLayers(resolvedLayers);
    };
    const inactiveLayer = (name: string): void => {
        if (!layers.some((layer) => layer.name === name))
            throw new Error("layer name is not found");

        const unresolvedLayers = layers.map((layer) => {
            if (layer.name === name) {
                return { ...layer, isActive: false };
            } else {
                return layer;
            }
        });
        const resolvedLayers = applyDependenciesToAllLayers(unresolvedLayers);
        setLayers(resolvedLayers);
    };
    const setLayerGroup = (names: string | string[], group: string): void => {
        if (typeof names === "string") names = [names];
        if (!layers.some((layer) => names.includes(layer.name)))
            throw new Error("layer name is not found");

        const unresolvedLayers = layers.map((layer) => {
            if (names.includes(layer.name)) {
                return {
                    ...layer,
                    group,
                };
            } else {
                return layer;
            }
        });
        const resolvedLayers = applyDependenciesToAllLayers(unresolvedLayers);
        setLayers(resolvedLayers);
    };
    const setGroupConfig = (name: string, config: GroupConfig): void => {
        if (!groupConfigs.some((groupConfig) => groupConfig.name === name)) {
            setGroupConfigs([...groupConfigs, config]);
        } else {
            setGroupConfigs(
                groupConfigs.map((groupConfig) => {
                    if (groupConfig.name === name) {
                        return config;
                    } else {
                        return groupConfig;
                    }
                }),
            );
        }
    };
    const setLayerParams = (name: string, params: Record<string, any>): void => {
        if (!layers.some((layer) => layer.name === name))
            throw new Error("layer name is not found");

        setLayers(
            layers.map((layer) => {
                if (layer.name === name) {
                    return {
                        ...layer,
                        params,
                    };
                } else {
                    return layer;
                }
            }),
        );
    };

    const addDependency = (name: string, dependencies: DependencyGroup): void => {
        if (!layers.some((layer) => layer.name === name))
            throw new Error("layer name is not found");

        const unresolvedLayers = layers.map((layer) => {
            if (layer.name === name) {
                return {
                    ...layer,
                    dependencies,
                };
            } else {
                return layer;
            }
        });
        const resolvedLayers = applyDependenciesToAllLayers(unresolvedLayers);
        setLayers(resolvedLayers);
    };
    const getLayerParamsByGroup = (group: string): any[] => {
        if (!layers.some((layer) => layer.group === group))
            throw new Error("layer group is not found");

        return layers
            .filter((layer) => layer.group === group)
            .map((layer) => layer.params);
    };
    // true: 依存関係を満たしている
    // false: 依存関係を満たしていない
    const evaluateDependencies = (dependencies: DependencyGroup): boolean => {
        const { type, dependencies: deps } = dependencies;
        if (type === "OR") {
            return deps.some(evaluateDependency);
        } else if (type === "AND") {
            return deps.every(evaluateDependency);
        } else {
            console.error("dependency type is invalid");
            return false;
        }
    };
    // true: 依存関係を満たしている
    // false: 依存関係を満たしていない
    const evaluateDependency = (dep: Dependency | DependencyGroup): boolean => {
        if ("dependencies" in dep) {
            return evaluateDependencies(dep);
        } else {
            const layer = layers.find((layer) => layer.name === dep.name);
            if (!layer) {
                console.error("layer name is not found");
                return false;
            }
            // レイヤーの状態が依存したい状態と一致しているかどうか
            return layer.isActive === dep.dependentType;
        }
    };

    const applyDependenciesToAllLayers = (layers: Layers): Layers => {
        let newLayers = layers;

        while (true) {
            const isAppliedDependencies = newLayers.filter((layer) => {
                const applyLayer = checkDependencies(layer);
                return applyLayer !== false; // false以外の要素だけを残す
            });

            const firstLayer = isAppliedDependencies[0]; // layer | undefined

            // undefinedの場合は、もう依存関係を適用するレイヤがないので終了する
            if (firstLayer === undefined) break;

            newLayers = newLayers.map((layer) => {
                if (layer.name === firstLayer.name) {
                    return {
                        ...layer,
                        isActive: true,
                    };
                } else {
                    return layer;
                }
            });

            // 依存を適用したレイヤのグループ設定がある場合、グループ設定を適用する
            const group = firstLayer.group;
            const groupConfig = groupConfigs.find(
                (groupConfig) => groupConfig.name === group,
            );
            const isDuplicate = groupConfig?.isDuplicate ?? true; // グループ設定がない場合は重複を許可する
            // falseの場合は、重複してはいけないので、他のレイヤを非活性化する
            if (!isDuplicate) {
                newLayers = newLayers.map((layer) => {
                    if (layer.name === firstLayer.name) {
                        return layer;
                    } else if (layer.group === group) {
                        return {
                            ...layer,
                            isActive: false,
                        };
                    } else {
                        return layer;
                    }
                });
            }

            // すべてのgroupConfigを確認して、重複を許可しているかどうかを確認し
            // 重複を許可していない場合は、最初のレイヤのみを活性化する
            groupConfigs.forEach((groupConfig) => {
                const isDuplicate = groupConfig.isDuplicate;
                if (!isDuplicate) {
                    // falseが重複を許可しない
                    // groupのレイヤーをすべて取得
                    const groupLayers = newLayers.filter(
                        (layer) => layer.group === groupConfig.name,
                    );
                    // もし活性化しているレイヤーが一つのみなら、何もしない
                    const activeLayers = groupLayers.filter((layer) => layer.isActive);
                    if (activeLayers.length === 1) return;

                    // そうでない場合は、最初のレイヤーのみを活性化し
                    // 他のレイヤーを非活性化する
                    const firstLayer = groupLayers[0];
                    newLayers = newLayers.map((layer) => {
                        if (layer.name === firstLayer.name) {
                            return {
                                ...layer,
                                isActive: true,
                            };
                        } else if (layer.group === groupConfig.name) {
                            return {
                                ...layer,
                                isActive: false,
                            };
                        } else {
                            return layer;
                        }
                    });
                }
            });
        }
        return newLayers;
    };

    const checkDependencies = (applyLayer: Layer): Layer | false => {
        if (!applyLayer.dependencies) return false;
        const isActive = evaluateDependencies(applyLayer.dependencies);
        if (isActive === applyLayer.isActive) return false;
        return applyLayer;
    };

    const ColorContext = createContext(
        {
            layers,
            groupConfigs,
            getLayer,
            getActiveLayers,
            getActiveLayersParams,
            getAllLayersParams,
            getLayerParam,
            getLayersParam,
            getLayersByGroup,
            getActiveLayersByGroup,
            getInactiveLayersByGroup,
            getLayerParamsByGroup,
            evaluateDependencies,

            setLayers,
            addLayer,
            removeLayer,
            toggleLayer,
            activeLayer,
            inactiveLayer,
            setLayerGroup,
            setGroupConfig,
            setLayerParams,
            addDependency,
            applyDependenciesToAllLayers
        }
    );



    return (
        <ColorContext.Provider value={{
            layers,
            groupConfigs,
            getLayer,
            getActiveLayers,
            getActiveLayersParams,
            getAllLayersParams,
            getLayerParam,
            getLayersParam,
            getLayersByGroup,
            getActiveLayersByGroup,
            getInactiveLayersByGroup,
            getLayerParamsByGroup,
            evaluateDependencies,

            setLayers,
            addLayer,
            removeLayer,
            toggleLayer,
            activeLayer,
            inactiveLayer,
            setLayerGroup,
            setGroupConfig,
            setLayerParams,
            addDependency,
            applyDependenciesToAllLayers}}>
            {children}
        </ColorContext.Provider>
    );
}
