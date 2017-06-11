/**
 * Created by kirill on 06.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const makeUserAddres = ({address}) => {
    return `${address.city}, ${address.street}, ${address.suite}, ${address.zipcode}`;
};

export default function UserCard({user}) {
    return (
        <div className="user-card">
            <Link to={`/${user.id}/${user.username}/albums`}>
                <div><b>Name:</b> {user.name}</div>
                <div><b>Username:</b> {user.username}</div>
                <div><b>Email:</b> {user.email}</div>
                <div><b>Phone:</b> {user.phone}</div>
                <div><b>Address: </b> {makeUserAddres(user)}</div>
                <div><b>Company: </b> {user.company.name}</div>
            </Link>
        </div>
    )
}

UserCard.propTypes = {
    user: PropTypes.object.isRequired
};