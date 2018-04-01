import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import FormContainer from './containers/FormContainer'
import DailyCaloriesContainer from './containers/DailyCaloriesContainer'
import AddFoodContainer from './containers/AddFoodContainer'
import Header from './components/Header'
import './App.css';


class App extends Component {

  render() {
    return (
      <Router store={this.props.store}>
        <div className="App">
          <Header store={this.props.store} firebase={this.props.firebase}/>
          <Route exact path="/" render={() => <FormContainer store={this.props.store} />} />
          <Route exact path="/calories" render={() => <DailyCaloriesContainer store={this.props.store} />} />
          <Route exact path="/addFood" render={() => <AddFoodContainer store={this.props.store} />} />
        </div>
      </Router>
    );
  }
}

export default connect()(App);
