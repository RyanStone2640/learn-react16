import React, {Fragment, useState } from 'react';

function TodoItem(props) {
	const [Value, setValue] = useState('')

  return (
  	<Fragment>
  	<div>{props.content}</div>
  	</Fragment>	
  );
}

export default TodoItem;
 