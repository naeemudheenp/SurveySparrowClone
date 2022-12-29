var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  DeviceEmulator: () => DeviceEmulator,
  DeviceFrameset: () => DeviceFrameset,
  DeviceOptions: () => DeviceOptions,
  DeviceSelector: () => DeviceSelector,
  Zoomable: () => Zoomable
});

// src/DeviceFrameset.tsx
var import_react = __toESM(require("react"));

// src/DeviceOptions.ts
var defineDevice = (definition) => definition;
var DeviceOptions = {
  ["iPhone X"]: defineDevice({
    device: "iphone-x",
    colors: [],
    hasLandscape: true,
    width: 375,
    height: 812
  }),
  ["iPhone 8"]: defineDevice({
    device: "iphone8",
    colors: ["black", "silver", "gold"],
    hasLandscape: true,
    width: 375,
    height: 667
  }),
  ["iPhone 8 Plus"]: defineDevice({
    device: "iphone8plus",
    colors: ["black", "silver", "gold"],
    hasLandscape: true,
    width: 414,
    height: 736
  }),
  ["iPhone 5s"]: defineDevice({
    device: "iphone5s",
    colors: ["black", "silver", "gold"],
    hasLandscape: true,
    width: 320,
    height: 568
  }),
  ["iPhone 5c"]: defineDevice({
    device: "iphone5c",
    colors: ["white", "red", "yellow", "green", "blue"],
    hasLandscape: true,
    width: 320,
    height: 568
  }),
  ["iPhone 4s"]: defineDevice({
    device: "iphone4s",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 320,
    height: 480
  }),
  ["Galaxy Note 8"]: defineDevice({
    device: "note8",
    colors: [],
    hasLandscape: true,
    width: 400,
    height: 822
  }),
  ["Nexus 5"]: defineDevice({
    device: "nexus5",
    colors: [],
    hasLandscape: true,
    width: 320,
    height: 568
  }),
  ["Lumia 920"]: defineDevice({
    device: "lumia920",
    colors: ["black", "white", "yellow", "red", "blue"],
    hasLandscape: true,
    width: 320,
    height: 533
  }),
  ["Samsung Galaxy S5"]: defineDevice({
    device: "s5",
    colors: ["white", "black"],
    hasLandscape: true,
    width: 320,
    height: 568
  }),
  ["HTC One"]: defineDevice({
    device: "nexus5",
    colors: [],
    hasLandscape: true,
    width: 320,
    height: 568
  }),
  ["iPad Mini"]: defineDevice({
    device: "ipad",
    colors: ["black", "silver"],
    hasLandscape: true,
    width: 576,
    height: 768
  }),
  ["MacBook Pro"]: defineDevice({
    device: "macbook",
    colors: [],
    hasLandscape: false,
    width: 960,
    height: 600
  })
};
var DeviceNames = Object.keys(DeviceOptions);

// src/DeviceFrameset.tsx
function omit(item, keys) {
  const clone = __spreadValues({}, item);
  for (const key of keys) {
    delete clone[key];
  }
  return clone;
}
var DeviceFrameset = import_react.default.memo(function DeviceFrameset2(props) {
  const _a = props, { children, device, width, height, zoom } = _a, restProps = __objRest(_a, ["children", "device", "width", "height", "zoom"]);
  const divProps = omit(restProps, ["landscape", "color"]);
  const color = "color" in props ? props.color : void 0;
  const landscape = "landscape" in props ? props.landscape : void 0;
  const style = (0, import_react.useMemo)(() => landscape && DeviceOptions[device].hasLandscape ? { width: height, height: width, transform: zoom !== void 0 ? `scale(${zoom})` : void 0 } : { width, height, transform: zoom !== void 0 ? `scale(${zoom})` : void 0 }, [width, height, landscape, device, zoom]);
  return /* @__PURE__ */ import_react.default.createElement("div", __spreadProps(__spreadValues({
    className: `marvel-device ${DeviceOptions[device].device} ${color ? color : ""} ${landscape ? "landscape" : ""}`
  }, divProps), {
    style
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "inner"
  }), device === "Galaxy Note 8" ? /* @__PURE__ */ import_react.default.createElement("div", {
    className: "overflow"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "shadow"
  })) : null, device === "iPhone X" ? /* @__PURE__ */ import_react.default.createElement("div", {
    className: "notch"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "camera"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "speaker"
  })) : null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "top-bar"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "sleep"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "bottom-bar"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "volume"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "camera"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "sensor"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "speaker"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "sensors"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "more-sensors"
  }), device === "iPhone X" ? /* @__PURE__ */ import_react.default.createElement("div", {
    className: "overflow"
  }, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "shadow shadow--tr"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "shadow shadow--tl"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "shadow shadow--br"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "shadow shadow--bl"
  })) : null, /* @__PURE__ */ import_react.default.createElement("div", {
    className: "inner-shadow"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "screen"
  }, children), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "home"
  }), /* @__PURE__ */ import_react.default.createElement("div", {
    className: "bottom-bar"
  }));
});

