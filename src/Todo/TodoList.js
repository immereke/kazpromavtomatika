import React from "react";
import PropTypes from 'prop-types'
import TodoItem from "./TodoItem";
import './Todo.css'

function TodoList(props) {

    return(
        <ul className="TodoList-ul">
            { props.todos.map((todo,index)=> {
                return (
                    <TodoItem
                        todo={todo}
                        key={todo.id}
                        index={index}
                        onChange={props.onToggle}
                    />)
            }) }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    onToggle: PropTypes.func.isRequired
};

export default TodoList