import React, { useCallback, useState } from 'react';
import './App.css';

const App = () => {
	// useState returns an array that contains the value of the state item and a function that can manipulate that state
	// As done below, passing in and initial default value of 'Peter'
	const [name, setName] = useState('Peter');
	// useCallback creates a cached version of the function so it doesn't have to recreate any values on each render, no dependencies on external state
	const onNameChange = useCallback(event => {
		console.log(event.target.value);
		setName(event.target.value);
	}, []);
	return (
		<div className="App">
			<h1>Hello, {name}!</h1>
			<form>
				<label>Enter your name</label>
				<input placeholder="Name" onChange={onNameChange} />
			</form>
		</div>
	);
};

export default App;