// src/DeviceSelector.tsx
var import_react2 = __toESM(require("react"));
var DeviceSelector = import_react2.default.memo(function DeviceSelector2(_a) {
  var _b = _a, { children, value, onChange, banDevices = [] } = _b, divProps = __objRest(_b, ["children", "value", "onChange", "banDevices"]);
  var _a2;
  const deviceNames = (0, import_react2.useMemo)(() => DeviceNames.filter((devName) => !banDevices.includes(devName)), [banDevices]);
  const [deviceName, setDeviceName] = (0, import_react2.useState)((_a2 = deviceNames[0]) != null ? _a2 : "");
  const selectedDeviceName = (0, import_react2.useMemo)(() => value != null ? value : deviceName, [value, deviceName]);
  const handleSelectChange = (0, import_react2.useCallback)((event) => {
    const newDeviceName = event.currentTarget.dataset["deviceName"];
    if (!deviceNames.includes(newDeviceName))
      throw new Error(`Invalid device name for ${newDeviceName}`);
    onChange == null ? void 0 : onChange(newDeviceName);
    setDeviceName(newDeviceName);
  }, [deviceNames, onChange]);
  const [showMenu, setShowMenu] = (0, import_react2.useState)(true);
  const { colors, hasLandscape, width, height } = (0, import_react2.useMemo)(() => DeviceOptions[selectedDeviceName], [selectedDeviceName]);
  const firstColor = (0, import_react2.useMemo)(() => colors[0], [colors]);
  const [selectedColor, setSelectedColor] = (0, import_react2.useState)(firstColor);
  const handleColorChange = (0, import_react2.useCallback)((event) => {
    const newDeviceColor = event.currentTarget.dataset["deviceColor"];
    setSelectedColor(newDeviceColor);
  }, []);
  (0, import_react2.useEffect)(() => {
    setSelectedColor(firstColor);
  }, [firstColor]);
  const [isLandscape, setIsLandscape] = (0, import_react2.useState)(void 0);
  const isLandscapeChecked = (0, import_react2.useMemo)(() => hasLandscape ? isLandscape : void 0, [hasLandscape, isLandscape]);
  const handleIsLandscapeChange = (0, import_react2.useCallback)(() => {
    if (!hasLandscape)
      return;
    setIsLandscape((is) => !is);
  }, [hasLandscape]);
  const deviceFramesetProps = (0, import_react2.useMemo)(() => ({
    device: selectedDeviceName,
    color: selectedColor,
    landscape: isLandscapeChecked,
    width,
    height
  }), [selectedDeviceName, selectedColor, isLandscapeChecked, width, height]);
  return /* @__PURE__ */ import_react2.default.createElement("div", __spreadValues({
    className: "device-selector"
  }, divProps), /* @__PURE__ */ import_react2.default.createElement("dl", null, /* @__PURE__ */ import_react2.default.createElement("dt", null, /* @__PURE__ */ import_react2.default.createElement("p", null, "The Chosen: ", selectedDeviceName), /* @__PURE__ */ import_react2.default.createElement("span", {
    className: showMenu ? "active" : "",
    onClick: () => setShowMenu((is) => !is)
  }, "show all devices")), showMenu && deviceNames.map((devName) => /* @__PURE__ */ import_react2.default.createElement("dd", {
    key: devName,
    "data-device-name": devName,
    onClick: handleSelectChange,
    className: devName === selectedDeviceName ? "active" : ""
  }, /* @__PURE__ */ import_react2.default.createElement("input", {
    type: "radio",
    id: devName
  }), /* @__PURE__ */ import_react2.default.createElement("label", {
    htmlFor: devName
  }, /* @__PURE__ */ import_react2.default.createElement("div", null, /* @__PURE__ */ import_react2.default.createElement("p", null, devName), DeviceOptions[devName].hasLandscape && /* @__PURE__ */ import_react2.default.createElement("span", {
    className: devName === deviceName && isLandscape ? "active" : "",
    onClick: handleIsLandscapeChange
  }, "landscape")), /* @__PURE__ */ import_react2.default.createElement("ul", null, DeviceOptions[devName].colors.map((color) => /* @__PURE__ */ import_react2.default.createElement("li", {
    key: color,
    title: color,
    "data-device-color": color,
    onClick: handleColorChange,
    className: [devName === deviceName && color === selectedColor ? "active" : "", color].join(" ")
  }))))))), /* @__PURE__ */ import_react2.default.createElement("div", {
    className: "device-selector-container"
  }, children(deviceFramesetProps)));
});

