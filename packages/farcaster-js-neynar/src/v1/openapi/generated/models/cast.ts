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
import { CastAuthor } from './cast-author.js';
// May contain unused imports in some cases
// @ts-ignore
import { CastParentAuthor } from './cast-parent-author.js';
// May contain unused imports in some cases
// @ts-ignore
import { CastType } from './cast-type.js';
// May contain unused imports in some cases
// @ts-ignore
import { EmbedUrl } from './embed-url.js';

/**
 * 
 * @export
 * @interface Cast
 */
export interface Cast {
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'hash': string;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'parentHash': string | null;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'parentUrl': string | null;
    /**
     * 
     * @type {CastParentAuthor}
     * @memberof Cast
     */
    'parentAuthor': CastParentAuthor;
    /**
     * 
     * @type {CastAuthor}
     * @memberof Cast
     */
    'author': CastAuthor;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'text': string;
    /**
     * 
     * @type {string}
     * @memberof Cast
     */
    'timestamp': string;
    /**
     * 
     * @type {Array<EmbedUrl>}
     * @memberof Cast
     */
    'embeds': Array<EmbedUrl>;
    /**
     * 
     * @type {CastType}
     * @memberof Cast
     */
    'type'?: CastType;
}



