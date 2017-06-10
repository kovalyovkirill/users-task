/**
 * Created by kirill on 10.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {fetchPhotos} from '../actions';
import PhotosList from '../components/PhotosList';

class UserAlbums extends React.Component {
    componentDidMount() {
        if (this.props.match.params.albumId) {
            console.log(this.props.match.params.albumId);
            this.props.fetchPhotos(this.props.match.params.albumId);
        }
    }

    render() {
        return (
            <div>
                <h2>Album name Photos</h2>
                <PhotosList photos={this.props.photos}/>
            </div>
        )
    }
}

UserAlbums.propTypes = {
    photos: PropTypes.array.isRequired,
    fetchPhotos: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        photos: state.photos,
        albumId: state.albumId
    }
}

export default connect(mapStateToProps, {fetchPhotos})(UserAlbums);