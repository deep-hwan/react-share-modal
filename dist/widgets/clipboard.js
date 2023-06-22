"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
function URLClipboard() {
    var _a = (0, react_1.useState)(false), isCopy = _a[0], setIsCopy = _a[1];
    function copyToClipboard() {
        navigator.clipboard.writeText(window.location.href);
        setIsCopy(true);
    }
    (0, react_1.useEffect)(function () {
        var timeout = setTimeout(function () {
            setIsCopy(false);
        }, 1500);
        return function () {
            clearTimeout(timeout);
        };
    }, [isCopy]);
    return ((0, jsx_runtime_1.jsxs)("button", __assign({ type: "button", onClick: copyToClipboard, disabled: isCopy === true }, { children: [isCopy ? ((0, jsx_runtime_1.jsx)("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22" }, { children: (0, jsx_runtime_1.jsx)("path", { id: "check-icon", d: "M11,0A11,11,0,1,0,22,11,11,11,0,0,0,11,0m4.72,9.124-5.437,5.439a.92.92,0,0,1-1.3,0L6.263,11.844A.919.919,0,0,1,6.9,10.293a.888.888,0,0,1,.658.248l2.073,2.073L14.42,7.825a.941.941,0,0,1,1.3,0,.919.919,0,0,1,0,1.3", transform: "translate(0.001)", fill: "#5BCA63" }) }))) : ((0, jsx_runtime_1.jsx)("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 22 22" }, { children: (0, jsx_runtime_1.jsxs)("g", __assign({ id: "clip-symbol", transform: "translate(-0.449 -0.382)" }, { children: [(0, jsx_runtime_1.jsx)("circle", { id: "\uD0C0\uC6D0_703", "data-name": "\uD0C0\uC6D0 703", cx: "11", cy: "11", r: "11", transform: "translate(0.449 0.382)", fill: "#aaa" }), (0, jsx_runtime_1.jsx)("g", __assign({ id: "XMLID_221_", transform: "translate(5.689 6.145)" }, { children: (0, jsx_runtime_1.jsx)("path", { id: "XMLID_222_", d: "M1.074,18.239a3.778,3.778,0,0,0,5.184,0l4.5-4.319a2.447,2.447,0,0,0,0-3.556,2.7,2.7,0,0,0-3.7,0L2.925,14.327a1.468,1.468,0,0,0,0,2.134,1.619,1.619,0,0,0,2.222,0l2.718-2.61a.489.489,0,0,0,0-.711.539.539,0,0,0-.741,0l-2.718,2.61a.54.54,0,0,1-.741,0,.489.489,0,0,1,0-.711l4.127-3.964a1.617,1.617,0,0,1,2.222,0,1.468,1.468,0,0,1,0,2.134l-4.5,4.319a2.7,2.7,0,0,1-3.7,0,2.444,2.444,0,0,1,0-3.556l4.5-4.319a.489.489,0,0,0,0-.711.539.539,0,0,0-.741,0l-4.5,4.319a3.422,3.422,0,0,0,0,4.978Z", transform: "translate(0 -8.794)", fill: "#fff" }) }))] })) }))), (0, jsx_runtime_1.jsx)("span", { children: "Copy" })] })));
}
exports.default = URLClipboard;
