import React, {Component} from 'react';
import { dateToTime } from '../../../common/helpers/timeHelpers';
import { Text, View } from 'react-native';


class TaskFrequency extends Component {
    constructor(props) {
        super(props);
        this.state = {
            running: false,
            timer: 0
        };
    }

    handleClick() {
        let { dispatches, task } = this.props;
        dispatches.createTimestamp({taskId: task.id});        
        dispatches.incrementGoals(task.id, 1);
    }

    handleMouseEnter() {
        let { task, dispatches } = this.props;
        dispatches.selectTask(task.id);
    }

    getLastTimestamp() {
        let { timestamps } = this.props;
        return timestamps[timestamps.length-1];        
    }

    renderTimestampDisplay() {
        let { task } = this.props;   
        let lastTimestamp = this.getLastTimestamp();
        return (lastTimestamp && lastTimestamp.start) ? dateToTime(lastTimestamp.start) : '';
    }        

    render() {
        let { task, goal } = this.props;
        let { name, icon } = task;
        // debugger;        
        return(
            <View className="c-task" onClick={this.handleClick.bind(this)} onMouseEnter={this.handleMouseEnter.bind(this)}>
                <img src={`./static/images/task_icons/${icon}.svg`} className="img-task-icon" />
                <View className="c-task-text">
                    <View className="c-task-column-1">
                        <Text className="title-task-name">{name}</Text>
                        <Text className="text-timestamp-f-display">
                            {this.renderTimestampDisplay()}
                        </Text>
                    </View>
                    <View className="c-task-column-2">
                        <Text className="text-task-count">
                            {goal.count}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

export default TaskFrequency;