/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default function AlbumLink({album}) {
    return (
        <div className="user-card full-width">
            <Link to={`/${album.userId}/albums/${album.id}`}>
                <div>
                    <b>Title</b>: {album.title}
                </div>
            </Link>
        </div>
    )
}

AlbumLink.propTypes = {
    album: PropTypes.object.isRequired
};