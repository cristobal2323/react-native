import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import reducer from './reducers/index';
import AsyncStorage from '@react-native-community/async-storage';

import {createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';

const persistConfig = {
  key: 'root',
  keyPrefix: '',
  storage: AsyncStorage,
  blacklist: ['navegation'],
};

const persistedReducer = persistReducer(persistConfig, reducer);
const navigationMiddleware = createReactNavigationReduxMiddleware(
  state => state.navegation,
);

const store = createStore(
  persistedReducer,
  applyMiddleware(navigationMiddleware),
);
const persistor = persistStore(store);

export {store, persistor};
