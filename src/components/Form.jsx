import React, { Component } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux'
import Search from './Search';
import {sendForm} from '../actions'
import ListBranded from './ListBranded'
import {withRouter} from 'react-router-dom'
class Form extends Component { 

  constructor(props) {
    super(props);
    this.state = { secondsqwqw: 0 , text: this.props.text};
    console.log(this.props);
    // this.handleNewChange.bind(this);
    this.state = {
      edad: '',
      peso: '',
      altura: '',
    };

  }
  handleChange = (e) => { 
    const state = this.state
    state[e.target.name] = e.target.type === 'radio' ? e.target.attributes[3].nodeValue : e.target.value;
    this.setState(state);
  }  
  // state = {
  //   text: this.props.text || 'erer'
  // }

 /*  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  componentDidUpdate(prevProps, prevState) {

    console.log('componentDidUpdate');
  }

 handleNewChange(e){
  this.setState({ value: e.target.value })
 } */ 
  render() { 
    const { edad, peso, altura } = this.state;
    return (       
      <form> 
        <Search/>
          <ListBranded store={this.props.store}/>
        <div> 
          <label htmlFor="masculino">Masculino<input type="radio" name="genero" id="masculino" data-value="masculino" onChange={this.handleChange}/>  </label> 
          <label htmlFor="femenino">Femenino <input type="radio" name="genero" id="femenino" data-value="femenino" onChange={this.handleChange}/>  </label> 
                   
          {/*<input className={
                  classnames({
                    edit: this.props.editing,
                    'new-todo': this.props.newTodo
                  })}
                  type="text"
                  placeholder={this.props.placeholder}
                  value={this.state.text}
                  onChange={this.handleChange} />*/}
        </div> 
        <div> 
          <label htmlFor="edad">Edad</label> 
          <input type="text" name="edad" id="edad" value={edad} onChange={this.handleChange}/> 
          <label htmlFor="peso">Peso, kg</label> 
          <input type="text" name="peso" id="peso" value={peso} onChange={this.handleChange}/> 
          <label htmlFor="altura">Altura, cm</label> 
          <input type="text" name="altura" id="altura" value={altura} onChange={this.handleChange}/> 
        </div> 
        <div> 
          <h5>Tipo de Actividad</h5> 
          <div> 
            <input type="radio" name="actividad" id="sedentario" data-value="1.2" onChange={this.handleChange}/> 
            <label htmlFor="sedentario">Sedentaria</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="ligero" data-value="1.375" onChange={this.handleChange}/> 
            <label htmlFor="ligero">Actividad Ligera (1-3 veces por semana)</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="moderado" data-value="1.55" onChange={this.handleChange}/> 
            <label htmlFor="moderado">Actividad Moderada (3-5 veces por semana)</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="intenso" data-value="1.725" onChange={this.handleChange}/> 
            <label htmlFor="intenso">Actividad Intensa (6-7 veces por semana)</label> 
          </div> 
          <div> 
            <input type="radio" name="actividad" id="atleta" data-value="1.9" onChange={this.handleChange}/> 
            <label htmlFor="atleta">Atleta Profesional</label> 
          </div> 
        </div> 
        <div> 
          <input type="button" value="Siguiente" onClick={()=>this.props.store.dispatch(sendForm(this.state))}/> 
        </div>         
      </form> 
    ) 
  } 
} 
const mapState = (state) => ({
  state: state
})

export default withRouter(connect(mapState)(Form));