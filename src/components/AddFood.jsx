import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {deleteFood} from '../actions'

class AddFood extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addFood: []
    }
  }
  unsubscribe = this.props.store.subscribe(() => {
    let previousValue=[];
    if ( this.props.store.getState().addFood){
    previousValue = this.props.store.getState().addFood;
  } 
    if (previousValue !== undefined) {
      this.setState({ addFood: previousValue });
    }else {
      this.setState({ addFood: [] });
    }
  })
  handleClick=(el)=>{
    this.props.dispatch(deleteFood(el.foodCalories.id))
  }
  render() {  
    return (
      <div className="foodChoose">
        <ul className="">
          { this.state.addFood.map(el => {                  
            return (
              <li key={el.foodCalories.id}>{`${el.foodCalories.name} ----> ${el.foodCalories.calories.toString()}`} <input onClick={()=>this.handleClick(el)} type="button" value="Eliminar"/></li>
            )
            }
            )}
        </ul>
      </div>
    )
  }  
}

export default withRouter(connect()(AddFood));