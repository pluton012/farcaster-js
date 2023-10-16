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
import { ActiveStatus } from './active-status';
// May contain unused imports in some cases
// @ts-ignore
import { UserPfp } from './user-pfp';
// May contain unused imports in some cases
// @ts-ignore
import { UserProfile } from './user-profile';
// May contain unused imports in some cases
// @ts-ignore
import { ViewerContext } from './viewer-context';

/**
 * 
 * @export
 * @interface User
 */
export interface User {
    /**
     * User identifier (unsigned integer)
     * @type {number}
     * @memberof User
     */
    'fid': number;
    /**
     * The username of the user.
     * @type {string}
     * @memberof User
     */
    'username': string;
    /**
     * The display of the reactor.
     * @type {string}
     * @memberof User
     */
    'displayName': string;
    /**
     * 
     * @type {UserPfp}
     * @memberof User
     */
    'pfp': UserPfp;
    /**
     * 
     * @type {UserProfile}
     * @memberof User
     */
    'profile': UserProfile;
    /**
     * The number of followers the user has.
     * @type {number}
     * @memberof User
     */
    'followerCount': number;
    /**
     * The number of users the user is following.
     * @type {number}
     * @memberof User
     */
    'followingCount': number;
    /**
     * 
     * @type {Array<string>}
     * @memberof User
     */
    'verifications': Array<string>;
    /**
     * 
     * @type {ActiveStatus}
     * @memberof User
     */
    'activeStatus': ActiveStatus;
    /**
     * 
     * @type {ViewerContext}
     * @memberof User
     */
    'viewerContext'?: ViewerContext;
}



