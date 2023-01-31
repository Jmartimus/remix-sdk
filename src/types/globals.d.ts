import { LDClient, LDContext,LDFlagSet } from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    ldClientBrowser: LDClient;
    ssrFlags: LDFlagSet;
    ldUser: LDContext;
    clientSideID: string;
  }
}
