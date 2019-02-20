// src/components/Card/index.js
import React, { Component } from "react";
import styled, { css, keyframes, ThemeProvider } from 'styled-components';
import Button from "./Button.js";

//#region Wrapper
const Wrapper = styled.div`
    border-radius: 8px;
    background-color: ${props => props.theme.card};
    padding: 16px;
    margin: 0px 0px 12px 0px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    box-shadow: 0 4px 4px 0 ${props => props.theme.shadow};
    transition: all .2s ease-in;
    max-height: 150px;
    height: auto;
    background-color: ${props => props.theme.card};

    &.expanded {
        height: 300px;
        max-height: 300px;
        align-items: flex-start;
        flex-flow: column nowrap;
        transition: all .2s ease-out;
        .footerButtons {            
            width: 100%;
        }
        Button {
            display: flex;
            justify-content: center;
            flex: 1;
        }
    }

    .card-enter {
      opacity: 0.01;
    }

    .card-enter.card-enter-active {
      opacity: 1;
      transition: opacity 500ms ease-in;
    }

    .card-leave {
      opacity: 1;
    }

    .card-leave.card-leave-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
    }

    .card-appear {
        opacity: 0.01;
    }

    .card-appear.card-appear-active {
        opacity: 1;
        transition: opacity .5s ease-in;
    }

    .cardContents {
        flex: 1;
        margin: 4px;
    }

    .footerButtons {
        transition: all .2s ease-out;
        display: flex;
        flex-flow: row nowrap;
        margin: 0 -2px;
        display: ${props => props.show ? "none" : ""};
    }

    :hover {
        box-shadow: 0 8px 8px 0 ${props => props.theme.shadow};
        cursor: pointer;
    }
`
//#endregion

class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
        selected: false,
        in: true
    }
    //let className = 'card-closed';
  }
  
  selectCard = () => {
    this.setState({selected: !this.state.selected})
    //this.className = this.state.selected ? 'card-closed' : 'card-open';
    //this.setState({animation: ${expandCard} 2s linear})
    //this.refs.card.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    //this.refs.card.scroll(0,100);
    //console.log(this.props.id);
    //this.props.discard(this.props.id);
  }

  discardCard = (e) => {
    e.stopPropagation();
    this.props.discard(this.props.id);
  }

  playCard = (e) => {
    e.stopPropagation();
    //this.props.discard(this.props.id);
    console.log("Play");
  }

  componentWillUnmount() {
    this.setState({in: false})
  }

  render() {
    const {selected} = this.state;
    //let styles = this.state.select ? {height: '300px'} : {height: 'auto'};
    //let styles = {animation: ${expandCard} 2s linear};
    //let className = this.state.selected ? 'card-open' : 'card-closed';

    return <Wrapper className={selected ? "expanded" : ""} onClick={this.selectCard} ref="card">
        <div className = "cardContents">
            <h2 className="title">{this.props.title}</h2>
            <p className="description">{this.props.description}</p>
        </div>
        {this.props.show ? null :<div className="footerButtons">
        <Button onClick={this.discardCard}>Discard</Button>
            <Button primary onClick={this.playCard}>Play </Button>
        </div>}
    </Wrapper>;
    }
}
export default Card;