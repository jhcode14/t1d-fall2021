/*
    (Unfinished)
    This JS file contains button components, w

    Reference: https://www.youtube.com/watch?v=-FZzPHSLauc

    TODO:
    - Import Inter font
    - Adjust background color when hovering
*/

import styled from 'styled-components'


/*
    (Incomplete)
    To use this Button component, you will need to manually set the
    size of the button.

    Command for turning default value to mannually set value.
    ${(props) => props.name}
*/
export const Button = styled.button`
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
    background-color: #5048E5;

    white-space: nowrap;
    padding: 12px, 24px;
    


    &:hover {
        background-color: #A6B4FC;
    }
`;