import React from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';
import {addItem, toggleIsAdding} from 'action';
=======
>>>>>>> parent of 6a546f9... xong 15

class NoteForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {isAdding: false}
  }
  handleSubmit(e){
    e.preventDefault();
<<<<<<< HEAD
    var {dispatch} = this.props;
    dispatch(addItem(this.refs.txt.value));
    dispatch(toggleIsAdding());
=======
    this.props.handleAdd(this.refs.txt.value);
    this.refs.txt.value = '';
    this.toggle();
>>>>>>> parent of 6a546f9... xong 15
  }
  
  toggle(){
    this.state.isAdding = !this.state.isAdding;
    this.setState(this.state);
  }

  render(){
    if(this.state.isAdding) return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter your text" ref="txt"/>
        <br/><br/>
        <button>Add</button>
      </form>
    )
    return <button onClick={this.toggle.bind(this)}>+</button>
  }
}

module.exports = NoteForm;
