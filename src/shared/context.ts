import { createContext } from 'react';
import type { LDClient as LDJSClient, LDContext,LDFlagSet } from 'launchdarkly-js-client-sdk';

interface Context {
  flags: LDFlagSet;
  ldClient?: LDJSClient;
  user?: LDContext;
}

const context = createContext<Context>({ flags: {}, ldClient: undefined, user: undefined });
const { Provider, Consumer } = context;

export { Provider, Consumer};
export type {Context}
export default context;
