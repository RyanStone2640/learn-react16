import React, {Fragment, useState } from 'react';

function TodoItem(props) {
	const [Value, setValue] = useState('')

	const handlerClick = ()=>{
		props.handlerDelte(props.index)
		// console.log(props.index)
	}
	
  return (
  	<Fragment>
  	<li onClick={handlerClick}>
  		{props.content}
  	</li>
  	</Fragment>	
  );
}

export default TodoItem;
 