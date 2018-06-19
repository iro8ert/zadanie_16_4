import React from 'React';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: []
		};
	}
	addTodo(val){
		const todo = {
			text: val,
			id: uuid.v4(),
		};
		const data = [...this.state.data, todo];
		this.setState({data});
	}
};

exports default App;