import React from 'react';

import '../styles/creationgif.css';
import example from '../images/example.gif';

class CreationGIF extends React.Component {
    render() {
        return(
            <div id="gif_box">
                <img src={example} id="gif_img"/>
            </div>
        );
    }
};

export default CreationGIF;
