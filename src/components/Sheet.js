// src/components/Card/index.js
import React, { Component } from "react";
import styled, { css, ThemeProvider } from 'styled-components';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Button from "./Button.js";

//#region Wrapper
const Wrapper = styled.div`
    display: block;
    position: fixed;
    z-index: 98;
    transition: opacity 300ms ease-in;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;

    &.card-enter {
      opacity: 0.01;
    }

    &.card-enter.card-enter-active {
      opacity: 1;
      transition: opacity 300ms ease-in;
    }

    &.card-exit {
      opacity: 1;
    }

    &.card-exit.card-exit-active {
      opacity: 0.01;
      transition: opacity 300ms ease-in;
    }

    &.card-appear {
        opacity: 0.01;
    }

    &.card-appear.card-appear-active {
        opacity: 1;
        transition: opacity .5s ease-in;
    }
`
//#endregion

//#region Scrim
const Scrim = styled.div`
    display: block;
    position: fixed;
    z-index: 98;
    transition: all .2s ease-in;
    height: 100%;
    width: 100%;
    left: 0;
    top: 0;
    overflow: hidden;
    background-color: ${props => props.theme.wash};
    opacity: .7;
`
//#endregion

//#region Card
const Card = styled.div`
    border-radius: 16px 16px 0px 0px;
    padding: 16px;
    position: fixed;
    z-index: 99;
    box-shadow: 0px -4px 4px 0px ${props => props.theme.shadow};
    transition: all .2s ease-in;
    height: 30%;
    width: 100%;
    left: 0;
    bottom: 0;
    overflow: hidden;
    background-color: ${props => props.theme.card};
    opacity: 1;
`
//#endregion

class Sheet extends Component {
  constructor(props){
    super(props);
    this.state = {
        //in: false
    }
  }

  render() {
    //const { in } = this.props;
    //let styles = this.state.select ? {height: '300px'} : {height: 'auto'};
    //let styles = {animation: ${expandCard} 2s linear};
    //let className = this.state.selected ? 'card-open' : 'card-closed';

    return <CSSTransition
        in={this.props.in}
        timeout={300}
        classNames="card"
        mountOnEnter={false}
        unmountOnExit>
        <Wrapper>
            <Scrim onClick={this.props.openSheet}/>
            <Card>
                <h2 className="title">{this.props.title}</h2>
                <p className="description">{this.props.description}</p>
            </Card>
        </Wrapper>
    </CSSTransition>;
    }
}
export default Sheet;