import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";

import "./Result.scss";
let messages = [
  { title: "Well Done", message: "How about another go?" },
  { title: "Good Job", message: "I bet you can not do that again?" },
];

class Result extends Component {
 
  render() {
    messages.sort(() => Math.random() - 0.5);
    const {score} = this.props.location;
    console.warn(this.props);
    return (
        <>
        
           <h1 className="score">Score :  {score}</h1>
      <div className="score-container">
        <div>
         <h1 className="message">{score<= 0 ? 'Try Again' : messages[0].title }</h1>
          <p>{score<= 0 ? '' : messages[0].message}</p>
          <button className="btn"><Link className="new-game" to={{pathname:"/game"}}>Go Again !</Link> </button>
        </div>
      </div>
      </>
    );
  }
}
export default withRouter(Result);

