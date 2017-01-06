import React from 'react';
import Note from './Note.js';
import NoteForm from './NoteForm.js';
import {connect} from 'react-redux';

class List extends React.Component{
  remove(index){
    this.state.mang.splice(index, 1);
    this.setState(this.state);
  }

  addNote(note){
    this.state.mang.push(note);
    this.setState(this.state);
  }

  render(){
    return (
      <div>
        <NoteForm handleAdd={this.addNote.bind(this)}/>
        {this.props.mang.map((e, i) => <Note index={i}
          handleRemove={this.remove.bind(this)}
          key={i}>{e}</Note>)}
      </div>
    )
  }
}

module.exports = connect(function(state){
  return {mang: state.mang}
})(List);
