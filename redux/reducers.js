import {combineReducers} from 'redux';

export const reducer = (state = {profile: ""}, action) => {  
    switch (action.type) {
      case 'SET_PROFILE':
        return {...state, profile: action.profile}
      default:
        return {...state}
    }
};

export const reducers = combineReducers({  
    user: reducer,
});
