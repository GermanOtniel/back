import React, {Component} from 'react';
import * as api from '../services/entryService'
import {Link} from 'react-router-dom';

class EntryDetail extends Component{

  state={
    id:null,
    entry:{}
  }

  componentWillMount(){
    const id = this.props.match.params.id
    this.setState({id})
    //usar el service para obtener el entry desde el backend 
    api.getSingleItem(id)
    .then(entry=>{
      this.setState({entry})
    })
    .catch(e=>alert(e))
  }




  render(){
    const {entry} = this.state;
    
    return(
      <div>
        <h2>{entry.title}</h2>
        <h5>{entry.author}</h5>
        <br/>
        <p>{entry.body}</p>
        <img width="400" src={ entry.cover} alt=""/>
      
      <Link to={"/"}>
      <p>Volver a home</p>
      
      </Link>
      </div>
    );
  }
}
export default EntryDetail;