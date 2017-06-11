/**
 * Created by kirill on 05.06.2017.
 */

import {GET_ALBUMS, GET_PHOTOS, USERS_REQUEST, USERS_SUCCESS, USERS_FAILURE} from '../actions';

const initialState = {
    users: [],
    albums: [],
    photos: [],
    userId: null,
    isUsersLoading: false,
    isUsersReceived: false,
    albumId: null,
    errors: {}
};

export default function users(state = initialState, action) {
    switch (action.type) {
        case USERS_REQUEST:
            return Object.assign({}, state, {
               isUsersLoading: action.isUsersLoading,
            });
        case USERS_SUCCESS:
            return Object.assign({}, state, {
                isUsersLoading: action.isUsersLoading,
                isUsersReceived: action.isUsersReceived,
                users: action.users
            });
        case USERS_FAILURE:
            return Object.assign({}, state, {
                isUsersLoading: action.isUsersLoading,
                errors: action.errors
            });
        case GET_ALBUMS:
            return Object.assign({}, state, {
                albums: action.albums,
                userId: action.userId
            });
        case GET_PHOTOS:
            return Object.assign({}, state, {
                photos: action.photos,
                albumId: action.albumId
            });
        default:
            return state;
    }
}