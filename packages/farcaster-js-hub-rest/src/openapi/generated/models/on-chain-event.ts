/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * Perform basic queries of Farcaster state via the REST API of a Farcaster hub. See the [Farcaster docs](https://www.thehubble.xyz/docs/httpapi/httpapi.html) for more details. Some client libraries:   - [TypeScript](https://www.npmjs.com/package/@standard-crypto/farcaster-js-hub-rest) 
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { IdRegisterEventBody } from './id-register-event-body.js';
// May contain unused imports in some cases
// @ts-ignore
import { OnChainEventIdRegister } from './on-chain-event-id-register.js';
// May contain unused imports in some cases
// @ts-ignore
import { OnChainEventSigner } from './on-chain-event-signer.js';
// May contain unused imports in some cases
// @ts-ignore
import { OnChainEventSignerMigrated } from './on-chain-event-signer-migrated.js';
// May contain unused imports in some cases
// @ts-ignore
import { OnChainEventStorageRent } from './on-chain-event-storage-rent.js';
// May contain unused imports in some cases
// @ts-ignore
import { SignerEventBody } from './signer-event-body.js';
// May contain unused imports in some cases
// @ts-ignore
import { SignerMigratedEventBody } from './signer-migrated-event-body.js';
// May contain unused imports in some cases
// @ts-ignore
import { StorageRentEventBody } from './storage-rent-event-body.js';

/**
 * @type OnChainEvent
 * @export
 */
export type OnChainEvent = { type: 'EVENT_TYPE_ID_REGISTER' } & OnChainEventIdRegister | { type: 'EVENT_TYPE_SIGNER' } & OnChainEventSigner | { type: 'EVENT_TYPE_SIGNER_MIGRATED' } & OnChainEventSignerMigrated | { type: 'EVENT_TYPE_STORAGE_RENT' } & OnChainEventStorageRent;


