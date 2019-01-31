// src/App.js

import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import shortid from 'shortid';
import './App.css';
import Card from './components/Card';

const cards = [
  {title:"Card 1",description:"This is a card"},
  {title:"Card 1",description:"This is a card"},
  {title:"Card 1",description:"This is a card"},
  {title:"Card 1",description:"This is a card"},
  {title:"Card 1",description:"This is a card"},
  {title:"Card 1",description:"This is a card"}
];

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
        ypos: 0
    }
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

  render() {
    const {ypos} = this.state;

    return <div className="app">
        <Header className={ypos ? "scrolled" : ""}/>
        <Feed className = "feed">
          {cards.map((card, index) => (
            <Card key={`div-${shortid.generate()}`} title={card.title} description={card.description} />
          ))}
        </Feed>
      </div>;
  }
}