/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { init, LDClient, LDOptions,LDSingleKindContext} from 'launchdarkly-node-server-sdk';

import { Provider } from '../shared/context';

export let ldClient: LDClient;

const createProvider = async (sdkKey: string, user: LDSingleKindContext, options: LDOptions | undefined) => {
  if (!ldClient) {
    ldClient = await init(sdkKey, options);
    await ldClient.waitForInitialization();
  }

  console.log('Initialized ld node client...');
  const flags = await ldClient.allFlagsState(user);
  const LDProvider = ({ children }: { children: ReactNode }) => {
    return (
      <Provider
        value={{
          flags: flags.toJSON(),
          ldClient,
          user,
        }}
      >
        {children}
      </Provider>
    );
  };

  return LDProvider;
};

export default createProvider;
