import React, { Component } from 'react';

export default class Btn extends Component {
  constructor(props){
    super(props);
    this.state={
      value:this.props.value,
    }
  }
  render() {
    return (
      <div className="btn">
        <input type="button" value={this.state.value}/>
      </div>
    )
  }
}
   