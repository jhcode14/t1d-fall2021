import '../styles/fonts.css';

import React from "react";
import Styled from 'styled-components';

const Container = Styled.div `
    progress {
        margin-right: 8px;
    }

    progress[value] {
        width: ${props => props.width};

        -webkit-appearance: none;
        appearance: none;
    }

    progress[value]::-webkit-progress-bar {
        height: 10px;
        border-radius: 20px;
        background-color: #eee;
    }

    progress[value]::-webkit-progress-value {
        height: 10px;
        border-radius: 20px;
        background-color: ${props => props.color};
    }
`;


class ProgressBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            value: 0,
            max: 100,
            color: 'blue',
            width: '250px'
        }
    }

    render() {
        return (
            <Container color = {this.color} width  = {this.width}>
                <progress value = {this.value} max = {this.max}></progress>
                <span>{this.value/this.max * 100}%</span>
            </Container>
        )
    }
}

export default ProgressBar;