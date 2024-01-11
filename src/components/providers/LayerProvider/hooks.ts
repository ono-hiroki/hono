import { useContext } from "react";

import {
  LayerStateContext,
  LayerActionHookResult,
  LayerActionContext,
  LayerStateHookResult,
} from "./LayerContext";

export const useLayerState = (): LayerStateHookResult | null =>
  useContext(LayerStateContext);

export const useLayerAction = (): LayerActionHookResult | null =>
  useContext(LayerActionContext);
