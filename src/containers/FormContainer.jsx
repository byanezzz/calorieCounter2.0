import React, { Component } from 'react';
import Form from '../components/Form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
class FormContainer extends Component {
  render() {
    var texto = ' sfdsfdsfsdf';

    return(
    <div>
      <Form store={this.props.store} text={texto} placeholder=' nombre' editing='true'>
      </Form>

    </div>
    )
  }
}
export default withRouter(connect()(FormContainer));
