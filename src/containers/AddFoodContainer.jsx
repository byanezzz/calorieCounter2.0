import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import AddFood from '../components/AddFood';
import Search from '../components/Search';
import ListBranded from '../components/ListBranded';
import Calculator from '../components/Calculator';

class AddFoodContainer extends Component {
  render() {
    return (
      <div>
        <Calculator store={this.props.store}/>
        <Search />
        <ListBranded store={this.props.store} />
        <AddFood store={this.props.store}> </AddFood>
        
      </div>
    )
  }
}

export default withRouter(connect()(AddFoodContainer));