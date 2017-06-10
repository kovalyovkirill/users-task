import React, {Component} from 'react';
import {Link, Route} from 'react-router-dom';
import UsersPage from './containers/UsersPage';
import UserAlbums from './containers/UserAlbums';
import AlbumPhotos from './containers/AlbumPhotos'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <p className="App-intro">
                    <Link to="/">Users</Link>
                </p>

                <Route exact path="/" component={UsersPage}/>
                <Route exact path="/:id/albums" component={UserAlbums}/>
                <Route path="/:userId/albums/:albumId" component={AlbumPhotos}/>
            </div>
        );
    }
}

export default App;
