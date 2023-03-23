import type { LDClient as LDJSClient, LDContext, LDFlagSet } from 'launchdarkly-js-client-sdk';
import type { LDClient as LDNodeClient } from 'launchdarkly-node-server-sdk';
declare type LDRemixClient = LDJSClient | LDNodeClient | undefined;
interface LDReactContext {
    flags: LDFlagSet;
    ldClient?: LDRemixClient;
    user?: LDContext;
}
declare const context: import("react").Context<LDReactContext>;
declare const Provider: import("react").Provider<LDReactContext>, Consumer: import("react").Consumer<LDReactContext>;
export { Provider, Consumer };
export type { LDReactContext, LDRemixClient };
export default context;
