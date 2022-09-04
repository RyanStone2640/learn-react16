import React, { Component, Fragment, useState } from 'react';
import './todoList.css';
import TodoItem from './TodoItem';

// class TodoList extends Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			inputValue: '',
// 			list: []
// 		}
// 	};
// 
// 	handlerInputChange = (e)=>{
// 		// console.log(this)
// 		this.setState({
// 			inputValue: e.target.value
// 		})
// 	}
// 
// 	render() {
// 	  return (
// 	  	<Fragment>
// 	    	<input 
// 	    		value= {this.state.inputValue}
// 	    		onChange= {this.handlerInputChange}
// 	    	/>
// 	    	<button>提交</button>	
// 	    	 {this.state.inputValue}
// 	    	<ul>
// 	    		<li>
// 	    			learn react
// 	    		</li>
// 	    	</ul>
// 	  	</Fragment>	
// 	  );
// 	}
// }

function TodoList(props) {
	const [inputValue, setInputValue] = useState('')
	const [list, setList] = useState([])
	const mapArr = list.map((item, index)=>{
		return (
			<Fragment>
			<TodoItem content={item}></TodoItem>
			{/* // <li  */}
			{/* // 	key={index}  */}
			{/* // 	onClick={()=>{handlerDelte(index)}} */}
			{/* // >{item}</li>				 */}
			</Fragment>
		)
	})
	
	const handlerInputChange = (e)=>{
			setInputValue(e.target.value)
	}	
	const handlerAddList = (e)=>{
		setList([...list, inputValue])
		setInputValue('')
	}

	const handlerDelte = (index)=>{
		const newlist = [...list];
		newlist.splice(index, 1);
		setList(newlist)
	}

  return (
  	<Fragment>
  	<label htmlFor="insertArea">
  		輸入代辦清單
  	</label>
    	<input
    		id="insertArea" 
    		className='input'
    		value= {inputValue}
    		onChange= {handlerInputChange}
    	/>
    	<button onClick= {handlerAddList}>提交</button>	
    	<ul>
    		{mapArr} 
    	</ul>
  	</Fragment>	
  );
}


export default TodoList;
