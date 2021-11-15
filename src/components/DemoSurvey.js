import '../styles/demo_survey.css';
import '../styles/fonts.css';

import React, { useState, useEffect } from "react";
import ProgressBar from './ProgressBar.js';
import { Button } from 'react-bootstrap';


// export default function DemoSurvey() {
//     const [value, setValue] = useState(0);

//     useEffect(()=> {
//         const interval = setInterval(() => {
//             setValue((oldValue) => {
//                 const newValue = oldValue += 10;

//                 if(newValue === 100) {
//                     clearInterval(interval);
//                 }

//                 return newValue;
//             })
//         }, 1000)
//     }, []);

//     return <ProgressBar value = {value} max = {100} color = {'purple'} width = {'350px'}/>;
// }

class DemoSurvey extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            progress : 0,
        }

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState(state => {
          if (state.progress + 10 === 100) {
            this.setState({progress: 0});
          }

          return this.setState({progress: state.progress + 10});
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.progress !== this.state.progress) {
            console.log(this.state.progress);
        }
    }

    render() {
        return (
            <div>
                <ProgressBar value = {this.props.progress} max = {100} color = {'purple'} width = {'350px'} />

                <Button onClick = {this.handleClick}> Test </Button>
            </div>
        )
    }
}

export default DemoSurvey;