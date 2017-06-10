/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function AlbumLink({album}) {
    return (
        <div className="album-link">
            <Link to={`/${album.userId}/albums/${album.id}`}>
                <div>
                    Title: {album.title}
                </div>
            </Link>
        </div>
    )
}

AlbumLink.propTypes = {
    album: PropTypes.object.isRequired
};