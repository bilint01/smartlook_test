/*
 *
 * LanguageProvider reducer
 *
 */
import ActionTypes from './constants';
import { ContainerState, ContainerActions } from './types';
import { DEFAULT_LOCALE } from '../../i18n';

export const initialState: ContainerState = {
  locale: DEFAULT_LOCALE,
};

function storeProviderReducer(state: any = {}, action: ContainerActions): any {
  switch (action.type) {
    case ActionTypes.STORE_USERS:
      return {
        ...state,
        users: action.payload,
      };
    case ActionTypes.STORE_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case ActionTypes.STORE_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    default:
      return state;
  }
}

export function languageProviderReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  switch (action.type) {
    case ActionTypes.CHANGE_LOCALE:
      return {
        locale: action.payload,
      };
    default:
      return state;
  }
}

export default storeProviderReducer;
