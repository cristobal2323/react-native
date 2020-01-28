import {combineReducers} from 'redux';

import navegation from './navegation';
import video from './video';

const reducer = combineReducers({
  video,
  navegation,
});

export default reducer;
