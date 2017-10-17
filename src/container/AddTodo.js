import { connect } from 'react-redux';
import React from 'react';
let nextTodoId = 0;
let AddTodo = ({dispatch}) => (
    <div>
        <input ref={node => {
            this.input = node;
        }} />
        <button onClick={() => {
            dispatch({
                type: 'ADD_TODO',
                text: this.input.value,
                id: nextTodoId++
            });
            this.input.value = '';
            }}>
            Add AddTodo
        </button>
    </div>
);

AddTodo = connect()(AddTodo);
export default AddTodo;