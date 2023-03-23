import type { LDClient as LDJSClient, LDContext, LDFlagSet } from 'launchdarkly-js-client-sdk';
declare type LDRemixClient = LDJSClient | undefined;
interface LDReactContext {
    flags: LDFlagSet;
    ldClient?: LDJSClient;
    user?: LDContext;
}
declare const context: import("react").Context<LDReactContext>;
declare const Provider: import("react").Provider<LDReactContext>, Consumer: import("react").Consumer<LDReactContext>;
export { Provider, Consumer };
export type { LDReactContext, LDRemixClient };
export default context;
