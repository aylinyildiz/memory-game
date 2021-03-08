import React, { Component } from "react";

import { shuffle } from "lodash";

import Card from "../Card/Card";

import "./CardGame.scss";

import baby from "./../../assets/baby.png";
import clumsy from "./../../assets/clumsy.png";
import cook from "./../../assets/cook.png";
import brainy from "./../../assets/brainy.png";
import gargamel from "./../../assets/gargamel.png";
import papa from "./../../assets/papa.png";
import handy from "./../../assets/handy.png";
import smurfette from "./../../assets/smurfette.png";

import { withRouter, Redirect } from "react-router-dom";

class CardGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        { name: "baby", open: false, id: 1, image: baby, isCompleted: false },
        {
          name: "brainy",
          open: false,
          id: 2,
          image: brainy,
          isCompleted: false,
        },
        { name: "cook", open: false, id: 3, image: cook, isCompleted: false },
        {
          name: "clumsy",
          open: false,
          id: 4,
          image: clumsy,
          isCompleted: false,
        },
        {
          name: "brainy",
          open: false,
          id: 5,
          image: brainy,
          isCompleted: false,
        },
        { name: "baby", open: false, id: 6, image: baby, isCompleted: false },
        { name: "cook", open: false, id: 7, image: cook, isCompleted: false },
        {
          name: "clumsy",
          open: false,
          id: 8,
          image: clumsy,
          isCompleted: false,
        },
        {
          name: "gargamel",
          open: false,
          id: 9,
          image: gargamel,
          isCompleted: false,
        },
        {
          name: "gargamel",
          open: false,
          id: 10,
          image: gargamel,
          isCompleted: false,
        },
        { name: "papa", open: false, id: 11, image: papa, isCompleted: false },
        { name: "papa", open: false, id: 12, image: papa, isCompleted: false },
        {
          name: "handy",
          open: false,
          id: 13,
          image: handy,
          isCompleted: false,
        },
        {
          name: "handy",
          open: false,
          id: 14,
          image: handy,
          isCompleted: false,
        },
        {
          name: "smurfette",
          open: false,
          id: 15,
          image: smurfette,
          isCompleted: false,
        },
        {
          name: "smurfette",
          open: false,
          id: 16,
          image: smurfette,
          isCompleted: false,
        },
      ],
      shuffledCards: [],
      matchedCards: [],
      flippedCards: [],
      score: 10,
    };
  }

  componentDidMount() {
    this.setState({ shuffledCards: shuffle(this.state.cards) });
  }

  onClickHandler = (smurf, index) => {
    if (this.state.flippedCards.length === 2) {
      setTimeout(() => {
        this.check();
      }, 500);
    } else {
      let flippedCards = this.state.flippedCards;
      let shuffledCards = this.state.shuffledCards;
      shuffledCards[index].open = true;
      flippedCards.push(smurf);
      this.setState({
        flippedCards,
        shuffledCards,
      });
      if (this.state.flippedCards.length === 2) {
        setTimeout(() => {
          this.check();
        }, 500);
      }
    }
  };

  check() {
    let shuffledCards = this.state.shuffledCards;
    let matchedCards = this.state.matchedCards;

    if (this.state.flippedCards[0].name === this.state.flippedCards[1].name) {
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[0].id
      ).isCompleted = true;
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[1].id
      ).isCompleted = true;
      matchedCards.push(
        this.state.flippedCards[0].id,
        this.state.flippedCards[1].id
      );
    } else {
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[0].id
      ).open = false;
      shuffledCards.find(
        (item) => item.id === this.state.flippedCards[1].id
      ).open = false;
      this.setState({ score: this.state.score - 1 });
    }

    this.setState({
      flippedCards: [],
      matchedCards: matchedCards,
    });
  }

  render() {
    if (this.state.matchedCards.length === 16 || this.state.score === 0) {
      const newTo = {
        pathname: "",
        userName: this.props.location.userName,
        score: this.state.score,
      };
      this.state.matchedCards.length === 16
        ? (newTo.pathname = "/result")
        : (newTo.pathname = "/result");
      return <Redirect to={newTo} />;
    }
    return (
      <>
        <p className="game-info">Hi {this.props.location.name}!</p>
        <p className="game-info">
          You have <span> {this.state.score} </span> smurfs left!
        </p>
        <div className="card-container">
          {this.state.shuffledCards.map((smurf, index) => (
            <Card
              key={index}
              onClickHandler={() =>
                this.state.flippedCards.length === 2
                  ? null
                  : this.onClickHandler(smurf, index)
              }
              smurf={smurf}
            />
          ))}
        </div>
      </>
    );
  }
}

export default withRouter(CardGame);
