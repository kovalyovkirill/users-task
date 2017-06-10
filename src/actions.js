/**
 * Created by kirill on 06.06.2017.
 */
export const SET_USERS = 'SET_USERS';
export const GET_ALBUMS = 'GET_ALBUMS';

export function setUsers(users) {
    return {
        type: SET_USERS,
        users
    }
}

export function getAlbums(albums, userId) {
    console.log(albums);

    return {
        type: GET_ALBUMS,
        albums,
        userId
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