import React, {Component} from 'react';
import './TodoItem.css'
class TodoItem extends Component{
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
        let className ='TodoItem'
        const {item} =this.props;
        
        
        if(item.isComplete){
            className += '-complete'
        }
        return(
            <div className ={className}>
                <p>{this.props.item.title}</p>
            </div>
        );
     
        
    }
}

export default TodoItem;