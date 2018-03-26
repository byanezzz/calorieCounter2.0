
import React from 'react'
import Form from '../components/Form'
import { connect } from 'react-redux'

const Formulario = ({dispatch, state }) => {


  return (
    <div>
      <input value='valor a mostrar' />
      
    </div>
    )
}

const mapState = (state) => ({
  state: state
})
export default connect(mapState)(Formulario)