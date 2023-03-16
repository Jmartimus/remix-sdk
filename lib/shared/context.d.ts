import type { LDClient as LDJSClient, LDContext, LDFlagSet } from 'launchdarkly-js-client-sdk';
interface LDReactContext {
    flags: LDFlagSet;
    ldClient?: LDJSClient;
    user?: LDContext;
}
declare const context: import("react").Context<LDReactContext>;
declare const Provider: import("react").Provider<LDReactContext>, Consumer: import("react").Consumer<LDReactContext>;
export { Provider, Consumer };
export type { LDReactContext };
export default context;
