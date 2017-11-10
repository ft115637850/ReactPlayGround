import React, { Component } from 'react'; 
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';
import JsonP from './JsonP';

class App extends Component {
  render() {
    return (
      <div >
        <AddTodo />
        <VisibleTodoList /> 
        <Footer/>
        <JsonP/>
      </div>
    );
  }
}


export default App;
