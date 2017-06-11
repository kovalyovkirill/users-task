/**
 * Created by kirill on 05.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import UsersList from '../components/UsersList';
import {connect} from 'react-redux';
import {fetchNewUsers} from '../actions';

class UsersPage extends React.Component {
    componentDidMount () {
        this.props.fetchNewUsers();
    }
    render() {
        return (
            <div>
                <UsersList
                    users={this.props.users}
                    isUsersLoading ={this.props.isUsersLoading}
                    isUsersReceived = {this.props.isUsersReceived}
                    errors = {this.props.errors}
                />
            </div>
        )
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    isUsersLoading: PropTypes.bool.isRequired,
    isUsersReceived: PropTypes.bool.isRequired,
    errors: PropTypes.object.isRequired,
    fetchNewUsers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    console.log(state);
    return {
        users: state.users,
        isUsersLoading: state.isUsersLoading,
        isUsersReceived: state.isUsersReceived,
        errors: state.errors
    }
}

export default connect(mapStateToProps, {fetchNewUsers})(UsersPage);