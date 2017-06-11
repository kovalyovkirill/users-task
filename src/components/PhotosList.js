/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import PhotoCard from './PhotoCard';

export default function PhotosList({photos}) {
    const emptyMessage = (
        <p>There are no albums found in your collection</p>
    );

    const usersList = (
        <div className="users-container">
            {photos.map(photo => <PhotoCard photo={photo} key={photo.id}/>)}
        </div>
    );
    return (
        <div>
            {photos.length === 0 ? emptyMessage : usersList}
        </div>
    );
}

PhotosList.propTypes = {
    photos: PropTypes.array.isRequired
};