import React from 'react';
import selfie from './img/portrett_small.jpg';
import expressIcon from './img/express_icon.png';
import expressNode from './img/express.jpg';
import Report from './components/report.js';
import {
    HashRouter as Router,
    Route,
    Link
} from 'react-router-dom';

// class Layout extends React.Component {
//     constructor(props) {
//         super(props);
//         document.title = this.props.title;
//     }
//     render() {
//         return (
//             <div>
//             </div>
//         );
//     }
// }

const Layout = () => (
    <Router>
        <div>
            <div className="site-header">
                <img id="icon" alt="express icon" src={expressIcon} />
                <navbar className="site-navbar">
                    <nav>
                        <ul>
                            <li><Link to="/">Hem</Link></li>
                            <li><Link to="/om">Om</Link></li>
                            <li><Link to="/report">Redovisningar</Link></li>
                        </ul>
                    </nav>
                </navbar>
            </div>
            <hr/>
            <div className="main">

                <Route exact path="/" component={Home}/>
                <Route path="/om" component={About}/>
                <Route path="/report" component={Report}/>
            </div>
            <div className="site-footer">
                Copyright (c) by Marcus Gustafsson
            </div>
        </div>
    </Router>
);

const Home = () => (
    <div>
        <h1>Hem</h1>
        <p>Jag som skapat sidan heter Marcus.</p>
        <img id="portrait" alt="marcus" src={selfie} />
    </div>
);

const About = () => (
    <div>
        <h2>Om</h2>
        <p>Den här sidan har gjorts med hjälp av Express.js,
             vilket skapar en server för back-end tillsammans
             med React.js som sköter om front-end.</p>
        <img id="express" alt="Express and Node" src={expressNode}/>
        <p>Koden består av 2 repo och finns på Github</p>
        <a href="https://github.com/marcusgsta/express-backend">Express-backend</a>
        <a href="https://github.com/marcusgsta/react-frontend">React-frontend</a>
    </div>
);


// const Report = () => (
//     <div>
//         <h2>Redovisningar</h2>
//         <h3>Kmom01</h3>
//         <h3>Kmom02</h3>
//         <h3>Kmom03</h3>
//         <h3>Kmom04</h3>
//         <h3>Kmom05</h3>
//         <h3>Kmom06</h3>
//         <h3>Kmom07-10</h3>
//     </div>
// );

export default Layout;
