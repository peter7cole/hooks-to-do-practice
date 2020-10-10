import React from 'react';
import './ToDoItem.css';

const ToDoItem = ({ todo, index, addTodo }) => {
	const delClass = () => {
		return todo.done ? 'done' : '';
	};
	return (
		<div>
			<li>
				<input
					checked={todo.done}
					type="checkbox"
					onChange={addTodo(todo, index)}
				/>
				<span className={delClass()}>{todo.content}</span>
			</li>
		</div>
	);
};

export default ToDoItem;
