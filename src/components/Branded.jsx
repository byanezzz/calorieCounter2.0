import React, { Component } from 'react';

export default class Branded extends Component {
  render() {
    return (
      <div className="branded">
        { this.props.children }
      </div>
    )
  }
}
