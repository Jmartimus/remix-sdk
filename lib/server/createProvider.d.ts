import { ReactNode } from 'react';
import { LDOptions, LDUser } from 'launchdarkly-node-server-sdk';
export declare let ldClient: any;
declare const createProvider: (sdkKey: string, user: LDUser, options: LDOptions | undefined) => Promise<({ children }: {
    children: ReactNode;
}) => JSX.Element>;
export default createProvider;
