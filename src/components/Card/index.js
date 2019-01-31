// src/components/Card/index.js
import React, { Component } from "react";
import styled, { css, keyframes } from 'styled-components';
import "../../App.css";

const Button = styled.button`
    background: transparent;
    border-radius: 4px;
    outline: none;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    text-align: center;
    padding: 8px 12px;
    margin: 0px 2px;
    display: flex;

    color: ${props => props.inputColor || "palevioletred"};

    ${props => props.primary && css`
        background: var(--color-primary);
        color: white;
        :hover {
            cursor: pointer;
            background: var(--color-primary-l);
            color: white;
        }
    `};
    :hover {
        cursor: pointer;
        color: var(--color-primary);
    }

`

// Create the keyframes
const expandCard = keyframes`
    from {
        height: 100px;
    }

    to {
        height: 150px;
    }
`;

// Create the keyframes
const collapseCard = keyframes`
    from {
        height: 150px;
    }

    to {
        height: 100px;
    }
`;


const Wrapper = styled.div`
    border-radius: 3px;
    border: 1px solid #e6e6e6;
    background-color: var(--color-card);
    padding: 16px;
    margin: 0px 0px 12px 0px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.1);
    transition: all .2s ease-out;
    height: auto;
    max-height: 150px;

    &.expanded {
        height: 300px;
        max-height: 300px;
        align-items: flex-start;
        flex-flow: column nowrap;
        .footerButtons {            
            width: 100%;
        }
        Button {
            display: flex;
            justify-content: center;
            flex: 1;
        }
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
    }

    :hover {
        box-shadow: 0 8px 8px 0 rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }
`

export default class Card extends Component {
  constructor(props){
    super(props);
    this.state = {
        selected: false
    }
    //let className = 'card-closed';
  }
  
  selectCard = () => {
    this.setState({selected: !this.state.selected})
    //this.className = this.state.selected ? 'card-closed' : 'card-open';
    //this.setState({animation: ${expandCard} 2s linear})
    console.log('The link was clicked.')
  }

  render() {
    const {selected} = this.state;
    //let styles = this.state.select ? {height: '300px'} : {height: 'auto'};
    //let styles = {animation: ${expandCard} 2s linear};

    //let className = this.state.selected ? 'card-open' : 'card-closed';

    return <article className="card">
        <Wrapper className={selected ? "expanded" : ""} onClick={this.selectCard}>
            <div className = "cardContents">
                <h2 className="title">{this.props.title}</h2>
                <p className="description">{this.props.description}</p>
            </div>
            <div className="footerButtons">
                <Button>Discard</Button>
                <Button primary>Play </Button>
            </div>
        </Wrapper>
      </article>;
    }
}