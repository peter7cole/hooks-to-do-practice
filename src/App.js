import React, { useCallback, useState } from 'react';
import './App.css';

const App = () => {
	// useState returns an array that contains the value of the state item and a function that can manipulate that state
	// As done below, passing in and initial default value of 'Peter'
	const [newTodo, setNewTodo] = useState('');
	// useCallback creates a cached version of the function so it doesn't have to recreate any values on each render, no dependencies on external state
	const onNewTodoChange = useCallback(event => {
		console.log(event.target.value);
		setNewTodo(event.target.value);
	}, []);
	return (
		<div className="App">
			<h1>Hello! I am your To Do List</h1>
			<form>
				<label htmlFor="newTodo">New To Do Item</label>
				<input
					id="newTodo"
					name="newTodo"
					value={newTodo}
					placeholder="Name"
					onChange={onNewTodoChange}
				/>
			</form>
		</div>
	);
};

export default App;
