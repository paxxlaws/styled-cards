// src/App.js

import React, { Component } from 'react';
import styled, { css } from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import shortid from 'shortid';
import Card from './Card.js';

const Feed = styled.section`
    padding: 16px;
    background: ${props => props.theme.wash};
`
const NullState = styled.section`
    margin: 16px;
    color: ${props => props.theme.text};
    display: flex;
    font-size: 16pt;
    font-weight: bold;
    align-content: center;
    justify-content: center;
`

function Content ( props ) {
  //const {cardPool, discardPool} = this.props;
  //const col = this.props.theme.wash;
  //document.body.style = "background: col";

  const handView = () => {
    const h = props.cardPool.map(card => 
        <Card key={card.id} id={card.id} title={card.title} description={card.description} discard={props.discard}/>
    )
  
    if (props.cardPool.length <1){
      return <NullState>No Cards</NullState>
    }
    else {
      return h;
    }
  }
  
  const discardView = () => {
    const d = props.discardPool.map(card => <Card key={card.id} id={card.id} title={card.title} description={card.description} discard={props.discard} show="false"/>)
    
    if (props.discardPool.length <1){
      return <NullState>No Cards</NullState>
    }
    else {
      return d;
    }
  }

  return <Feed>
    <Switch>
      <Route exact path="/" component={handView}/>
      <Route path="/discard" component={discardView} />
    </Switch>
  </Feed> ;
}

export default Content;