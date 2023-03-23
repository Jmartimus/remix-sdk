"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const launchdarkly_js_client_sdk_1 = require("launchdarkly-js-client-sdk");
const context_1 = require("../shared/context");
const utils_1 = require("../shared/utils");
let ldClient;
const LDBrowser = (props) => {
    const { ssrFlags, clientSideID, ldUser } = window;
    const [state, setState] = (0, react_1.useState)({ flags: ssrFlags,
        ldClient: undefined,
        user: ldUser });
    if (!ldClient) {
        ldClient = (0, launchdarkly_js_client_sdk_1.initialize)(clientSideID, ldUser, { bootstrap: ssrFlags, streaming: false });
        ldClient.waitUntilReady().then(() => {
            setState(({ flags }) => ({ flags, ldClient, user: ldClient.getContext() }));
        });
    }
    ldClient.on('change', (changes) => {
        const flattened = (0, utils_1.getFlattenedFlagsFromChangeset)(changes, ssrFlags);
        if (Object.keys(flattened).length > 0) {
            setState(({ flags }) => ({ flags: Object.assign(Object.assign({}, flags), flattened) }));
        }
    });
    // eslint-disable-next-line react/react-in-jsx-scope
    return (0, jsx_runtime_1.jsx)(context_1.Provider, Object.assign({ value: state }, { children: props.children }));
};
exports.default = LDBrowser;
