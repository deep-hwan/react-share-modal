"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_indiana_drag_scroll_1 = __importDefault(require("react-indiana-drag-scroll"));
var react_share_1 = require("react-share");
var icons_1 = require("./icons");
var styled_1 = __importDefault(require("@emotion/styled"));
var clipboard_1 = __importDefault(require("./clipboard"));
function ShareModal(props) {
    var view = props.view, onCancel = props.onCancel, theme = props.theme, children = props.children, lang = props.lang;
    var _a = (0, react_1.useState)(""), currentUrl = _a[0], setCurrentUrl = _a[1];
    var ref = (0, react_1.useRef)(null);
    var clickModalOutside = function (event) {
        if (view && ref.current && !ref.current.contains(event.target)) {
            onCancel();
        }
    };
    (0, react_1.useEffect)(function () {
        var _a;
        (_a = ref.current) === null || _a === void 0 ? void 0 : _a.scrollTo(0, 0);
        if (view) {
            document.body.style.overflowY = "hidden";
        }
        else {
            document.body.style.overflowY = "auto";
        }
        document.addEventListener("mousedown", clickModalOutside);
        return function () {
            document.removeEventListener("mousedown", clickModalOutside);
        };
    }, [view]);
    (0, react_1.useEffect)(function () {
        var url = window.location.href;
        setCurrentUrl(url);
    }, []);
    return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(Layer, { isActive: view }), (0, jsx_runtime_1.jsx)(Wrap, __assign({ isActive: view }, { children: (0, jsx_runtime_1.jsxs)(Box, __assign({ ref: ref, theme: theme }, { children: [(0, jsx_runtime_1.jsx)(Title, __assign({ theme: theme }, { children: lang === "ko" ? "공유하기" : "SHARE" })), (0, jsx_runtime_1.jsx)(CancelTab, __assign({ type: "button", onClick: onCancel }, { children: (0, jsx_runtime_1.jsxs)("svg", __assign({ viewBox: "0 0 22 22", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, { children: [(0, jsx_runtime_1.jsx)("path", { d: "M11 22.018C17.0751 22.018 22 17.0931 22 11.018C22 4.94287 17.0751 0.0180054 11 0.0180054C4.92487 0.0180054 0 4.94287 0 11.018C0 17.0931 4.92487 22.018 11 22.018Z", fill: theme === "dark" ? "#999" : "#fff" }), (0, jsx_runtime_1.jsx)("path", { d: "M18.779 3.239C17.2407 1.70058 15.2807 0.652879 13.1468 0.228401C11.013 -0.196076 8.80128 0.021732 6.79127 0.854281C4.78125 1.68683 3.06326 3.09673 1.85454 4.90568C0.645823 6.71463 0.000671387 8.84139 0.000671387 11.017C0.000671387 13.1926 0.645823 15.3194 1.85454 17.1283C3.06326 18.9373 4.78125 20.3472 6.79127 21.1797C8.80128 22.0123 11.013 22.2301 13.1468 21.8056C15.2807 21.3811 17.2407 20.3334 18.779 18.795C20.8418 16.7321 22.0007 13.9343 22.0007 11.017C22.0007 8.09971 20.8418 5.30189 18.779 3.239ZM13.217 14.524L11.001 12.308L8.78302 14.525C8.61087 14.6915 8.38017 14.7838 8.14065 14.7818C7.90114 14.7798 7.67199 14.6838 7.50262 14.5144C7.33325 14.345 7.23722 14.1159 7.23524 13.8764C7.23326 13.6369 7.32548 13.4062 7.49202 13.234L9.71002 11.016L7.49702 8.803C7.33048 8.63085 7.23826 8.40015 7.24024 8.16063C7.24222 7.92112 7.33825 7.69197 7.50762 7.5226C7.67699 7.35323 7.90613 7.25721 8.14565 7.25522C8.38517 7.25324 8.61587 7.34546 8.78802 7.512L11.001 9.726L13.214 7.513C13.3861 7.34871 13.6157 7.25828 13.8536 7.26105C14.0916 7.26382 14.319 7.35956 14.4872 7.52781C14.6555 7.69606 14.7512 7.92346 14.754 8.16139C14.7567 8.39932 14.6663 8.62888 14.502 8.801L12.289 11.014L14.507 13.23C14.6736 13.4022 14.7658 13.6329 14.7638 13.8724C14.7618 14.1119 14.6658 14.341 14.4964 14.5104C14.3271 14.6798 14.0979 14.7758 13.8584 14.7778C13.6189 14.7798 13.3882 14.6875 13.216 14.521", fill: theme === "dark" ? "#444" : "#ccc" })] })) })), (0, jsx_runtime_1.jsxs)(react_indiana_drag_scroll_1.default, __assign({ className: "scroll" }, { children: [children, (0, jsx_runtime_1.jsxs)(react_share_1.FacebookShareButton, __assign({ url: currentUrl }, { children: [(0, icons_1.FaceBooxIcon)(), (0, jsx_runtime_1.jsx)("span", { children: "facebook" })] })), (0, jsx_runtime_1.jsxs)(react_share_1.TwitterShareButton, __assign({ url: currentUrl }, { children: [(0, icons_1.TwitterIcon)(), (0, jsx_runtime_1.jsx)("span", { children: "Twitter" })] })), (0, jsx_runtime_1.jsxs)(react_share_1.TelegramShareButton, __assign({ url: currentUrl }, { children: [(0, icons_1.TeleIcon)(), (0, jsx_runtime_1.jsx)("span", { children: "Telegram" })] })), (0, jsx_runtime_1.jsxs)(react_share_1.LineShareButton, __assign({ url: currentUrl }, { children: [(0, icons_1.LineIcon)(), (0, jsx_runtime_1.jsx)("span", { children: "Line" })] })), (0, jsx_runtime_1.jsxs)(react_share_1.WhatsappShareButton, __assign({ url: currentUrl }, { children: [(0, icons_1.WhatsAppIcon)(), (0, jsx_runtime_1.jsx)("span", { children: "Whats App" })] })), (0, jsx_runtime_1.jsx)(clipboard_1.default, {})] }))] })) }))] }));
}
exports.default = ShareModal;
// styled
var Layer = styled_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  z-index: 9000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.35);\n"], ["\n  z-index: 9000;\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: ", ";\n  flex-direction: column;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.35);\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "flex" : "none");
});
var Wrap = styled_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  z-index: 9999;\n  position: fixed;\n  top: ", ";\n  opacity: ", ";\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  transition: 0.45s ease-in-out;\n"], ["\n  z-index: 9999;\n  position: fixed;\n  top: ", ";\n  opacity: ", ";\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 16px;\n  transition: 0.45s ease-in-out;\n"])), function (_a) {
    var isActive = _a.isActive;
    return (isActive ? "45%" : "-100%");
}, function (_a) {
    var isActive = _a.isActive;
    return (isActive ? 1 : 0);
});
var Box = styled_1.default.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n  max-width: 440px;\n  padding: 20px 0 20px 20px;\n  border-radius: 18px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  .scroll {\n    padding-top: 16px;\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    column-gap: 22px;\n    padding-right: 20px;\n\n    @media (max-width: 500px) {\n      cursor: grab;\n      column-gap: 18px;\n    }\n\n    button {\n      max-width: 50px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      row-gap: 5px;\n      cursor: pointer;\n      border: none;\n      outline: none;\n      background-color: transparent;\n\n      svg,\n      circle {\n        width: 50px;\n        min-width: 50px;\n        height: 50px;\n        min-height: 50px;\n        transition: 0.3s ease-in-out;\n\n        &:hover {\n          opacity: 0.85;\n        }\n\n        @media (max-width: 500px) {\n          width: 48px;\n          min-width: 48px;\n          height: 48px;\n          min-height: 48px;\n        }\n      }\n\n      span {\n        color: #999;\n        font-size: 0.6875rem;\n        line-height: 1.2;\n      }\n    }\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n    ::-webkit-scrollbar-track {\n      display: none;\n    }\n    ::-webkit-scrollbar-thumb {\n      display: none;\n    }\n    ::-webkit-scrollbar-thumb:hover {\n      display: none;\n    }\n    ::-webkit-scrollbar-button:start:decrement,\n    ::-webkit-scrollbar-button:end:increment {\n      display: none;\n    }\n  }\n"], ["\n  position: relative;\n  width: 100%;\n  max-width: 440px;\n  padding: 20px 0 20px 20px;\n  border-radius: 18px;\n  background-color: ", ";\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n\n  .scroll {\n    padding-top: 16px;\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    flex-wrap: nowrap;\n    overflow-x: auto;\n    column-gap: 22px;\n    padding-right: 20px;\n\n    @media (max-width: 500px) {\n      cursor: grab;\n      column-gap: 18px;\n    }\n\n    button {\n      max-width: 50px;\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n      row-gap: 5px;\n      cursor: pointer;\n      border: none;\n      outline: none;\n      background-color: transparent;\n\n      svg,\n      circle {\n        width: 50px;\n        min-width: 50px;\n        height: 50px;\n        min-height: 50px;\n        transition: 0.3s ease-in-out;\n\n        &:hover {\n          opacity: 0.85;\n        }\n\n        @media (max-width: 500px) {\n          width: 48px;\n          min-width: 48px;\n          height: 48px;\n          min-height: 48px;\n        }\n      }\n\n      span {\n        color: #999;\n        font-size: 0.6875rem;\n        line-height: 1.2;\n      }\n    }\n\n    &::-webkit-scrollbar {\n      display: none;\n    }\n    ::-webkit-scrollbar-track {\n      display: none;\n    }\n    ::-webkit-scrollbar-thumb {\n      display: none;\n    }\n    ::-webkit-scrollbar-thumb:hover {\n      display: none;\n    }\n    ::-webkit-scrollbar-button:start:decrement,\n    ::-webkit-scrollbar-button:end:increment {\n      display: none;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#2a2a2a" : "#fff");
});
var Title = styled_1.default.strong(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  font-size: 1.125rem;\n  color: ", ";\n"], ["\n  font-size: 1.125rem;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return (theme === "dark" ? "#e0e0e0" : "#333");
});
var CancelTab = styled_1.default.button(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 24px;\n  min-width: 24px;\n  height: 24px;\n  min-height: 24px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    width: 24px;\n    min-width: 24px;\n    height: 24px;\n    min-height: 24px;\n  }\n"], ["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  width: 24px;\n  min-width: 24px;\n  height: 24px;\n  min-height: 24px;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  background-color: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  svg {\n    width: 24px;\n    min-width: 24px;\n    height: 24px;\n    min-height: 24px;\n  }\n"])));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
