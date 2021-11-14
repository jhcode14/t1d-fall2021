import '../styles/demo_survey.css';
import '../styles/fonts.css';

import React, { useState, useEffect } from "react";
import ProgressBar from './ProgressBar.js';

export default function DemoSurvey() {
    const [value, setValue] = useState(0);

    useEffect(()=> {
        const interval = setInterval(() => {
            setValue((oldValue) => {
                const newValue = oldValue += 10;

                if(newValue === 100) {
                    clearInterval(interval);
                }

                return newValue;
            })
        }, 1000)
    }, []);

    return <ProgressBar value = {value} max = {100} color = {'purple'} width = {'350px'}/>;
}