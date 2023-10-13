/* tslint:disable */
/* eslint-disable */
/**
 * Farcaster Hub REST API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// May contain unused imports in some cases
// @ts-ignore
import { HashScheme } from './hash-scheme';
// May contain unused imports in some cases
// @ts-ignore
import { SignatureScheme } from './signature-scheme';

/**
 * 
 * @export
 * @interface MessageCommon
 */
export interface MessageCommon {
    /**
     * 
     * @type {string}
     * @memberof MessageCommon
     */
    'hash': string;
    /**
     * 
     * @type {HashScheme}
     * @memberof MessageCommon
     */
    'hashScheme': HashScheme;
    /**
     * 
     * @type {string}
     * @memberof MessageCommon
     */
    'signature': string;
    /**
     * 
     * @type {SignatureScheme}
     * @memberof MessageCommon
     */
    'signatureScheme': SignatureScheme;
    /**
     * 
     * @type {string}
     * @memberof MessageCommon
     */
    'signer': string;
}



