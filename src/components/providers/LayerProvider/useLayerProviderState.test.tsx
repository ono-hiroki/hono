import { act, renderHook } from "@testing-library/react";

import { useLayerProvider } from "./useLayerProvider";

const testLayer = {
  name: "test",
  isActive: false,
  group: "default",
  params: null,
};

describe("addLayer", () => {
  test("レイヤーを追加する", () => {
    const { result } = renderHook(() => useLayerProvider());
    act(() => result.current.addLayer([testLayer]));
    expect(result.current.layers).toEqual([testLayer]);
  });
});

describe("removeLayer", () => {
  test("レイヤーを削除する", () => {
    const { result } = renderHook(() => useLayerProvider([testLayer]));
    act(() => result.current.removeLayer("test"));
    expect(result.current.layers).toHaveLength(0);
  });
});

describe("toggleLayer", () => {
  test("レイヤーのアクティブ状態を切り替える", () => {
    const falseTestLayer = { ...testLayer, isActive: false };
    const { result } = renderHook(() => useLayerProvider([falseTestLayer]));
    act(() => result.current.toggleLayer("test"));
    expect(result.current.layers[0].isActive).toBe(true);
  });
});

describe("activeLayer", () => {
  test("レイヤーをアクティブにする", () => {
    const falseTestLayer = { ...testLayer, isActive: false };
    const { result } = renderHook(() => useLayerProvider([falseTestLayer]));
    act(() => result.current.activeLayer("test"));
    expect(result.current.layers[0].isActive).toBe(true);
  });
});

describe("inactiveLayer", () => {
  test("レイヤーを非アクティブにする", () => {
    const trueTestLayer = { ...testLayer, isActive: true };
    const { result } = renderHook(() => useLayerProvider([trueTestLayer]));
    act(() => result.current.inactiveLayer("test"));
    expect(result.current.layers[0].isActive).toBe(false);
  });
});
describe("setLayerGroup", () => {
  const test1Layer = { ...testLayer, name: "test1" };
  const test2Layer = { ...testLayer, name: "test2" };

  test("レイヤーのグループを設定する", () => {
    const { result } = renderHook(() =>
      useLayerProvider([test1Layer, test2Layer]),
    );
    act(() => result.current.setLayerGroup("test1", "test"));
    act(() => result.current.setLayerGroup("test2", "test2"));
    expect(result.current.layers[0].group).toBe("test");
    expect(result.current.layers[1].group).toBe("test2");
  });

  test("複数のレイヤーのグループを設定する", () => {
    const { result } = renderHook(() =>
      useLayerProvider([test1Layer, test2Layer]),
    );
    act(() => result.current.setLayerGroup(["test1", "test2"], "test"));
    expect(result.current.layers[0].group).toBe("test");
    expect(result.current.layers[1].group).toBe("test");
  });
});

describe("setLayerParams", () => {
  test("レイヤーのパラメータを設定する", () => {
    const { result } = renderHook(() => useLayerProvider([testLayer]));
    act(() => result.current.setLayerParams("test", { test: "fuga" }));
    expect(result.current.layers[0].params).toEqual({ test: "fuga" });
  });
  test("レイヤー名が存在しない場合throwする", () => {
    const { result } = renderHook(() => useLayerProvider([testLayer]));
    expect(() =>
      result.current.setLayerParams("fuga", { test: "fuga" }),
    ).toThrow();
  });
});

describe("evaluateDependencies", () => {
  test("依存関係を評価する", () => {
    const hogeLayer = { ...testLayer, name: "hoge", isActive: true };
    const fugaLayer = { ...testLayer, name: "fuga", isActive: false };
    const zacLayer = { ...testLayer, name: "zac", isActive: true };
    const dioLayer = { ...testLayer, name: "dio", isActive: true };
    const { result } = renderHook(() =>
      useLayerProvider([hogeLayer, fugaLayer, zacLayer, dioLayer]),
    );

    expect(
      result.current.evaluateDependencies({
        type: "OR",
        dependencies: [
          { name: "hoge", dependentType: true },
          { name: "fuga", dependentType: false },
          {
            type: "AND",
            dependencies: [
              { name: "zac", dependentType: true },
              { name: "dio", dependentType: true },
            ],
          },
        ],
      }),
    ).toBe(true);
  });
});

// TODO: テストを増やす
describe("applyDependenciesToAllLayers", () => {
  test("全てのレイヤーに依存関係を適用する", () => {
    const dependedLayer = { ...testLayer, name: "depended", isActive: false };
    const hogeLayer = {
      ...testLayer,
      name: "hoge",
      isActive: true,
      group: "hoge",
    };
    const fugaLayer = { ...testLayer, name: "fuga", isActive: false };
    const zacLayer = { ...testLayer, name: "zac", isActive: true };
    const dioLayer = { ...testLayer, name: "dio", isActive: true };

    // other group
    const otherLayer1 = {
      ...testLayer,
      name: "other1",
      isActive: true,
      group: "other",
    };
    const otherLayer2 = {
      ...testLayer,
      name: "other2",
      isActive: true,
      group: "other",
    };

    const { result } = renderHook(() => useLayerProvider());
    // set group config
    act(() =>
      result.current.setGroupConfig("default", {
        name: "default",
        isDuplicate: false,
      }),
    );
    act(() =>
      result.current.setGroupConfig("hoge", {
        name: "other",
        isDuplicate: false,
      }),
    );
    act(() =>
      result.current.addLayer([
        dependedLayer,
        hogeLayer,
        fugaLayer,
        zacLayer,
        dioLayer,
        otherLayer1,
        otherLayer2,
      ]),
    );

    // hoge | fuga | (zac & dio)
    act(() =>
      result.current.addDependency("depended", {
        type: "OR",
        dependencies: [
          { name: "hoge", dependentType: true },
          { name: "fuga", dependentType: false },
          {
            type: "AND",
            dependencies: [
              { name: "zac", dependentType: true },
              { name: "dio", dependentType: true },
            ],
          },
        ],
      }),
    );
    expect(result.current.layers[0].isActive).toBe(true);
    expect(result.current.layers[5].isActive).toBe(true);
  });
});

describe("setGroupConfig", () => {
  test("グループの設定を変更する", () => {
    const { result } = renderHook(() => useLayerProvider([testLayer]));
    act(() =>
      result.current.setGroupConfig("default", {
        name: "test",
        isDuplicate: false,
      }),
    );
    // console.log(result.current.groupConfigs);
    expect(result.current.groupConfigs[0]).toEqual({
      name: "test",
      isDuplicate: false,
    });
  });
});
