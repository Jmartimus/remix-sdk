import type { LDClient as LDJSClient, LDFlagSet, LDUser } from 'launchdarkly-js-client-sdk';
interface LDContext {
    flags: LDFlagSet;
    ldClient?: LDJSClient;
    user?: LDUser;
}
declare const context: import("react").Context<LDContext>;
declare const Provider: import("react").Provider<LDContext>, Consumer: import("react").Consumer<LDContext>;
export { Provider, Consumer };
export type { LDContext };
export default context;
