import React, {Component} from 'react';
import './App.css';
import TodoItem from './components/TodoItem'

class App extends Component{
  constructor(props){
    super(props);
    this.TodoItems=[
      {title:"asd",isComplete:true},
      {title:"asdadasd"},
      {title:"asdasdasdasd"}
    ];
    this.state = {date: new Date()};
  }
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({
      date: new Date()
    });
  }
  render(){
    
    return (
      <div className="App">
        <h1>
        {
        this.TodoItems.map((item,index)=>
        <TodoItem key={index} item={item}/>)
      }
        </h1>
        <h2>{this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
    dsalfhasdlkfhaklsdfhladhfl
    


  }
  }
  

export default App;
