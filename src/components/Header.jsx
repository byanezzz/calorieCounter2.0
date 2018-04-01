import React, { Component } from 'react';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {authUser} from '../actions'
import classNames from 'classnames';

class Header extends Component {
  constructor(props) {
   super(props);

   this.state = {
    email:'',
    password: ''
  };

  this.props.firebase.auth().onAuthStateChanged( firebaseUser => {
    if(firebaseUser) {
        this.props.store.dispatch(authUser(firebaseUser.uid));
        this.setState({...this.state,userLogin:true});
        console.log(firebaseUser);
     
    } else {
     this.props.store.dispatch(authUser());
     this.setState({...this.state,userLogin:false});
     this.props.history.push("/");
      console.log('no logueado');
     
    }    
  });
   
  }

  handleChange = (e) => { 
    this.setState({...this.state,[e.target.name]:e.target.value});
  }

  authentication = (ev) => {
    const auth = this .props.firebase.auth();
    const promise = auth.signInWithEmailAndPassword(this.state.email, this.state.password);
    promise.catch(e => console.log(e.message));   
 
  }

  logout = (ev) => {
    const auth = this.props.firebase.auth();
    auth.signOut();  
 }
 
  
  render() {  
    return (
      <div className="container">
        <input name="email" type="email" onChange={this.handleChange} placeholder="Email"/>
        <input name="password" type="password" onChange={this.handleChange} placeholder="Contraseña"/>
        <button id = "btnLogin" onClick={()=>this.authentication()} className={classNames({'hide': this.state.userLogin})}>Login</button>
        <button id = "btnLogout" onClick={()=>this.logout()}  className={classNames({'hide': !this.state.userLogin})}>Logout</button>
    </div>
    )
  }  
}

export default withRouter((Header));