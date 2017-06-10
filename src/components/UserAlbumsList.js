/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import AlbumLink from './AlbumLink';

export default function UserAlbumsList({albums}) {
    const emptyMessage = (
        <p>There are no albums found in your collection</p>
    );

    const usersList = (
        <div className="albums-container">
            {albums.map(album => <AlbumLink album={album} key={album.id} userId={album.userId}/>)}
        </div>
    );
    return (
        <div>
            {albums.length === 0 ? emptyMessage : usersList}
        </div>
    );
}

UserAlbumsList.propTypes = {
    albums: PropTypes.array.isRequired
};