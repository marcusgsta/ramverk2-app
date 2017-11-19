import React from 'react';
// router
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';
// components
import Home from './components/home.js';
import About from './components/about.js';
import Users from './components/users.js';
// images
import expressIcon from './img/express_icon.png';

export class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <div className="site-header">
                        <img id="icon" alt="express icon" src={expressIcon} />
                        <navbar className="site-navbar">
                            <nav>
                                <ul>
                                    <li><Link to="/">Hem</Link></li>
                                    <li><Link to="/om">Om</Link></li>
                                    <li><Link to="/users">Users</Link></li>
                                </ul>
                            </nav>
                        </navbar>
                    </div>
                    <hr/>
                    <div className="main">

                        <Route exact path="/" component={Home}/>
                        <Route path="/om" component={About}/>
                        <Route path="/users" component={Users}/>
                    </div>
                    <div className="site-footer">
                        Copyright (c) by Marcus Gustafsson
                    </div>
                </div>
            </Router>
        );
    }
}


export default App;
