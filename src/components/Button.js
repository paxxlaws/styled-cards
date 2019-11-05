// src/components/Card/index.js
import React, { Component } from "react";
import styled, { css } from 'styled-components';

const Button = styled.button`
    background: transparent;
    border-radius: 4px;
    outline: none;
    border: 2px solid var(--color-primary);
    color: var(--color-primary);
    text-align: center;
    padding: 8px 12px;
    margin: 0px 2px;
    color: ${props => props.inputColor || "palevioletred"};

    :hover {
        cursor: pointer;
        color: var(--color-primary);
    }

    ${props => props.primary && css`
        background: var(--color-primary);
        color: white;
        :hover {
            cursor: pointer;
            background: var(--color-primary-l);
            color: white;
        }
    `};

    ${props => props.label && css`
        border: none;
    `};
`

export default Button;