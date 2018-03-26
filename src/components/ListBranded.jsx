import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import { connect } from 'react-redux'

 class ListBranded extends Component {

  constructor(props) {
    super(props);
    this.state = { listBranded: []};
    this.setPage.bind(this);
    this.handleChange.bind(this);
   
  }

  setPage = (page) => {
   console.log(page);
  };

   handleChange = ()=> {
    let previousValue = this.props.store.getState()
  }

   unsubscribe = this.props.store.subscribe(()=> {
    let previousValue = this.props.store.getState().search.result;
    console.log(previousValue);
    this.setState({ listBranded: previousValue});
  })


  render() {

    return (
      <div className="listbranded">
        <ul className="pagination">

          {
            this.state.listBranded.map(v => {
              
              const onClick = ev => {
                ev.preventDefault();
                this.setPage(v);
              };
              return (
                <li
                  
                  onClick={onClick}
                  key={v.nix_item_id.toString()}>

                  <a className="page-link" href="">{v.food_name}</a>

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