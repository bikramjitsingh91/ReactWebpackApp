import React from 'react'
import home from './home';
import user from './user';
import ReactDOM from 'react-dom';
import { render } from "react-dom";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default function App() {
    return (
        <div>
            Test
            
            <Router>
                <ul>
                    {/* <li>
                        <Link to="/">Home</Link>
                    </li> */}
                    <li>
                        <Link to="/home">Home</Link>
                    </li>
                    <li>
                        <Link to="/user">User</Link>
                    </li>
                </ul>
                <Route exact path="/home" component={home} />
                <Route exact path="/user" component={user} />
            </Router>
        </div>
    )
}

render(<App />, document.getElementById("root"));