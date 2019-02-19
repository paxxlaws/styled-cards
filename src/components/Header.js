// src/components/Card/index.js
import React, { Component } from "react";
import styled, { css, keyframes, withTheme } from 'styled-components';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import Button from "./Button.js";

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
    flex-flow: row nowrap;
    align-items: center;
    justify-content: left;
    color: var(--color-primary-l);
    background-color: ${props => props.theme.wash};

    &.scrolled {
      box-shadow: 0 0 8px 8px ${props => props.theme.shadow};
    }

    nav {
        width: 100%
    }

    ul {
        display: flex;
        flex-flow: row nowrap;
        list-style: none;
    }
`;
//#endregion

const StyledLink = styled(NavLink)`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    text-decoration: none;
    color: var(--color-primary);
    box-shadow: none;
    padding: 8px 12px 12px 8px;
    &.active{
        color: var(--color-primary);
        box-shadow: 0 6px 4px -4px ${props => props.theme.shadow};
        font-weight: bold;
        outline: none;
    }
    &:hover{
        cursor: pointer;
        font-weight: bold;
        box-shadow: 0 8px 8px -4px ${props => props.theme.shadow};
    }
`;

const Header = ({ ypos, changeTheme }) => (
    <Wrapper className={ypos ? "scrolled" : ""}>
        <nav>
            <ul>
                <li><StyledLink to="/" exact>Hand</StyledLink></li>
                <li><StyledLink to="/discard">Discard</StyledLink></li>
            </ul>
        </nav>
        <Button label onClick={changeTheme}>Theme</Button>
    </Wrapper>
);

export default Header;