/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function PhotoCard({photo}) {
    return (
        <div className="photo-card">
            <div>Title: {photo.title}</div>
            <img src={photo.thumbnailUrl} alt={photo.title}/>
        </div>
    )
}

PhotoCard.propTypes = {
    photo: PropTypes.object.isRequired
};