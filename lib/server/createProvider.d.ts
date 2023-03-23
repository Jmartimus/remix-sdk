import { ReactNode } from 'react';
import { LDClient, LDOptions, LDSingleKindContext } from 'launchdarkly-node-server-sdk';
export declare let ldClient: LDClient;
declare const createProvider: (sdkKey: string, user: LDSingleKindContext, options: LDOptions | undefined) => Promise<({ children }: {
    children: ReactNode;
}) => JSX.Element>;
export default createProvider;
