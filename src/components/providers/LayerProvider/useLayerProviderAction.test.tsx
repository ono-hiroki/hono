import { renderHook } from "@testing-library/react";

import { useLayerProvider } from "./useLayerProvider";

const testLayer = {
  name: "test",
  isActive: false,
  group: "default",
  params: null,
};

describe("getActiveLayers", () => {
  test("アクティブなレイヤーを取得する", () => {
    const activeTestLayer = { ...testLayer, isActive: true };
    const { result } = renderHook(() => useLayerProvider([activeTestLayer]));
    expect(result.current.getActiveLayers()).toHaveLength(1);
  });
});
describe("getLayerParam", () => {
  test("レイヤーのパラメータを取得する", () => {
    const paramsTestLayer = { ...testLayer, name: "test", params: "fuga" };
    const { result } = renderHook(() => useLayerProvider([paramsTestLayer]));
    expect(result.current.getLayerParam("test")).toBe("fuga");
  });
  test("レイヤーが存在しない場合はthrowする", () => {
    const { result } = renderHook(() => useLayerProvider());
    expect(() => result.current.getLayerParam("test")).toThrow();
  });
});

describe("getLayersParam", () => {
  test("レイヤーのパラメータを取得する", () => {
    const paramsTestLayer = { ...testLayer, name: "test", params: "fuga1" };
    const paramsTestLayer2 = { ...testLayer, name: "test2", params: "fuga2" };
    const { result } = renderHook(() =>
      useLayerProvider([paramsTestLayer, paramsTestLayer2]),
    );
    expect(result.current.getLayersParam(["test", "test2"])).toStrictEqual([
      "fuga1",
      "fuga2",
    ]);
  });
  test("レイヤーが存在しない場合はthrowする", () => {
    const { result } = renderHook(() => useLayerProvider());
    expect(() => result.current.getLayersParam(["test", "test2"])).toThrow();
  });
});

describe("getAllLayersParams", () => {
  test("全てのレイヤーのパラメータを取得する", () => {
    const paramsTestLayer = {
      ...testLayer,
      isActive: false,
      name: "test1",
      params: "fuga1",
    };
    const paramsTestLayer2 = {
      ...testLayer,
      isActive: true,
      name: "test2",
      params: "fuga2",
    };
    const { result } = renderHook(() =>
      useLayerProvider([paramsTestLayer, paramsTestLayer2]),
    );

    expect(result.current.getAllLayersParams()).toEqual(["fuga1", "fuga2"]);
  });
});

describe("getActiveLayersParams", () => {
  test("アクティブなレイヤーのパラメータを取得する", () => {
    const ActiveParamsTestLayer = {
      ...testLayer,
      isActive: true,
      name: "test",
      params: "fuga1",
    };
    const { result } = renderHook(() =>
      useLayerProvider([ActiveParamsTestLayer]),
    );
    expect(result.current.getActiveLayersParams()).toEqual(["fuga1"]);
  });
});

// TODO: getInactiveLayersParams

describe("getLayersByGroup", () => {
  test("レイヤーのグループを指定してレイヤーを取得する", () => {
    const TestLayer = { ...testLayer, name: "test", group: "hoge" };
    const TestLayer2 = { ...testLayer, name: "test2", group: "default" };
    const TestLayer3 = { ...testLayer, name: "test3", group: "hoge" };
    const { result } = renderHook(() =>
      useLayerProvider([TestLayer, TestLayer2, TestLayer3]),
    );

    expect(result.current.getLayersByGroup("hoge")).toHaveLength(2);
  });
});

describe("getActiveLayersByGroup", () => {
  test("レイヤーのグループを指定してアクティブなレイヤーを取得する", () => {
    const TestLayer = { ...testLayer, name: "test", group: "hoge" };
    const TestLayer2 = { ...testLayer, name: "test2", group: "hoge" };
    const TestLayer3 = {
      ...testLayer,
      name: "test3",
      group: "default",
      isActive: true,
    };
    const TestLayer4 = {
      ...testLayer,
      name: "test4",
      group: "default",
      isActive: false,
    };
    const { result } = renderHook(() =>
      useLayerProvider([TestLayer, TestLayer2, TestLayer3, TestLayer4]),
    );
    expect(result.current.getActiveLayersByGroup("default")).toHaveLength(1);
  });
});

describe("getInactiveLayersByGroup", () => {
  test("レイヤーのグループを指定して非アクティブなレイヤーを取得する", () => {
    const TestLayer = { ...testLayer, name: "test", group: "hoge" };
    const TestLayer2 = { ...testLayer, name: "test2", group: "hoge" };
    const TestLayer3 = {
      ...testLayer,
      name: "test3",
      group: "default",
      isActive: true,
    };
    const TestLayer4 = {
      ...testLayer,
      name: "test4",
      group: "default",
      isActive: false,
    };
    const { result } = renderHook(() =>
      useLayerProvider([TestLayer, TestLayer2, TestLayer3, TestLayer4]),
    );
    expect(result.current.getInactiveLayersByGroup("default")).toHaveLength(1);
  });
});

// TODO: getActiveLayerParamsByGroup
// TODO: getInactiveLayerParamsByGroup
