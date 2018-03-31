import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {changePath} from '../actions'
import {calculator} from '../actions'

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      maxCalories: '',
    }
  }
  unsubscribe = this.props.store.subscribe(() => {
    let previousValue=[];
    if ( this.props.store.getState().sendForm){
    previousValue = this.props.store.getState().sendForm.calories;}
    if (previousValue !== undefined) {
      this.setState({ maxCalories: previousValue });
    }
  })
  render() { 
    return (
      <div><h1>{this.state.maxCalories}</h1></div>
    )
  }  
  componentDidMount(){
    this.props.dispatch(changePath({name:'Calculator'}));
}

}

export default withRouter(connect()(Calculator));