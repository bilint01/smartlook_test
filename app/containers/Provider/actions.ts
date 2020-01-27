/*
 *
 * LanguageProvider actions
 *
 */

import ActionTypes from './constants';
import { action } from 'typesafe-actions';

export const changeLocale = (languageLocale: string) =>
  action(ActionTypes.CHANGE_LOCALE, languageLocale);

export const storeUsers = (users: object) =>
  action(ActionTypes.STORE_USERS, users);
export const storePosts = (posts: object) =>
  action(ActionTypes.STORE_POSTS, posts);
export const storeComments = (comments: object) =>
  action(ActionTypes.STORE_COMMENTS, comments);
