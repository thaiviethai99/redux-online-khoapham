import React from 'react';
import {connect} from 'react-redux';
import {addItem, toggleIsAdding} from 'action';

class NoteForm extends React.Component{
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(addItem(this.refs.txt.value));
    dispatch(toggleIsAdding());
  }

  toggle(){
    var {dispatch} = this.props;
    dispatch({type: 'TOGGLE_IS_ADDING'});
  }

  render(){
    if(this.props.isAdding) return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input type="text" placeholder="Enter your text" ref="txt"/>
        <br/><br/>
        <button>Add</button>
      </form>
    )
    return <button onClick={this.toggle.bind(this)}>+</button>
  }
}

module.exports = connect(function(state){
  return {isAdding: state.isAdding}
})(NoteForm);
