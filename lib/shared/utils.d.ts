import type { LDFlagChangeset, LDFlagSet } from 'launchdarkly-js-client-sdk';
export declare const camelCaseKeys: (rawFlags: LDFlagSet) => LDFlagSet;
/**
 * Gets the flags to pass to the provider from the changeset.
 *
 * @param changes the `LDFlagChangeset` from the ldClient onchange handler.
 * @param targetFlags if targetFlags are specified, changes to other flags are ignored and not returned in the
 * flattened `LDFlagSet`
 * @param reactOptions reactOptions.useCamelCaseFlagKeys determines whether to change the flag keys to camelCase
 * @return an `LDFlagSet` with the current flag values from the LDFlagChangeset filtered by `targetFlags`. The returned
 * object may be empty `{}` if none of the targetFlags were changed.
 */
export declare const getFlattenedFlagsFromChangeset: (changes: LDFlagChangeset, targetFlags: LDFlagSet | undefined) => LDFlagSet;
declare const _default: {
    camelCaseKeys: (rawFlags: LDFlagSet) => LDFlagSet;
    getFlattenedFlagsFromChangeset: (changes: LDFlagChangeset, targetFlags: LDFlagSet | undefined) => LDFlagSet;
};
export default _default;
