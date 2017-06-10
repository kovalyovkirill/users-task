/**
 * Created by kirill on 06.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function UserCard({user}) {
    return (
        <div className="user-card">
            <Link to={`/${user.id}/albums`}>
                <div>Name: {user.name}</div>
                <div>Email: {user.email}</div>
            </Link>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired
};