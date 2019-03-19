import { combineReducers } from 'redux';
import AuthReducer from './AuthReducer';
import ReviewFormReducer from './ReviewFormReducer';
import ReviewReducer from './ReviewReducer';

export default combineReducers({
  auth: AuthReducer,
  reviewForm: ReviewFormReducer,
  reviews: ReviewReducer
});
