import React from 'react';

module.exports = React.createClass({

    getInitialState: function () {
        return {
            checked: [false, false, false, false, false, false, false],
            days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            allDays: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            SelectedDays: []
        };
    },
    selectAll: function (event) {
        var checked = this.state.checked,
            days = this.state.allDays,
            selectedDays = this.state.SelectedDays == "" ? [] : this.state.SelectedDays;

        if (event.target.checked) {
            selectedDays = days;
        } else {
            selectedDays = [];
        }

        this.setState({
            SelectedDays: selectedDays,
            checked: this.state.checked.map(function () {
                return event.target.checked
            })
        });
    },
    handleChange: function (index, event) {
        var checked = this.state.checked,
            days = this.state.days,
            selectedDays = this.state.SelectedDays;
        checked[index] = event.target.checked;

        if (event.target.checked) {
            this.state.checked = [false, false, false, false, false, false, false];
            selectedDays.push(days[index]);
        } else {
            for (var i = 0; i < days.length; i++) {
                if (days[index] == selectedDays[i]) {
                    selectedDays.splice(i, 1);
                    break;
                }
            }
        }
        selectedDays.sort();
        this.setState({
            checked: checked,
            SelectedDays: selectedDays
        });
    },

    render: function () {
        var isAllChecked = this.state.checked.filter(function (c) {
                return c;
            }).length === this.state.checked.length;
        return (
            <div >
                <div className="day-group">
                    <SelectAllCheckbox onChange={this.selectAll} checked={isAllChecked} label={'All'}/>

                    <InputCheckbox checked={this.state.checked[0]} onChange={this.handleChange.bind(this, 0)}
                                   label={'Monday'}/>
                    <InputCheckbox checked={this.state.checked[1]} onChange={this.handleChange.bind(this, 1)}
                                   label={'Tuesday'}/>
                    <InputCheckbox checked={this.state.checked[2]} onChange={this.handleChange.bind(this, 2)}
                                   label={'Wednesday'}/>
                    <InputCheckbox checked={this.state.checked[3]} onChange={this.handleChange.bind(this, 3)}
                                   label={'Thursday'}/>
                    <InputCheckbox checked={this.state.checked[4]} onChange={this.handleChange.bind(this, 4)}
                                   label={'Friday'}/>
                    <InputCheckbox checked={this.state.checked[5]} onChange={this.handleChange.bind(this, 5)}
                                   label={'Saturday'}/>
                    <InputCheckbox checked={this.state.checked[6]} onChange={this.handleChange.bind(this, 6)}
                                   label={'Sunday'}/>
                </div>
            </div>
        )
    }

});


var InputCheckbox = React.createClass({
    getDefaultProps: function () {
        return {
            checked: false
        }
    },
    render: function () {
        return (
            <div className="outer">
                <label>
                    <input checked={this.props.checked} value={this.props.label} type='checkbox' {...this.props}/>
                    <span className="span-checked"></span>
                    {this.props.label}
                </label>
            </div>
        )
    }
});

var SelectAllCheckbox = React.createClass({
    getDefaultProps: function () {
        return {
            checked: false
        }
    },
    render: function () {
        return (
            <div className="outer">
                <label>
                    <input checked={this.props.checked} type='checkbox' {...this.props}/>
                    <span className="span-checked"></span>
                    {this.props.label}
                </label>
            </div>
        )
    }
});