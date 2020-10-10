import React from 'react';

const ToDoItem = ({ todo, index, addTodo }) => {
	return (
		<div>
			<li>
				<input
					checked={todo.done}
					type="checkbox"
					onChange={addTodo(todo, index)}
				/>
				{todo.content}
			</li>
		</div>
	);
};

export default ToDoItem;

// event => {
//   const newTodos = [...todos];
//   newTodos.splice(index, 1, {
//     ...todo,
//     done: !todo.done,
//   });
//   setTodos(newTodos);
// }
