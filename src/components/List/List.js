import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
//names here are generalized to make a reusable component
const List = ({ list, setTodos }) => {
	return (
		<div>
			<ul>
				{list.map((listItem, index) => (
					<ToDoItem
						key={listItem.id}
						todo={listItem}
						todos={list}
						setTodos={setTodos}
						index={index}
					/>
				))}
			</ul>
		</div>
	);
};

export default List;
