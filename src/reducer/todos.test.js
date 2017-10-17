import todos from './todos'
import deepFreeze from 'deep-freeze'
it('Todo should be able to added into todo list', () => {
    const stateBefore = [];
    const action = {
        type: 'ADD_TODO',
        id: 0,
        text: 'todos Unit test'
    };
    const stateAfter = [{
        id: 0,
        text: 'todos Unit test',
        completed: false
    }];

    deepFreeze(stateBefore);
    expect(todos(stateBefore, action)).toEqual(stateAfter);
});

it('Todo should be able to toggle', () => {
    const todoBefore = [{
        id: 0,
        text: 'Learn Redux',
        completed: false
    }];

    const todoAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: true
    }];

    deepFreeze(todoBefore);
    expect(todos(todoBefore, {id:0, type:'TOGGLE_TODO'})).toEqual(todoAfter);
});

it('Todo should be able to untoggle', () => {
    const todoBefore = [{
        id: 0,
        text: 'Learn Redux',
        completed: true
    }];

    const todoAfter = [{
        id: 0,
        text: 'Learn Redux',
        completed: false
    }];

    deepFreeze(todoBefore);
    expect(todos(todoBefore, {id:0, type:'TOGGLE_TODO'})).toEqual(todoAfter);
});