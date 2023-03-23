import { createContext } from 'react';
import type { LDClient as LDJSClient, LDContext, LDFlagSet } from 'launchdarkly-js-client-sdk';
import type {LDClient as LDNodeClient} from 'launchdarkly-node-server-sdk';

type LDRemixClient = LDJSClient | LDNodeClient | undefined;

interface LDReactContext {
  flags: LDFlagSet;
  ldClient?: LDRemixClient
  user?: LDContext;
}

const context = createContext<LDReactContext>({ flags: {}, ldClient: undefined, user: undefined });
const { Provider, Consumer } = context;

export { Provider, Consumer};
export type {LDReactContext, LDRemixClient}
export default context;
