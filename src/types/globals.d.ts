import { LDClient, LDContext,LDFlagSet} from 'launchdarkly-js-client-sdk';

declare global {
  interface Window {
    ldClientBrowser: LDClient;
    ssrFlags: LDFlagSet;
    ldUser: LDContext;
    clientSideID: string;
  }

  type ldFlag = {
    reason?: { inExperiment: boolean; kind: string };
    trackEvents?: boolean;
    trackReason?: boolean;
    variation: number;
    version: number;
  };
  
  type flagStates = Record<string, ldFlag>;
  
  type ldVariations = {
    $flagsState: flagStates;
  };
}
