/*
    (Unfinished)
    This JS file contains button components, w

    Reference: https://www.youtube.com/watch?v=-FZzPHSLauc

    TODO:
    - Animation when hovering
    - Resizeable button
*/

import styled from 'styled-components'

export const BlackButton = styled.button`
    width: 291 px;
    height: 53 px;
    left: 897px;
    top: 25px;
    border-radius: 10px;


    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;
    color: white;
    background-color: black;

    white-space: nowrap;
    padding: 12px, 24px;

    &:hover {
        background-color: gray;
    }
`;

export const NormalButton = styled.button`
    left: 897px;
    top: 25px;
    border-radius: 10px;


    font-family: Inter;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 29px;
    /* identical to box height */

    text-align: center;
    color: white;
    background-color: #5048E5;

    white-space: nowrap;

    &:hover {
        background-color: #6D66E5;
    }
`;