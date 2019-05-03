/* eslint-disable no-undef */
import React, { Component } from 'react';
import ReactDOM from "react-dom";
//import { Link } from 'react-router-dom'; /* required to use <Link> tag, but must be installed in package.json */
import './index.css';

//------------------------------------------------ IMAGES [array] -------------------------------------------------------------
/*
//const beth = "https://vignette.wikia.nocookie.net/p__/images/c/cb/SpongeBob_SquarePants_Render.png/revision/latest?cb=20190120193322&path-prefix=protagonist";
import beth from "./images/beth.png";
import birdperson from "./images/birdperson.png";
import evilmorty from "./images/evilmorty.png";
import gianthead from "./images/gianthead.png";
import goldenford from "./images/goldenford.png";
import jerry from "./images/jerry.png";
import jessica from "./images/jessica.png";
import meeseeks from "./images/meeseeks.png";
import morty from "./images/morty.png";
import mr from "./images/mr.png";
import rick from "./images/rick.png";
import summer from "./images/summer.png";

const images = [beth,birdperson,evilmorty,gianthead,goldenford,jerry,jessica,meeseeks,morty,mr,rick,summer];
*/
//------------------------------------------------ IMAGES [array] -------------------------------------------------------------

import bs01 from "./images/bs-200x200-01.jpg";
import bs02 from "./images/bs-200x200-02.jpg";
import bs03 from "./images/bs-200x200-03.jpg";
import bs04 from "./images/bs-200x200-04.jpg";
import bs05 from "./images/bs-200x200-05.jpg";
import bs06 from "./images/bs-200x200-06.jpg";
import bs07 from "./images/bs-200x200-07.jpg";
import bs08 from "./images/bs-200x200-08.jpg";
import bs09 from "./images/bs-200x200-09.jpg";
import bs10 from "./images/bs-200x200-10.jpg";
import bs11 from "./images/bs-200x200-11.jpg";
import bs12 from "./images/bs-200x200-12.jpg";

const images = [bs01,bs02,bs03,bs04,bs05,bs06,bs07,bs08,bs09,bs10,bs11,bs12];

//------------------------------------------------- <Navbar /> [functional component]------------------------------------------------------------
// <h3 style={{border:"1px solid red"}} >Functional Component</h3> {/* this is an example of inline CSS  declared on the element */}

const Navbar = props => (
  <div className="navbar ">
    <div>Memory Game</div>
    <div>{props.navMessage}</div>
    <div>
      Score: <span style={{fontWeight:"bold"}}>{props.score}</span> <span className="pipe">|</span> Top Score: <span style={{fontWeight:"bold"}}>{props.topScore}</span>
    </div>
  </div>
);

//------------------------------------------------- <Character /> [functional component]------------------------------------------------------------

const Character = props => (
  <div className="card" onClick={e => props.clickEvent(e.target.src)}>
    <img className="card-img-top card-height" src={props.name} alt={props.name} />
  </div>
);

//------------------------------------------------ <Container /> [functional component] -------------------------------------------------------------

const Container = props => (
  <div className={props.shake ? 'container d-flex flex-wrap justify-content-center shake' : 'container d-flex flex-wrap justify-content-center'}>
    {props.characters.map((character, i) => <Character name={character} key={i} clickEvent={props.clickEvent} />)}
  </div>
);

//------------------------------------------------ <Footer /> [functional component] -------------------------------------------------------------

const Footer = () => <div className="footer text-center"><a href={"http://www.austintexas.gov/department/barton-springs-pool"} target={"_blank"}>Barton Springs Pool</a> Austin, Texas.</div>;

//------------------------------------------------ <Banner /> [functional component] -------------------------------------------------------------

const Banner = () => (
  <div className="banner text-center d-flex align-items-center justify-content-center">
    <p className="m-0">Click on an image to earn points, but don't click on any more than once.</p>
  </div>
);

//------------------------------------------------- <Game /> [class component] ------------------------------------------------------------

class Game extends Component {

  state = { score: 0, topScore: 0, navMessage: 'Click an image to begin!', allImages: this.shuffleArray(), wasClicked: [], shake: false };

  clickEvent = this.checkClicked.bind(this);

  shuffleArray() {
    const newArr = images.slice();
    console.log("\nnewArr = ", newArr);
    const shuffleArr = [];
   
    while (newArr.length > 0) {
      shuffleArr.push(newArr.splice(Math.floor(Math.random() * newArr.length), 1)[0]);
      console.log("\nshuffleArr = ", shuffleArr);
    }
    return shuffleArr;
  }

  checkClicked(element) {

      const prevState = this.state.wasClicked.slice();
      const shuffled = this.shuffleArray();
      let score = this.state.score;
      let topScore = this.state.topScore;

      if (!this.state.wasClicked.includes(element)) {  
        if (score === topScore) {
          score++;
          topScore++;
        } else {
          score++;
        }
        prevState.push(element);
      }

      if (this.state.wasClicked.includes(element)) {
        let score = 0;
        return this.setState({ score: score, topScore: topScore, navMessage: 'Incorrect guess!', allImages: shuffled, wasClicked: [], shake: true });
      }

      this.setState({ score: score, topScore: topScore, navMessage: 'You Guessed Correctly!', allImages: shuffled, wasClicked: prevState, shake: false });

  }

  render() {
    
    const state = this.state;
    
    return (
      <div>

        <Navbar score={state.score} topScore={state.topScore} navMessage={state.navMessage} />

        <Banner />

        <Container shake={state.shake} characters={state.allImages} clickEvent={this.clickEvent} />

        <Footer />

      </div>
    );
  }
}

//------------------------------------------------ ReactDOM.render() -------------------------------------------------------------

ReactDOM.render(<Game />, document.getElementById("root"));







