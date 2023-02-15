import { ReactNode } from 'react';
import { LDUser } from 'launchdarkly-node-server-sdk';
export declare let ldClient: any;
declare const createProvider: (sdkKey: string, user: LDUser) => Promise<({ children }: {
    children: ReactNode;
}) => JSX.Element>;
export default createProvider;
