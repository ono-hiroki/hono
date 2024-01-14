import {
  LayerProvider,
  useLayerState,
  useLayerAction,
} from "./providers/LayerProvider";
import React from "react";

export const Hello = (): void => {
  console.log("Hello");
};
export { LayerProvider };
export { useLayerState, useLayerAction };



const Layer = ({condition, children} : {condition: boolean, children: React.ReactNode}) => {
  if(condition) {
    return(
        <>
          {children}
        </>
    );
  }
  else {
    return(
        <></>
    );
  }
};
export {Layer};