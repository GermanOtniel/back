import React, {Component} from 'react';
import * as api from '../services/entryService';
import {Link} from 'react-router-dom';

class HomePage extends Component{

  state={
    entries:[]
  }

  componentWillMount(){
    api.getItems()
    .then(entries=>{
        this.setState({entries})
    })
    .catch(e=>alert(e))
  }


  submitForm = (e) => {
    e.preventDefault();
    // aqui subo al backend
    console.log(e.target.author.value)
    console.log(e.target.title.value)
    console.log(e.target.body.value)
    const newCochinada = {
      title: e.target.title.value,
      author: e.target.author.value,
      body: e.target.body.value,
      cover:e.target.cover.files[0]
      };
    api.addItem(newCochinada)
    .then(cochinada=>{
      const {entries} = this.state;
      entries.push(cochinada);
      this.setState({entries});
    })
    .catch(e=>alert(e))
  }

  render(){
    const {entries} = this.state;
    return(
      <div>
        <h2>Home Page</h2>
        {entries.map(e=>{
        return (
        <Link to={"/" + e._id}>
          <div key={e._id}>
        
          <h3>Title: {e.title} </h3>
          <h5>Author: {e.author}</h5>
          <hr/>
         
         </div>
         </Link>
         )
        })}

        <form onSubmit={this.submitForm}>
          <input  name="author" type="text" placeholder="Author"/>
          <input  name="title" type="text" placeholder="Title"/>
          <textarea name="body" placeholder="Body"></textarea>
          <input type="file" name="cover"/>
          <input type="submit"/>
        </form>


      </div>
    );
  }
}
export default HomePage;