/* tslint:disable */
/* eslint-disable */
/**
 * v1 Farcaster
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
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
import { NextCursor } from './next-cursor.js';
// May contain unused imports in some cases
// @ts-ignore
import { Reaction } from './reaction.js';

/**
 * 
 * @export
 * @interface CastReactionsResponseResult
 */
export interface CastReactionsResponseResult {
    /**
     * 
     * @type {Array<Reaction>}
     * @memberof CastReactionsResponseResult
     */
    'casts': Array<Reaction>;
    /**
     * 
     * @type {NextCursor}
     * @memberof CastReactionsResponseResult
     */
    'next': NextCursor;
}

