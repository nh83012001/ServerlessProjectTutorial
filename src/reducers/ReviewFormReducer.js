import {
  REVIEW_UPDATE,
  REVIEW_CREATE,
  REVIEW_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  name: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case REVIEW_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case REVIEW_CREATE:
      return INITIAL_STATE;
    case REVIEW_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
