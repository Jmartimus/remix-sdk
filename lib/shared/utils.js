"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFlattenedFlagsFromChangeset = exports.camelCaseKeys = void 0;
const lodash_camelcase_1 = __importDefault(require("lodash.camelcase"));
const camelCaseKeys = (rawFlags) => {
    const flags = {};
    for (const rawFlag in rawFlags) {
        // Exclude system keys
        if (rawFlag.indexOf('$') !== 0) {
            flags[(0, lodash_camelcase_1.default)(rawFlag)] = rawFlags[rawFlag]; // tslint:disable-line:no-unsafe-any
        }
    }
    return flags;
};
exports.camelCaseKeys = camelCaseKeys;
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
const getFlattenedFlagsFromChangeset = (changes, targetFlags) => {
    const flattened = {};
    for (const key in changes) {
        const flagKey = key;
        if (!targetFlags || targetFlags[flagKey] !== undefined) {
            // tslint:disable-next-line:no-unsafe-any
            flattened[flagKey] = changes[key].current;
        }
    }
    return flattened;
};
exports.getFlattenedFlagsFromChangeset = getFlattenedFlagsFromChangeset;
exports.default = { camelCaseKeys: exports.camelCaseKeys, getFlattenedFlagsFromChangeset: exports.getFlattenedFlagsFromChangeset };
