import { useContext } from "react";

import {
  LayerStateContext,
  LayerActionHookResult,
  LayerActionContext,
  LayerStateHookResult,
} from "./LayerContext";

export const useLayerState = (): LayerStateHookResult =>
  useContext(LayerStateContext);

export const useLayerAction = (): LayerActionHookResult =>
  useContext(LayerActionContext);
