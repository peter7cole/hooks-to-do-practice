import React from 'react';

const ToDoItem = ({ todo, todos, index, setTodos }) => {
	return (
		<div>
			<li>
				<input
					checked={todo.done}
					type="checkbox"
					onChange={event => {
						const newTodos = [...todos];
						newTodos.splice(index, 1, {
							...todo,
							done: !todo.done,
						});
						setTodos(newTodos);
					}}
				/>
				{todo.content}
			</li>
		</div>
	);
};

export default ToDoItem;
