"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const launchdarkly_js_client_sdk_1 = require("launchdarkly-js-client-sdk");
const context_1 = require("../shared/context");
const utils_1 = require("../shared/utils");
class LDBrowser extends react_1.Component {
    constructor(props) {
        super(props);
        const { ssrFlags, clientSideID, ldUser } = window;
        console.log(`initializing ld client with ${clientSideID}...`);
        const ldClient = (0, launchdarkly_js_client_sdk_1.initialize)(clientSideID, ldUser, { bootstrap: ssrFlags });
        ldClient.on('change', (changes) => {
            const flattened = (0, utils_1.getFlattenedFlagsFromChangeset)(changes, ssrFlags);
            if (Object.keys(flattened).length > 0) {
                this.setState(({ flags }) => ({ flags: Object.assign(Object.assign({}, flags), flattened) }));
            }
        });
        this.state = {
            flags: ssrFlags,
            ldClient,
            user: ldUser,
        };
    }
    render() {
        // eslint-disable-next-line react/react-in-jsx-scope
        return (0, jsx_runtime_1.jsx)(context_1.Provider, Object.assign({ value: this.state }, { children: this.props.children }));
    }
}
exports.default = LDBrowser;
