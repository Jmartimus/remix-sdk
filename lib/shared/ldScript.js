"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const useFlags_1 = __importDefault(require("./useFlags"));
const useLDUser_1 = __importDefault(require("./useLDUser"));
const LDScript = ({ clientSideID }) => {
    const flags = JSON.stringify((0, useFlags_1.default)(), null, 2);
    const user = JSON.stringify((0, useLDUser_1.default)(), null, 2);
    const windowVars = `window.clientSideID='${clientSideID}';window.ssrFlags=${flags};window.ldUser=${user};`;
    return ((0, jsx_runtime_1.jsx)("script", { dangerouslySetInnerHTML: {
            // eslint-disable-next-line @typescript-eslint/naming-convention
            __html: `${windowVars}`,
        } }));
};
exports.default = LDScript;
