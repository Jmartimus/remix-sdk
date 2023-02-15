"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consumer = exports.Provider = void 0;
const react_1 = require("react");
const context = (0, react_1.createContext)({ flags: {}, ldClient: undefined, user: undefined });
const { Provider, Consumer } = context;
exports.Provider = Provider;
exports.Consumer = Consumer;
exports.default = context;
