import React, { Component } from 'react';

export default class FormUser extends Component {
  render() {
    return (
      <div className="formuser">
        { this.props.children }
      </div>
    )
  }
}
