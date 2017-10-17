import { connect } from 'react-redux';
import TodoList from '../presentation/TodoList'

const getVisibleTodos = (
    todos,
    visibilityFilter
) => {
    switch (visibilityFilter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(
                t => !t.completed
            );
        case 'SHOW_COMPLETED':
            return todos.filter(
                t => t.completed
            );
        default:
            return todos;
    }
    
};

const mapStateToProps = state => {
	return {
		todos: getVisibleTodos(state.todos, state.visibilityFilter)
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onTodoClick: (id) => dispatch({id, type:'TOGGLE_TODO'})
	};
};

let VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList);

export default VisibleTodoList;