import React, { useCallback, useState, useEffect } from 'react';
import './App.css';
import List from './components/List/List';
import { nanoid } from 'nanoid';

const App = () => {
	// useState returns an array that contains the value of the state item and a function that can manipulate that state
	// As done below, passing in and initial default value of 'Peter'
	const [newTodo, setNewTodo] = useState('');
	const [todos, setTodos] = useState([]);
	// useCallback creates a cached version of the function so it doesn't have to recreate any values on each render, no dependencies on external state
	const onNewTodoChange = useCallback(event => {
		setNewTodo(event.target.value);
	}, []);
	// prevent default so it doesn't run until entered
	const formSubmitted = useCallback(
		event => {
			event.preventDefault();
			// if you try next to push straight into todo's, React won't know that the array has changed and state is immutable anyway, therefore setTodos() must be called
			if (!newTodo.trim()) return;
			setTodos([
				...todos,
				{
					id: nanoid(),
					content: newTodo,
					done: false,
				},
			]);
			setNewTodo('');
		},
		[newTodo, todos]
	);

	// useEffect, insead of running on each render, only runs if a mutation in the dependency is detected, can do cleanup here such as removing event listeners
	useEffect(() => {
		console.log('todos', todos);
	}, [todos]);

	const addTodo = useCallback(
		(todo, index) => event => {
			const newTodos = [...todos];
			newTodos.splice(index, 1, {
				...todo,
				done: !todo.done,
			});
			setTodos(newTodos);
		},
		[todos]
	);

	return (
		<div className="App">
			<form onSubmit={formSubmitted}>
				<label htmlFor="newTodo">Enter a New To Do Item</label>
				<input
					id="newTodo"
					name="newTodo"
					value={newTodo}
					placeholder="Entry"
					onChange={onNewTodoChange}
				/>
				<button>Add Todo</button>
			</form>
			<List list={todos} addListItem={addTodo} />
		</div>
	);
};

export default App;
