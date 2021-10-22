import React from 'react';
import { NormalButton } from "./Button.style";

import '../styles/create_directive.css';

class CreateDirective extends React.Component {
    render() {
        return (
            <div id="positioning">
                <h2 id="call_to_action">
                    Take ownership over your care.
                </h2>
                <NormalButton className="LargeButtonText">Create my directive</NormalButton>
            </div>
        );
    }
};

export default CreateDirective;