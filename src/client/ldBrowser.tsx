import { ReactNode, useState } from 'react';
import { initialize, LDClient, LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';

import { LDReactContext as HocState, Provider } from '../shared/context';
import { getFlattenedFlagsFromChangeset } from '../shared/utils';

type LDBrowserProps = { children: ReactNode };

let ldClient: LDClient;

const LDBrowser = (props: LDBrowserProps) => {
    const { ssrFlags, clientSideID, ldUser } = window;
    const [state, setState] = useState<HocState>({flags: ssrFlags,
      ldClient: undefined,
      user: ldUser});
    if (!ldClient) {
      ldClient = initialize(clientSideID, ldUser, { bootstrap: ssrFlags, streaming: false }); 
      ldClient.waitUntilReady().then(() => {
        setState(({ flags }) => ({ flags, ldClient, user: ldClient.getContext() }))}) 
      }

    ldClient.on('change', (changes: LDFlagChangeset) => {
      const flattened: LDFlagSet = getFlattenedFlagsFromChangeset(changes, ssrFlags);
      if (Object.keys(flattened).length > 0) {
        setState(({ flags }) => ({ flags: { ...flags, ...flattened } }));
      }
    });

    // eslint-disable-next-line react/react-in-jsx-scope
    return <Provider value={state}>{props.children}</Provider>;}

export default LDBrowser;
