import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import Message from './message.jsx'
import InputForm from './inputForm.jsx'

class App extends React.Component {
  constructor(props){
    /* обьявление входных параметров */
    super(props);
    /* data */
    this.state = {
      messages: [
        'купить хлеб',
        'купить молоко'
      ],
      valueFromInput: 0
    }
  }
  /* методы */
  showIndexElement(index){
    console.log(index)
  }
  /* обработчик поднятого состояния */
  setChange(value){
    this.setState({
      valueFromInput: value
    })
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
        {/* передаю проп, и ловлю подъем состояния */}
        <InputForm 
          inputValue={this.state.valueFromInput}
          changeValue={(value)=>this.setChange(value)}
        />
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)