import React from 'react';
import { NormalButton } from "./Button.style";

import '../styles/example.css';

import doctor from '../images/doctor_standing.png';
import patient from '../images/person_standing.png';
import speech1 from '../images/speech1.png';
import speech2 from '../images/speech2.png'

class Example extends React.Component {
    render() {
        return (
            <div>
                <div id="left_image">
                    <div id="doctor">
                        <img src={doctor} />
                    </div>
                    <div id="first_bubble">
                        <img src={speech1} />
                        <div 
                            id="first_speech" className="speech_bubble"
                        >
                            What should I know about your Type 1 diabetes?
                        </div>
                    </div>
                </div>
                <div id="right_image">
                    <div id="patient">
                        <img src={patient} />
                    </div>
                    <div id="second_bubble">
                        <img src={speech2} />
                        <div
                            id="second_speech"
                            className="speech_bubble"
                        > 
                            This directive has my most important wishes and my latest data.
                        </div>
                    </div>
                </div>

                <div id="button">
                    <NormalButton className="MediumButtonText">Look at an example!</NormalButton>
                </div>

            </div>
        );
    }
};

export default Example;