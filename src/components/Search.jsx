import React, { Component } from 'react';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import * as types from '../actions/actionTypes';
import {search} from '../actions/index'

class Search extends Component {

  constructor(props) {
    super(props);
    this.state = { value: 0 , text: this.props.text};
    this.searchApi.bind(this);
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleonClick = e => {
    console.log('handleonClick'+ this.state.text);
  }

  searchApi =(e)=>{
    fetch(`https://trackapi.nutritionix.com/v2/search/instant?query=${this.state.text}`, {
          method: 'get',
          headers: {
            'x-app-id': '5be45963',
            'x-app-key': 'bf6622af5a08a533ae6f3a1d7fbbc9b9'
          }
        })
      .then(response => {
        if (response.status !== 200) {
          console.log('Error: ' + response.status);
          return new Error;
        }

        response.json().then(data => {
          const results = data.branded;
          this.props.dispatch(search(results))
        });
      })
      .catch(err => {
        console.log('Error', err);
      })
  }

  

  render() {
    return (
      <div className="search">
            <div className="form-inline">
              <div className="form-group">
                <label htmlFor="inputPassword2" className="sr-only">Password</label>
                <input type="text" className="form-control" id="inputPassword2" onChange={this.handleChange}  placeholder="Password"/>
              </div>
              <button type="button" onClick={this.searchApi} className="btn btn-default">Buscar</button>
            </div>
      </div>
    )
  }
}


export default withRouter(connect()(Search));
