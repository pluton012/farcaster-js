/* tslint:disable */
/* eslint-disable */
/**
 * v2 Farcaster
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
import { CastWithInteractions } from './cast-with-interactions.js';
// May contain unused imports in some cases
// @ts-ignore
import { NextCursor } from './next-cursor.js';

/**
 * 
 * @export
 * @interface FeedResponse
 */
export interface FeedResponse {
    /**
     * 
     * @type {Array<CastWithInteractions>}
     * @memberof FeedResponse
     */
    'casts': Array<CastWithInteractions>;
    /**
     * 
     * @type {NextCursor}
     * @memberof FeedResponse
     */
    'next': NextCursor;
}

