/**
 * Created by kirill on 05.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

export default function UsersList({users, isUsersLoading, isUsersReceived, errors}) {
    if(errors) {
        console.log(errors);
    }

    const emptyMessage = (
        <div>
            <p>There is no users found</p>
        </div>
    );

    const loadingMessage = (
        <div>
            Loading...
        </div>
    );

    const usersList = (
        <div className="users-container">
            {users.map(user => <UserCard user={user} key={user.id}/>)}
        </div>
    );
    return (
        <div>
            {isUsersLoading
                ? loadingMessage
                : (isUsersReceived && users.length)
                    ? usersList
                    : emptyMessage}
        </div>
    );
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    isUsersLoading: PropTypes.bool.isRequired,
    isUsersReceived: PropTypes.bool.isRequired
};