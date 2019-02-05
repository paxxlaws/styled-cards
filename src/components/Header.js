// src/components/Card/index.js
import React, { Component } from "react";
import styled, { css, keyframes } from 'styled-components';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "../App.css";

//#region Wrapper
const Wrapper = styled.div`
    background-color: var(--color-wash);
    border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
    top: 0;
    position: sticky;
    height: auto;
    width: 100%;
    padding: 12px 12px 0 12px;
    z-index: 2;
    display: flex;
    flex-flow: column nowrap;
    align-items: flex-start;
    justify-content: center;
    color: var(--color-primary-l);
    &.scrolled {
      box-shadow: 0 0 8px 8px rgba(0, 0, 0, 0.1);
    }

    .react-tabs__tab-list {
        display: flex;
        flex-flow: row nowrap;
    }

    .react-tabs__tab-list :hover {
        cursor: pointer;
        font-weight: bold;
    }

    .react-tabs__tab {
        list-style: none;
        color: var(--color-primary);
    }

    .react-tabs__tab :hover {
        box-shadow: 0 8px 8px -4px rgba(0, 0, 0, 0.1);
        cursor: pointer;
    }

    .react-tabs__tab--selected {
        color: var(--color-primary);
        box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.1);
        font-weight: bold;
        outline: none;
    }

    .react-tabs__tab--disabled {
        color: GrayText;
        cursor: default;
    }

    /*.react-tabs__tab:focus {
        box-shadow: 0 0 5px hsl(208, 99%, 50%);
        border-color: hsl(208, 99%, 50%);
        outline: none;
    }

    .react-tabs__tab:focus:after {
    content: "";
        position: absolute;
        height: 5px;
        left: -4px;
        right: -4px;
        bottom: -5px;
        background: #fff;
        outline:none;
    }

    .react-tabs__tab-panel {
        display: none;
    }

    .react-tabs__tab-panel--selected {
        display: none;
    }*/
`
//#endregion

const StyledLink = styled(Link)`
    display: block;
    text-decoration: none;
    box-shadow: none;
    padding: 8px 12px 12px 8px;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        box-shadow: none;
    }
`;

export default class Header extends Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return <Wrapper className={this.props.ypos ? "scrolled" : ""}>
            <Tabs>
                <TabList>
                    <Tab>
                        <StyledLink to="/">Hand</StyledLink>
                    </Tab>
                    <Tab >
                        <StyledLink to="/discard/">Discard</StyledLink>
                    </Tab>
                    <TabPanel></TabPanel>
                    <TabPanel></TabPanel>
                </TabList>
            </Tabs>
        </Wrapper>;
    }
}