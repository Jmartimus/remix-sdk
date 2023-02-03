"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const context_1 = __importDefault(require("./context"));
const useLDUser = () => {
    const { user } = (0, react_1.useContext)(context_1.default);
    return user;
};
exports.default = useLDUser;
