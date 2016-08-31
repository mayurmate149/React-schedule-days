import React from 'react';
import {render} from 'react-dom';
import ScheduleDaysComponent from './scheduleComponent.jsx';

require('./../../css/style.css');

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Select days of week !</h2>
                <h4>Select all days or select specific days of week.</h4>
                <ScheduleDaysComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));