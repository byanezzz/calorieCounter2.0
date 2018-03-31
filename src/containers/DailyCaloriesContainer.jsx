import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import DailyCalories from '../components/DailyCalories'

class DailyCaloriesContainer extends Component {
  render() {
    return (
      <DailyCalories store={this.props.store}> </DailyCalories>
    )
  }
}

export default withRouter(connect()(DailyCaloriesContainer));