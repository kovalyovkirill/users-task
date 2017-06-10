/**
 * Created by kirill on 05.06.2017.
 */
import React from 'react';
import PropTypes from 'prop-types';
import UsersList from '../UsersList';
import {connect} from 'react-redux';
import {fetchUsers} from '../actions';

class UsersPage extends React.Component {
    componentDidMount () {
        this.props.fetchUsers();
    }
    render() {
        console.log(this.props.users);

        return (
            <div>
                <UsersList users={this.props.users}/>
            </div>
        )
    }
}

UsersPage.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
};

function mapStateToProps(state) {
    return {
        users: state.users
    }
}

export default connect(mapStateToProps, {fetchUsers})(UsersPage);