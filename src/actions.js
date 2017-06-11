/**
 * Created by kirill on 06.06.2017.
 */

export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_PHOTOS = 'GET_PHOTOS';

export const USERS_REQUEST = 'USERS_REQUEST';
function usersRequest() {
    return {
        type: USERS_REQUEST,
        isUsersLoading: true
    }
}
export const USERS_SUCCESS = 'USERS_SUCCESS';
function usersSuccess(users) {
    return {
        type: USERS_SUCCESS,
        isUsersLoading: false,
        isUsersReceived: true,
        users
    }
}

export const USERS_FAILURE = 'USERS_FAILURE';
function usersFailure(errors) {
    return {
        type: USERS_FAILURE,
        isUsersLoading: false,
        errors
    }
}

export function getAlbums(albums, userId) {
    return {
        type: GET_ALBUMS,
        albums,
        userId
    }
}

export function getPhotos(photos, albumId) {
    return {
        type: GET_PHOTOS,
        photos,
        albumId
    }
}

export function fetchAlbums(userId) {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then(res => res.json())
            .then(data => dispatch(getAlbums(data, userId)));
    }
}

export function fetchPhotos(albumId) {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => res.json())
            .then(data => dispatch(getPhotos(data, albumId)));
    }
}

export function fetchNewUsers() {
    return dispatch => {
        dispatch(usersRequest());

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(usersSuccess(data)))
            .catch(e => dispatch(usersFailure(e)));
    }
}

function shouldFetchUsers(state) {
    const {users} = state;

    if (state.isUsersLoading) {
        return false
    } else if (users.length === 0) {
        return true
    }
}

export function fetchUsersIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchUsers(getState())) {
            return dispatch(fetchNewUsers())
        }
    }
}