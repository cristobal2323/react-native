import {combineReducers} from 'redux';

import navegation from './navegation';
import video from './video';
import user from './user';

const reducer = combineReducers({
  video,
  navegation,
  user,
});

export default reducer;
