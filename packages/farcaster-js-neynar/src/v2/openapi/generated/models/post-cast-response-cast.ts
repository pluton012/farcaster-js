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
import { PostCastResponseCastAuthor } from './post-cast-response-cast-author';

/**
 * 
 * @export
 * @interface PostCastResponseCast
 */
export interface PostCastResponseCast {
    /**
     * Ethereum address
     * @type {string}
     * @memberof PostCastResponseCast
     */
    'hash': string;
    /**
     * 
     * @type {PostCastResponseCastAuthor}
     * @memberof PostCastResponseCast
     */
    'author': PostCastResponseCastAuthor;
    /**
     * 
     * @type {string}
     * @memberof PostCastResponseCast
     */
    'text': string;
}

