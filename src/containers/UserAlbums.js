/**
 * Created by kirill on 07.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import UserAlbumsList from '../components/UserAlbumsList'
import {fetchAlbums} from '../actions';

class UserAlbums extends React.Component {
    componentDidMount() {
        if (this.props.match.params.id) {
            this.props.fetchAlbums(this.props.match.params.id);
        }
    }

    render() {
        return (
            <div>
                <h2>Albums for username</h2>
                <UserAlbumsList albums={this.props.albums} userId={this.props.userId}/>
            </div>
        )
    }
}

UserAlbums.propTypes = {
    albums: PropTypes.array.isRequired,
    fetchAlbums: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        albums: state.albums,
        userId: state.userId
    }
}

export default connect(mapStateToProps, {fetchAlbums})(UserAlbums);