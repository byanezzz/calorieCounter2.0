import React, { Component } from 'react';
import Form from './Form'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
class FormContainer extends Component {
  
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

const mapStateToProps = (state, ownProps) => {
  return {
    ownProps: ownProps
  }
}

export default withRouter(connect(mapState,mapStateToProps)(FormContainer));
