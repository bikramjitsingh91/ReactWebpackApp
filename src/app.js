import React from 'react'
import home from './home';
import user from './user';

export default function App() {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
            </ul>
            <Router>
                <Route exact path="/home" component={home} />
                <Route exact path="/user" component={user} />
            </Router>
        </div>
    )
}

render(<App />, document.getElementById("root"));