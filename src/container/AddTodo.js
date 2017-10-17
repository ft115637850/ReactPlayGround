import { connect } from 'react-redux';
import React from 'react';
import {v4} from 'node-uuid';

console.log(v4);
let AddTodo = ({dispatch}) => (
    <div>
        <input ref={node => {
            this.input = node;
        }} />
        <button onClick={() => {
            dispatch({
                type: 'ADD_TODO',
                text: this.input.value,
                id: v4()
            });
            this.input.value = '';
            }}>
            Add AddTodo
        </button>
    </div>
);

AddTodo = connect()(AddTodo);
export default AddTodo;