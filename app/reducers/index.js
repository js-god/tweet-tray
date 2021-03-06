import { combineReducers, } from 'redux';

import theme from './theme';
import launchOnStartUp from './launchOnStartUp';
import profileImageURL from './profileImageURL';
import profileLinkColor from './profileLinkColor';
import weightedStatus from './weightedStatus';
import statusImage from './statusImage';
import requestTokenPair from './requestTokenPair';
import accessTokenPair from './accessTokenPair';

import { ON_LOGOUT, } from '../actions/actionTypes';

const appReducer = combineReducers({
  accessTokenPair,
  requestTokenPair,
  profileImageURL,
  profileLinkColor,
  weightedStatus,
  statusImage,
  launchOnStartUp,
  theme,
});

/* eslint no-param-reassign: 0 */
const rootReducer = (state, action) => {
  if (action.type === ON_LOGOUT) {
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
