// src/App.js

import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import shortid from 'shortid';
import './App.css';
import Card from './components/Card.js';
import Header from './components/Header.js';

const cardInput = [
  {title:"Card 1",description:"This is a card"},
  {title:"Card 2",description:"This is a card"},
  {title:"Card 3",description:"This is a card"},
  {title:"Card 4",description:"This is a card"},
  {title:"Card 5",description:"This is a card"},
  {title:"Card 6",description:"This is a card"},
  {title:"Card 7",description:"This is a card"},
  {title:"Card 8",description:"This is a card"}
];

function CardObj(id, title, description) {
  this.key = id; //not sure this is necessary
  this.id = id;
  this.title = title;
  this.description = description;
}

const Feed = styled.section`
    margin: 16px;
`

const NullState = styled.section`
    margin: 16px;
    display: flex;
    width: 100%;
    height: 100%;
    font-size: 16pt;
    font-weight: bold;
    align-content: center;
    justify-content: center;
`

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        ypos: 0,
        cardPool: cardInput.map(card => {
          var c = new CardObj(shortid.generate(),card.title,card.description);
          return c;
        }),
        discardPool: []
    }
    //const HandView = () => this.state.cardPool.map(card => <Card key={card.id} id={card.id} title={card.title} description={card.description} discard={this.discard}/>);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
  }
  
  componentWillUnmount() {
    window.removeEventListener('scroll', this.listenToScroll)
  }
  
  listenToScroll = () => {
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop
  
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight
  
    const scrolled = winScroll / height
  
    this.setState({
      ypos: scrolled,
    })
  }

  discard = (cardID) => {
    var cardToDiscard = this.state.cardPool.filter((card)=>card.id===cardID)
    this.setState({discardPool: this.state.discardPool.concat(cardToDiscard)})
    this.setState({cardPool: this.state.cardPool.filter((card)=>card.id!==cardID)})//this is a bit redundant, clean up later
  }

  handView = () => {
    const h = this.state.cardPool.map(card => 
        <Card key={card.id} id={card.id} title={card.title} description={card.description} discard={this.discard}/>
    )

    if (this.state.cardPool.length <1){
      return <NullState>No Cards</NullState>
    }
    else {
      return h;
    }
  }

  discardView = () => {
    const d = this.state.discardPool.map(card => <Card key={card.id} id={card.id} title={card.title} description={card.description} discard={this.discard}/>)
    if (this.state.discardPool.length <1){
      return <NullState>No Cards</NullState>
    }
    else {
      return d;
    }
  }

  render() {
    const {ypos,cardPool} = this.state;

    return <Router>
    <div className="app">
      <Header ypos={ypos}/>
      <Feed className = "feed">
        <Route exact path="/" component={this.handView}/>
        <Route path="/discard" component={this.discardView} />
      </Feed>
    </div>
    </Router> ;
  }
}