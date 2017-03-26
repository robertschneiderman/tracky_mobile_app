import React, {Component} from 'react';
import moment from 'moment';
import { dateToTime, padNumber, msToTime, msToLongerTime } from '../../../common/helpers/time';
import { Text, View, Image } from 'react-native';

import DownArrow from '../../../images/down_arrow';

class TaskTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            interval: null,
            timer: 0,
            totalTime: 0
        };
        this.interval;
    }

    componentDidMount() {
        let totalTime = this.getTotalTime(this.props.timestamps);
        this.setState({totalTime});
    }

    getTotalTime(timestamps) {
        let ts = timestamps[0];
        let totalMilliSeconds = timestamps.reduce((accum, tss) => {
            let milliSeconds = moment.duration(moment(tss.end).unix() - moment(tss.start).unix(), 'seconds').seconds() * 1000;
            return accum + milliSeconds;
        }, 0);
        return totalMilliSeconds;
    }

    getLastTimestamp() {
        let { timestamps } = this.props;
        return timestamps[timestamps.length-1];        
    }

    timerStart() {
        let { dispatches, task, history } = this.props;
        this.setState({running: true});
        this.interval = setInterval(() => {
            this.setState({timer: this.state.timer + 10});
            dispatches.startTimer({id: task.id});
            dispatches.updateTimer({id: task.id, time: this.state.timer + 10});
        }, 10);

        let currentDevDate = moment(history.date).get('date');
        let start = moment().set('date', currentDevDate);

        dispatches.createTimestamp({start, taskId: task.id});        
    }

    timerEnd() {
        let { dispatches, task, history } = this.props;
        let lastTimestamp = this.getLastTimestamp();

        let currentDevDate = moment(history.date).get('date');
        let end = moment().set('date', currentDevDate);   

        dispatches.stopTimer({id: task.id});
        dispatches.finishTimestamp({id: lastTimestamp.id, end});
        dispatches.incrementGoals(task.id, Math.floor(this.state.timer/ 1000));
        clearInterval(this.interval);
        let totalTime = this.state.totalTime + this.state.timer;
        this.setState({running: false, interval: null, timer: 0, totalTime});

    }

    handleClick() {
        (!this.state.running) ? this.timerStart() : this.timerEnd();
    }

    handleMouseEnter() {
        let { task, dispatches } = this.props;
        dispatches.selectTask(task.id);
    }

    renderTimestampDisplay() {
        let { task } = this.props;   
        let lastTimestamp = this.getLastTimestamp();
        return (
            <Text>
                {(lastTimestamp && lastTimestamp.start) ? `${dateToTime(lastTimestamp.start)} - ` : '' }
                {(lastTimestamp && lastTimestamp.end) ? dateToTime(lastTimestamp.end) : '' }
            </Text>
        );
    }

    render() {
        let { timestamp, task } = this.props;
        let { name, icon } = task;
        let { totalTime, timer, running } = this.state;
        
        return(
            <View className="c-task" onClick={this.handleClick.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)}>
                <DownArrow />
                <View className="c-task-text">
                    <View className="w-task-column-1">
                        <Text className="title-task-name">{name}</Text>
                        {this.renderTimestampDisplay()}
                    </View>
                    <View className="w-task-column-2">
                        <Text className="text-task-timer">{msToTime(timer)}</Text>
                        <Text className="text-total-time">{msToTime(totalTime)}</Text>
                    </View>
                </View>
                {(running) ? <View className="shape-loader loader"></View> : undefined}
            </View>
        );
    }
}

export default TaskTime;