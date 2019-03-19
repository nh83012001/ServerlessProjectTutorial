import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  REVIEW_UPDATE,
  REVIEW_CREATE,
  REVIEWS_FETCH_SUCCESS,
  REVIEW_SAVE_SUCCESS
} from './types';

export const reviewUpdate = ({ prop, value }) => {
  return {
    type: REVIEW_UPDATE,
    payload: { prop, value }
  };
};

export const reviewCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => { //bringing in redux-thunk for async
    firebase.database().ref(`/users/${currentUser.uid}/reviews`)
    .push({ name, phone, shift })
    .then(() => {
      dispatch({ type: REVIEW_CREATE });
      Actions.reviewList({ type: 'reset' });
    });
  };
};

export const reviewSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();
  return (dispatch) => { //bringing in redux-thunk for async
    firebase.database().ref(`/users/${currentUser.uid}/reviews/${uid}`)
    .set({ name, phone, shift })
    .then(() => {
      dispatch({ type: REVIEW_SAVE_SUCCESS });
      Actions.reviewList({ type: 'reset' });
    });
  };
};

export const reviewsFetch = () => {
  const { currentUser } = firebase.auth();
  return (dispatch) => { //bringing in redux-thunk for async
    firebase.database().ref(`/users/${currentUser.uid}/reviews`)
    .on('value', snapshot => { //this makes us listen to changes and call additional dispatches
      dispatch({ type: REVIEWS_FETCH_SUCCESS, payload: snapshot.val() });
    });
  };
};

export const reviewDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();
  return () => { //bringing in redux-thunk for async
    firebase.database().ref(`/users/${currentUser.uid}/reviews/${uid}`)
    .remove()
    .then(() => {
      Actions.reviewList({ type: 'reset' });
    });
  };
};
