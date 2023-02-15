"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ldClient = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const launchdarkly_node_server_sdk_1 = require("launchdarkly-node-server-sdk");
const context_1 = require("../shared/context");
const createProvider = (sdkKey, user, options) => __awaiter(void 0, void 0, void 0, function* () {
    if (!exports.ldClient) {
        exports.ldClient = yield (0, launchdarkly_node_server_sdk_1.init)(sdkKey, options);
        yield exports.ldClient.waitForInitialization();
    }
    console.log('Initialized ld node client...');
    let flags = yield exports.ldClient.allFlagsState(user);
    flags = flags.toJSON();
    const LDProvider = ({ children }) => {
        return ((0, jsx_runtime_1.jsx)(context_1.Provider, Object.assign({ value: {
                flags,
                ldClient: exports.ldClient,
                user,
            } }, { children: children })));
    };
    return LDProvider;
});
exports.default = createProvider;
