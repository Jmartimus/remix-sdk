import React, { Component, ReactNode } from 'react';
import { initialize, LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';

import { LDContext as HocState, Provider } from '../shared/context';
import { getFlattenedFlagsFromChangeset } from '../shared/utils';

import { ProviderConfig } from './types';

type LDBrowserProps = ProviderConfig & { children: ReactNode };

class LDBrowser extends Component<LDBrowserProps, HocState> {
  readonly state: Readonly<HocState>;

  constructor(props: LDBrowserProps) {
    super(props);
    const { clientSideID } = props;
    const { ssrFlags } = window;

    console.log(`initializing ld client with ${clientSideID}...`);
    const ldClient = initialize(clientSideID, { anonymous: true }, { bootstrap: ssrFlags });

    ldClient.on('change', (changes: LDFlagChangeset) => {
      const flattened: LDFlagSet = getFlattenedFlagsFromChangeset(changes, ssrFlags);
      if (Object.keys(flattened).length > 0) {
        this.setState(({ flags }) => ({ flags: { ...flags, ...flattened } }));
      }
    });

    this.state = {
      flags: ssrFlags,
      ldClient,
    };
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export default LDBrowser;
