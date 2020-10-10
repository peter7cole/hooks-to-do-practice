import React from 'react';

//names here are generalized to make a reusable component
const List = ({ list }) => {
	return (
		<div>
			<ul>
				{list.map((listItem, index) => (
					<li key={index}>{listItem.content}</li>
				))}
			</ul>
		</div>
	);
};

export default List;
