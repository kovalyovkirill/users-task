/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';

export default function PhotoCard({photo}) {
    return (
        <div className="photo-card">
            <img src={photo.thumbnailUrl} alt={photo.title}/>
            <div>Title: {photo.title}</div>
        </div>
    )
}

PhotoCard.propTypes = {
    photo: PropTypes.object.isRequired
};