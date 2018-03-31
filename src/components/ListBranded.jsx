import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'
import { addFood, calculator } from '../actions/index'

 class ListBranded extends Component {

  constructor(props) {
    super(props);
    this.state = { listBranded: []};
    this.handleClick.bind(this);
    this.handleChange.bind(this);
   
  }

  handleClick = (ev) => {
    ev.preventDefault();
    this.props.dispatch(addFood({name:ev.target.innerHTML,calories:ev.target.attributes[1].value,id:ev.currentTarget.id}))
    this.props.dispatch(calculator(ev.target.attributes[1].value))
  };

   handleChange = ()=> {
    let previousValue = this.props.store.getState()
  }

   unsubscribe = this.props.store.subscribe(()=> {
    let previousValue = this.props.store.getState().search.result;
/*     console.log(previousValue);
 */    if (previousValue !== undefined){
    this.setState({ listBranded: previousValue});
  }
  })

  render() {
    return (
      <div className="listbranded">
        <ul className="pagination">
          { this.state.listBranded.map(v => {              
              /* const handleClick = ev => {
                ev.preventDefault();
                console.log(ev.target.attributes[1].value)
                this.props.dispatch(addFood(ev.target.attributes[1].value))
              }; */
                return (  
                <li                  
                  onClick={this.handleClick}
                  key={v.nix_item_id.toString()} id={v.nix_item_id.toString()}>
                  <a className="page-link" data-calories={v.nf_calories} href="">{v.food_name}</a>
                </li>
                );  
            })
          }
        </ul>
      </div>
    )
  }
}



export default withRouter(connect()(ListBranded));