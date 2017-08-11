import * as APIUtil from './../util/follow_api_util';
import { requestUser } from './user_actions';

export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";
export const REMOVE_FOLLOW = "REMOVE_FOLLOW";

export const receiveFollow = follow => ({
  type: RECEIVE_FOLLOW,
  follow
});

export const removeFollow = follow => ({
  type: REMOVE_FOLLOW,
  follow
});

export const follow = following_id => dispatch => (
  APIUtil.createFollow(following_id)
    .then( follow => dispatch(receiveFollow(follow)) )
      .then( follow  => dispatch(requestUser(follow.follow.following)) )
);

export const unfollow = following_id => dispatch => (
  APIUtil.deleteFollow(following_id)
    .then( follow => dispatch(receiveFollow(follow)) )
      .then( follow => dispatch(requestUser(follow.follow.following)) )
);
