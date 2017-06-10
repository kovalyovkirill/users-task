/**
 * Created by kirill on 05.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import UserCard from './UserCard';

export default function UsersList({users}) {
    const emptyMessage = (
        <p>There are no users found in your collection</p>
    );

    const usersList = (
        <div className="users-container">
            {users.map(user => <UserCard user={user} key={user.id}/>)}
        </div>
    );
    return (
        <div>
            {users.length === 0 ? emptyMessage : usersList}
        </div>
    );
}

UsersList.propTypes = {
    users: PropTypes.array.isRequired
};