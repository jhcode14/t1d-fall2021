import React from 'react';

import '../styles/example.css';

import doctor from '../images/doctor_standing.png';
import patient from '../images/person_standing.png';

class Example extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <img src={doctor} />
                    <div>What should I know about your Type 1 diabetes?</div>
                </div>
                <div>
                    <img src={patient} />
                    <div>This directive has my most important wishes and my latest data. </div>
                </div>
            </div>
        );
    }
};

export default Example;