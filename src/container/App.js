import React, { Component } from 'react'; 
import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer'

class App extends Component {
  render() {
    return (
      <div >
        <AddTodo />
        <VisibleTodoList /> 
        <Footer/>
      </div>
    );
  }
}


export default App;
