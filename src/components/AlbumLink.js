/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import folderImg from '../image.svg';

export default function AlbumLink({album}) {
    const albumName = album.title.replace(/ /g, "_");
    const style = {
        paddingRight: 8,
        height: 20
    };

    return (
        <div className="user-card full-width">
            <Link to={`/${album.userId}/albums/${album.id}/${albumName}/photos`}>
                <div className="left-padding">
                    <img style={style} src={folderImg} alt="Folder"/>
                    <b>Title</b>: {album.title}
                </div>
            </Link>
        </div>
    )
}

AlbumLink.propTypes = {
    album: PropTypes.object.isRequired
};