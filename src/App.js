// src/App.js

import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import shortid from 'shortid';
import './App.css';
import Card from './components/Card';

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
  this.id = id;
  this.title = title;
  this.description = description;
}

const AppMain = styled.div`
  display: flex;
  flex-direction: column;
`

const Header = styled.div`
    background-color: var(--color-wash);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    top: 0;
    position: sticky;
    height: 64px;
    width: 100%;
    z-index: 2;
    &.scrolled {
      box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);
    }
`

const Feed = styled.section`
    margin: 16px;
`

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        ypos: 0,
        cardPool: cardInput.map(card => {
          var c = new CardObj(shortid.generate(),card.title,card.description);
          return c;
      })
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll)
    console.log(this.state.pool);
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
    console.log(this.state.cardPool.filter((card)=>card.id!==cardID))
    this.setState({cardPool: this.state.cardPool.filter((card)=>card.id!==cardID)})
  }

  render() {
    const {ypos,cardPool} = this.state;

    return <div className="app">
        <Header className={ypos ? "scrolled" : ""}/>
        <Feed className = "feed">
          {cardPool.map(card => <Card key={card.id} id={card.id} title={card.title} description={card.description} discard={this.discard}/>)}
        </Feed>
      </div>;
  }
}