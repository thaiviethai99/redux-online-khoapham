import React from 'react';
<<<<<<< HEAD
import {connect} from 'react-redux';
import {removeItem} from 'action';
class Note extends React.Component{
  removeNote(){
    var {index, dispatch} = this.props;
    dispatch(removeItem(index));
=======

class Note extends React.Component{
  removeNote(){
    var {index, handleRemove} = this.props;
    handleRemove(index);
>>>>>>> parent of 6a546f9... xong 15
  }
  render(){
    return (
      <div>
        <p>{this.props.children}</p>
        <button onClick={this.removeNote.bind(this)}>Delete</button>
      </div>
    )
  }
}

module.exports = Note;
