import React, { Component, Fragment, useState } from 'react';
import TodoItem from './TodoItem';
import './todoList.css';

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
//		const value = e.target.value
// 		this.setState(()=>{
// 			return {
// 				inputValue: value
// 			}
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
	// data
	const [inputValue, setInputValue] = useState('')
	const [list, setList] = useState([])

	// jsx 
	const mapArr = list.map((item, index)=>{
		return (
			<TodoItem  
				key={index}
				content={item} 
				index={index} 
				handlerDelte={handlerDelte}
			>
			</TodoItem>
		)
	})
	
	// function
	const handlerInputChange = (e)=>{
			setInputValue(e.target.value)
	}	
	const handlerAddList = (e)=>{
		setList([...list, inputValue])
		setInputValue('')
	}

	function handlerDelte(index) {
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
