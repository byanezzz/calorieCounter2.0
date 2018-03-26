import React, { Component } from 'react';
import Form from './Form'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
class FormContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
var texto =' sfdsfdsfsdf';

    return (
      <Form store={this.props.store} text={texto} placeholder=' nombre' editing='true'>
        
      </Form>
    )
  }
}
const mapState = (state) => ({
  state: state
})

export default withRouter(connect(mapState)(FormContainer));
