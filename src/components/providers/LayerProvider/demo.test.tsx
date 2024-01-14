import { act, renderHook } from "@testing-library/react";

import { useLayerProvider } from "./useLayerProvider";

const integerLayer = {
  name: "integer",
  isActive: false,
  group: "default",
  params: /^(\+|-)?[0-9]+$/,
};

const floatLayer = {
  name: "float",
  isActive: true,
  group: "default",
  params: /^(\+|-)?[0-9]+(\.[0-9]*)?$/,
};

describe("calculator app", () => {
  test("電卓アプリの一連の流れをテストする", () => {
    const { result } = renderHook(() =>
      useLayerProvider([integerLayer, floatLayer]),
    );
    // 初期値の確認
    expect(result.current.getLayer("float").isActive).toBe(true);
    expect(result.current.getLayer("integer").isActive).toBe(false);
    console.log(result.current.layers);
    act(() =>
      result.current.setGroupConfig("default", {
        name: "default",
        isDuplicate: false,
      }),
    );
    act(() => result.current.activeLayer("integer"));
    // レイヤーが排反になっていることを確認
    expect(result.current.getLayer("integer").isActive).toBe(true);
    expect(result.current.getLayer("float").isActive).toBe(false);

    // レイヤーのパラメータを取得する
    expect(result.current.getLayerParam("integer")).toStrictEqual(
      /^(\+|-)?[0-9]+$/,
    );
    expect(result.current.getLayerParam("float")).toStrictEqual(
      /^(\+|-)?[0-9]+(\.[0-9]*)?$/,
    );
    expect("1".match(result.current.getLayerParam("integer"))).toBeTruthy();
    expect("1.2".match(result.current.getLayerParam("integer"))).toBeFalsy();
    expect("1".match(result.current.getLayerParam("float"))).toBeTruthy();
    expect("1.2".match(result.current.getLayerParam("float"))).toBeTruthy();
  });
});
