import React from 'react';
import {render} from 'react-dom';
import ScheduleDaysComponent from './scheduleComponent.jsx';

require('./../../css/style.css');

class App extends React.Component {
    render() {
        return (
            <div>
                <h2>Schedule days !</h2>
                <ScheduleDaysComponent />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));