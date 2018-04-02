import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { changePath } from '../actions'
import { calculator } from '../actions'

class Calculator extends Component {
  constructor(props) {
    props = { ...props, previousValue: 0 };
    super(props);
    this.state = {
      maxCalories: '',
    }
  }
  unsubscribe = this.props.store.subscribe(() => {
    let currentValue = 0;
    let acumCalories = 0;
    if (this.props.store.getState().sendForm) {
      currentValue = this.props.store.getState().sendForm.calories;
    }
    if (currentValue !== undefined && currentValue !== this.props.previousValue) {
      this.props = { ...this.props, previousValue: currentValue };
      this.setState({ maxCalories: currentValue });
    } else if (currentValue === undefined) {
      this.setState({ maxCalories: '' });
    }
    if (this.props.store.getState().addFood) {
      let totalFood = this.props.store.getState().addFood;
      totalFood.forEach(el => {
        let aux = el.foodCalories.calories;
        acumCalories += parseFloat(aux)

      })
      currentValue = Math.round(currentValue - acumCalories);
      this.setState({ maxCalories: currentValue });
    }
  })
  render() {
    return (
      <div><h1>{this.state.maxCalories}</h1></div>
    )
  }
  componentDidMount() {
    this.props.dispatch(changePath({ name: 'Calculator' }));
  }

}

export default withRouter(connect()(Calculator));