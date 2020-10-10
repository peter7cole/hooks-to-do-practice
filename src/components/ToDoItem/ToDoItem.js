import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ todo, index, addTodo }) => {
	return (
		<div>
			<li>
				<input
					checked={todo.done}
					type="checkbox"
					onChange={addTodo(todo, index)}
				/>
				<span className={todo.done ? 'done' : ''}>{todo.content}</span>
			</li>
		</div>
	);
};

export default ToDoItem;
