// src/App.js

import React, { Component } from 'react';
import styled, { css, ThemeProvider, createGlobalStyle } from 'styled-components'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import shortid from 'shortid';
import './App.css';
import Card from './components/Card.js';
import Header from './components/Header.js';
import Sheet from "./components/Sheet.js";
import Container from "./components/Container.js";
//import Theme from "./logic/Theme.js";
//import Content from './components/Content.js';

//#region Theme
const dark = {
  wash: "var(--color-dark-wash)",
  card: "var(--color-dark-card)",
  shadow: "var(--color-dark-shadow)",
  text: "var(--color-dark-text)",
  text_t: "var(--color-dark-text-t)",
  text_tt: "var(--color-dark-text-tt)",
  text_ttt: "var(--color-dark-text-ttt)"
};

const light = {
  wash: "var(--color-wash)",
  card: "var(--color-card)",
  shadow: "var(--color-shadow)",
  text: "var(--color-text)",
  text_t: "var(--color--text-t)",
  text_tt: "var(--color-text-tt)",
  text_ttt: "var(--color-text-ttt)"
};
//#endregion

//#region GlobalStyle
const GlobalStyle = createGlobalStyle`
  :root {
    --color-primary: DarkOrange;
    --color-primary-l: orange;
    --color-primary-d: OrangeRed;

    --color-nav: #333;
    --color-wash: #eee;
    --color-card: #fff;
    --color-dark-wash: #222;
    --color-dark-card: #000;
    --color-highlight: PapayaWhip;
    --color-shadow: rgba(0, 0, 0, 0.1);
    --color-dark-shadow: rgba(0, 0, 0, 0.4);

    --color-text: #111;
    --color-text-t: #333;
    --colot-text-tt: #555;
    --color-text-ttt: #777;
    --color-dark-text: #bbb;
    --color-dark-text-t: #999;
    --colot-dark-text-tt: #777;
    --color-dark-text-ttt: #555;

    --font: "Lato", sans-serif;
    background-color: ${props => props.theme.wash};
  }
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    user-select: none;
  }

  h1 {
    color: ${props => props.theme.text};
    margin: 0px 0px 8px 0px;
    font-size: 17pt;
  }


  h2 {
    color: ${props => props.theme.text};
    margin: 0px 0px 4px 0px;
    font-size: 15pt;
  }

  body, p {
    width: 100%;
    height: 100%;
    font-family: var(--font);
    color: ${props => props.theme.text_t};
    font-size: 13pt;
    &.no-scroll{
      overflow: hidden;
    }
  }
`
//#endregion

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

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        ypos: 0,
        theme: light,
        cardPool: cardInput.map(card => {
          var c = new CardObj(shortid.generate(),card.title,card.description);
          return c;
        }),
        discardPool: [],
        openSheet: false
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

  changeTheme = () => {
    this.setState({theme: (this.state.theme === light) ? dark : light})
  }

  discard = (cardID) => {
    var cardToDiscard = this.state.cardPool.filter((card)=>card.id===cardID)
    this.setState({discardPool: this.state.discardPool.concat(cardToDiscard)})
    this.setState({cardPool: this.state.cardPool.filter((card)=>card.id!==cardID)})//this is a bit redundant, clean up later
  }

  handView = () => {
    const h = this.state.cardPool.map(card => 
        <Card key={card.id} id={card.id} title={card.title} description={card.description} discard={this.discard} theme={this.props.theme}/>
    )

    if (this.state.cardPool.length <1){
      return <NullState>No Cards</NullState>
    }
    else {
      return h;
    }
  }

  discardView = () => {
    const d = this.state.discardPool.map(card => <Card key={card.id} id={card.id} title={card.title} description={card.description}show="false"/>)
    if (this.state.discardPool.length <1){
      return <NullState>No Cards</NullState>
    }
    else {
      return d;
    }
  }

  openSheet = () => {
    if (this.state.openSheet == true){document.body.classList.remove('no-scroll');}
    else {
      document.body.classList.add('no-scroll');
    }
    this.setState({openSheet: !this.state.openSheet})
    //{openSheet ? <Sheet title="Sheet" description="This is a sheet" openSheet={this.openSheet} in={openSheet}/>: null}
  }

  render() {
    const {ypos,cardPool,discardPool,theme,openSheet} = this.state;

    return <ThemeProvider theme={theme}> 
      <Router>
        <React.Fragment>
          <GlobalStyle />
          <Sheet title="Sheet" description="This is a sheet" openSheet={this.openSheet} in={openSheet}/>
          <Header ypos={ypos} changeTheme={this.changeTheme} openSheet={this.openSheet}/>
          <Feed>
            <Container />
            <Switch>
              <Route exact path="/" component={this.handView}/>
              <Route path="/discard" component={this.discardView} />
            </Switch>
          </Feed>
        </React.Fragment>
      </Router>
    </ThemeProvider> ;
  }
}

export default App;