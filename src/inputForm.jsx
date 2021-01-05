import React from 'react';

class inputForm extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      value: '',
      selectValue: [
        'Denis',
        'Artur',
        'Roman',
        'Ilya'
      ],
      valueCheck: false
    }
  }
  handleEventBubbling(e){
    this.props.changeValue(e.target.value)
  }
  /* handleChange(e){
    this.setState({
      value: e.target.value
    })
  }
  handleChangeSelect(e){
    console.log(e.target.value)
  }
  handleChangeCheckBox(e){
    this.setState({
      [e.target.name]: e.target.checked
    })
  } */
  render(){
    return(
      <div>inputForm
        <input type="text" value={this.props.inputValue} onChange={(e) => this.handleEventBubbling(e)}/>
        {/* <input 
          type="checkbox" 
          name="valueCheck"
          checked={this.state.valueCheck} 
          onChange={(e) => this.handleChangeCheckBox(e)}
        />
        <textarea 
          value={this.state.value} 
          onChange={(e) => this.handleChange(e)}
        ></textarea>
        <select 
          onChange={(e) => this.handleChangeSelect(e)}
        >
          {this.state.selectValue.map((element, index)=>
            <option 
              key={index} 
              value={element}
            >{element}</option>
          )}
        </select> */}
      </div>
    )
  }
}
export default inputForm