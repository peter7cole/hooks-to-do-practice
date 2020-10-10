import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
//names here are generalized to make a reusable component
const List = ({ list, addListItem }) => {
	return (
		<div>
			<ul>
				{list.map((listItem, index) => (
					<ToDoItem
						key={listItem.id}
						todo={listItem}
						index={index}
						addTodo={addListItem}
					/>
				))}
			</ul>
		</div>
	);
};

export default List;
