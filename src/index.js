import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Message from './message.js'

class App extends React.Component {
  constructor(props){
    /* обьявление входных параметров */
    super(props);
    /* data */
    this.state = {
      messages: [
        'купить хлеб',
        'купить молоко'
      ]
    }
  }
  /* методы */
  showIndexElement(index){
    console.log(index)
  }
  /* рендерит темплейт */
  render(){
    return(
      <div className="wrapper">
        {this.state.messages.map((element, index)=>
          <Message 
            key={index} 
            message={element}
            onClick={(index)=>this.showIndexElement(index)}
          />
        )}
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)