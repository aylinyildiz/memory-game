import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import './Home.scss';

class Home extends Component {
    state = {
        name: ''
    }
    render(){
        return (
            <div className="home-container">
               <div className="user"> {this.state.name}</div>
                <input onChange={(event) => this.setState({ name: event.target.value })} placeholder="Enter your name" />
                <button className="btn"><Link className="start-link" to={{ pathname:"/game", name: this.state.name }}>Start the Game!</Link></button>
            </div>
        )
    }
}

export default Home;