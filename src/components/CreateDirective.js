import React from 'react';
import { NormalButton } from "./Button.style";
import { Link } from "react-router-dom";


import '../styles/create_directive.css';

class CreateDirective extends React.Component {
    render() {
        return (
            <div id="positioning">
                <h2 id="call_to_action">
                    Take ownership over your care.
                </h2>
                <Link to="/create">
                  <NormalButton className="MediumButtonText" >Create my directive</NormalButton>
                </Link>
            </div>
        );
    }
};

export default CreateDirective;
