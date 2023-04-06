/* eslint-disable  @typescript-eslint/no-explicit-any */
import React, { ReactNode } from 'react';
import { init,LDOptions,LDSingleKindContext} from 'launchdarkly-node-server-sdk';

import { Provider } from '../shared/context';

// TODO: fix this
export let ldClient: any;

const createProvider = async (sdkKey: string, user: LDSingleKindContext, options: LDOptions | undefined) => {
  if (!ldClient) {
    ldClient = await init(sdkKey, options);
    await ldClient.waitForInitialization();
  }

  console.log('Initialized ld node client...');
  const flags = await ldClient.allFlagsState(user);
  const flagsWithValues: ldVariations = flags.toJSON();
  
  // After client is initialized, we loop through the flags and call the variation method on experiment flags.
  await ldClient.waitForInitialization().then(() => {
    Object.entries(flagsWithValues.$flagsState).forEach(
      ([flagName, flagValue]) => {
          if (flagValue?.reason?.inExperiment) {
            // produces a feature event, which is necessary for a user to be considered a part of an experiment.
              ldClient.variation(flagName, user);

          }
      },
  )})
  .catch((err: any) => console.error(err))

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
