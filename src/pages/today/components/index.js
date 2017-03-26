import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { Text } from 'react-native';
// import { Card } from '../../../common/components/';
import Card from '../../../common/components/Card';
import { objToArr } from '../../../common/helpers/selectors';
import Tasks from './Tasks';

class Today extends Component {
  render() {
    let { tasks, taskDictionary, goalDictionary, history, timers, activeTask } = this.props;
    return (
      <Card>
        <Text>Hi</Text>
        {(tasks.length > 0) ? <Tasks {...this.props} key="lks-1" /> : undefined}
      </Card>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  let { user, history, task, goal, timestamp, today } = state

  let historyLength = Object.keys(history).length;
  let currentHistory = objToArr(history)[historyLength-1];

  let tasks = []
  if (currentHistory) {
    tasks = currentHistory.tasks.map(taskId => task[taskId]);
  }

  return {
    user,
    history: currentHistory,
    tasks,
    taskDictionary: task,
    timestamp,
    goalDictionary: goal,
    timers: today.timers,
    message: today.message,
    activeTask: today.activeTask
  };  
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    dispatches: bindActionCreators({ ...actions }, dispatch)
  };
}

Today.propTypes = {
  dispatches: PropTypes.object.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Today);
