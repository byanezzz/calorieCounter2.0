import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import FormContainer from './components/FormContainer'
import { connect } from 'react-redux'

class App extends Component {

  render() {
    return (
      <Router store={this.props.store}>
        <div className="App">
          <Route exact path="/" render={() => <FormContainer store={this.props.store} />} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps
  }
}
export default connect(mapStateToProps)(App);
