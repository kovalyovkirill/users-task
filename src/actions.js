/**
 * Created by kirill on 06.06.2017.
 */
export const SET_USERS = 'SET_USERS';
export const GET_ALBUMS = 'GET_ALBUMS';
export const GET_PHOTOS = 'GET_PHOTOS';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
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

export function fetchUsers() {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => dispatch(setUsers(data)));
    }
}

export function fetchPhotos(albumId) {
    return dispatch => {
        fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
            .then(res => res.json())
            .then(data => dispatch(getPhotos(data, albumId)));
    }
}