// src/DeviceEmulator.tsx
var import_react3 = __toESM(require("react"));
var zooms = [
  0.5,
  0.75,
  1,
  1.25,
  1.5
];
var DeviceEmulator = import_react3.default.memo(function DeviceEmulator2(_a) {
  var _b = _a, { children, value, onChange, banDevices = [] } = _b, divProps = __objRest(_b, ["children", "value", "onChange", "banDevices"]);
  var _a2;
  const deviceNames = (0, import_react3.useMemo)(() => DeviceNames.filter((devName) => !banDevices.includes(devName)), [banDevices]);
  const [deviceName, setDeviceName] = (0, import_react3.useState)((_a2 = deviceNames[0]) != null ? _a2 : "");
  const selectedDeviceName = (0, import_react3.useMemo)(() => {
    var _a3;
    return (_a3 = value == null ? void 0 : value.device) != null ? _a3 : deviceName;
  }, [value, deviceName]);
  const handleSelectChange = (0, import_react3.useCallback)((event) => {
    const newDeviceName = event.target.value;
    if (!deviceNames.includes(newDeviceName))
      throw new Error(`Invalid device name for ${newDeviceName}`);
    setDeviceName(newDeviceName);
  }, [deviceNames]);
  const [selectedZoom, setSelectedZoom] = (0, import_react3.useState)(zooms[2]);
  const handleSelectZoomChange = (0, import_react3.useCallback)((event) => {
    const newZoom = +event.target.value;
    if (!zooms.includes(newZoom))
      throw new Error(`Invalid device zoom for ${newZoom}`);
    setSelectedZoom(newZoom);
  }, []);
  const { colors, hasLandscape, width, height } = (0, import_react3.useMemo)(() => DeviceOptions[selectedDeviceName], [selectedDeviceName]);
  const firstColor = (0, import_react3.useMemo)(() => colors[0], [colors]);
  const [isLandscape, setIsLandscape] = (0, import_react3.useState)(void 0);
  const isLandscapeChecked = (0, import_react3.useMemo)(() => hasLandscape ? isLandscape : void 0, [hasLandscape, isLandscape]);
  const handleIsLandscapeChange = (0, import_react3.useCallback)(() => {
    if (!hasLandscape)
      return;
    setIsLandscape((is) => !is);
  }, [hasLandscape]);
  const deviceFramesetProps = (0, import_react3.useMemo)(() => value != null ? value : {
    device: selectedDeviceName,
    color: firstColor,
    landscape: isLandscapeChecked,
    width,
    height,
    zoom: selectedZoom
  }, [value, selectedDeviceName, firstColor, isLandscapeChecked, width, height, selectedZoom]);
  (0, import_react3.useEffect)(() => {
    onChange == null ? void 0 : onChange(deviceFramesetProps);
  }, [onChange, deviceFramesetProps]);
  return /* @__PURE__ */ import_react3.default.createElement("div", __spreadValues({
    className: "device-emulator"
  }, divProps), /* @__PURE__ */ import_react3.default.createElement("section", null, /* @__PURE__ */ import_react3.default.createElement("select", {
    value: selectedDeviceName,
    onChange: handleSelectChange
  }, deviceNames.map((devName) => /* @__PURE__ */ import_react3.default.createElement("option", {
    key: devName,
    value: devName
  }, devName))), /* @__PURE__ */ import_react3.default.createElement("input", {
    disabled: true,
    value: width
  }), /* @__PURE__ */ import_react3.default.createElement("span", null, "x"), /* @__PURE__ */ import_react3.default.createElement("input", {
    disabled: true,
    value: height
  }), /* @__PURE__ */ import_react3.default.createElement("select", {
    value: selectedZoom,
    onChange: handleSelectZoomChange
  }, zooms.map((zoom) => /* @__PURE__ */ import_react3.default.createElement("option", {
    key: zoom,
    value: zoom
  }, zoom * 100, "%"))), /* @__PURE__ */ import_react3.default.createElement("label", null, "Landscape:"), /* @__PURE__ */ import_react3.default.createElement("input", {
    type: "checkbox",
    checked: !!isLandscapeChecked,
    disabled: !hasLandscape,
    onChange: handleIsLandscapeChange
  })), /* @__PURE__ */ import_react3.default.createElement("div", {
    className: "device-emulator-container"
  }, children(deviceFramesetProps)));
});

