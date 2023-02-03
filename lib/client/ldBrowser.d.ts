import { Component, ReactNode } from 'react';
import { LDContext as HocState } from '../shared/context';
declare type LDBrowserProps = {
    children: ReactNode;
};
declare class LDBrowser extends Component<LDBrowserProps, HocState> {
    readonly state: Readonly<HocState>;
    constructor(props: LDBrowserProps);
    render(): JSX.Element;
}
export default LDBrowser;
