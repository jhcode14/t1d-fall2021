import React from 'react';
import { NormalButton } from "./Button.style";

import '../styles/example.css';

import convo from '../images/convo.png';
import { Link } from "react-router-dom";

class Example extends React.Component {
    render() {
        return (
            <div>
                <div id="doctor">
                    <img src={convo} alt="conversation" class="responsive"/>
                </div>
                <div id="button">
                <Link to="/create">
                  <NormalButton className="MediumButtonText" >Create my directive</NormalButton>
                </Link>
                </div>

            </div>
        );
    }
};

export default Example;
