import { createContext } from 'react';
import type { LDClient as LDJSClient, LDContext, LDFlagSet } from 'launchdarkly-js-client-sdk';

type LDRemixClient = LDJSClient | undefined;

interface LDReactContext {
  flags: LDFlagSet;
  ldClient?: LDJSClient
  user?: LDContext;
}

const context = createContext<LDReactContext>({ flags: {}, ldClient: undefined, user: undefined });
const { Provider, Consumer } = context;

export { Provider, Consumer};
export type {LDReactContext, LDRemixClient}
export default context;
