import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {changePath} from '../actions';

class DailyCalories extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dailyCalories: ''
    }
  }
  unsubscribe = this.props.store.subscribe(() => {
    let previousValue
    if ( this.props.store.getState().sendForm){
    previousValue = this.props.store.getState().sendForm.calories;}
    if (previousValue !== undefined) {
      this.setState({ dailyCalories: previousValue });
    }
  })
  render() {
    return (
      <div className="dailycalories">
      <h1>Recomendadas para ti</h1>
        <h2>{this.state.dailyCalories} cal</h2>
        <input type="button" value="Siguiente" onClick={ ()=>
            this.props.history.push("/addFood")}/>
      </div>
    )
  }
  componentDidMount(){
    this.props.store.dispatch(changePath({name:'DailyCalories'}))
  }
}

export default withRouter(connect()(DailyCalories));