// src/Zoomable.tsx
var import_react4 = __toESM(require("react"));
var steps = [
  0,
  1 / 4,
  1 / 3,
  1 / 2,
  2 / 3,
  3 / 4,
  4 / 5,
  9 / 10,
  1,
  11 / 10,
  5 / 4,
  3 / 2,
  7 / 4,
  2 / 1,
  5 / 2,
  3 / 1,
  4 / 1,
  5 / 1,
  Infinity
];
var toCurrIndex = (value) => steps.findIndex((step) => step > value) - 1;
var toPrevIndex = (value) => steps.findIndex((step) => step > value) - 2;
var toNextIndex = (value) => steps.findIndex((step) => step > value);
var checkReachBound = (value) => {
  if (value === steps[0])
    return steps[1];
  if (value === steps[steps.length - 1])
    return steps[steps.length - 2];
  return value;
};
var toCurr = (value) => {
  return checkReachBound(steps[toCurrIndex(value)]);
};
var toPrev = (value) => {
  return checkReachBound(steps[toPrevIndex(value)]);
};
var toNext = (value) => {
  return checkReachBound(steps[toNextIndex(value)]);
};
var Zoomable = import_react4.default.memo(function Zoomable2(_a) {
  var _b = _a, {
    children
  } = _b, props = __objRest(_b, [
    "children"
  ]);
  const [[width, height], setSize] = (0, import_react4.useState)([1, 1]);
  const [[clientWidth, clientHeight], setClientSize] = (0, import_react4.useState)([width, height]);
  const [container, setContainer] = (0, import_react4.useState)(null);
  const [zoomContainer, setZoomContainer] = (0, import_react4.useState)(null);
  const scale = (0, import_react4.useMemo)(() => {
    const [scaleX, scaleY] = [width / clientWidth, height / clientHeight];
    return Math.min(scaleX, scaleY, 1);
  }, [width, height, clientWidth, clientHeight]);
  const [localScale, setLocaleScale] = (0, import_react4.useState)(null);
  const realScale = (0, import_react4.useMemo)(() => toCurr(localScale != null ? localScale : scale), [localScale, scale]);
  const allowScroll = (0, import_react4.useMemo)(() => clientWidth / realScale < width || clientHeight / realScale < height, [clientHeight, clientWidth, realScale, width, height]);
  const transformStyle = (0, import_react4.useMemo)(() => {
    return { transform: `scale(${realScale})` };
  }, [realScale]);
  (0, import_react4.useEffect)(() => {
    if (zoomContainer) {
      const syncClientSize = (el) => {
        const { clientWidth: clientWidth2, clientHeight: clientHeight2 } = el;
        clientWidth2 && clientHeight2 && setClientSize([clientWidth2, clientHeight2]);
      };
      syncClientSize(zoomContainer);
      const option = {};
      const observe = (entries) => {
        for (const entry of entries) {
          syncClientSize(entry.target);
        }
      };
      const observer = new ResizeObserver(observe);
      observer.observe(zoomContainer, option);
      return () => observer.disconnect();
    }
  }, [zoomContainer]);
  (0, import_react4.useEffect)(() => {
    if (container) {
      const { clientWidth: clientWidth2, clientHeight: clientHeight2 } = container;
      setSize([clientWidth2, clientHeight2]);
    }
  }, [container]);
  return /* @__PURE__ */ import_react4.default.createElement("div", __spreadProps(__spreadValues({}, props), {
    style: __spreadProps(__spreadValues({}, props.style), { position: "relative" })
  }), /* @__PURE__ */ import_react4.default.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      overflow: allowScroll ? "auto" : "hidden"
    },
    ref: setContainer
  }, /* @__PURE__ */ import_react4.default.createElement("div", {
    ref: setZoomContainer,
    style: __spreadValues({ transformOrigin: "center" }, transformStyle)
  }, children)), /* @__PURE__ */ import_react4.default.createElement("div", {
    style: { position: "absolute", right: "16px", top: "16px" }
  }, /* @__PURE__ */ import_react4.default.createElement("span", {
    onClick: () => setLocaleScale(toPrev(realScale))
  }, "-"), Math.round(realScale * 100), "%", /* @__PURE__ */ import_react4.default.createElement("span", {
    onClick: () => setLocaleScale(toNext(realScale))
  }, "+")));
});
module.exports = __toCommonJS(src_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  DeviceEmulator,
  DeviceFrameset,
  DeviceOptions,
  DeviceSelector,
  Zoomable
});
