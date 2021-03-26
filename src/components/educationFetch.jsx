import React from 'react'

class EducationFetch extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  
  increment(){
    this.setState(state => ({
      counter: state.counter + 1
    }))
  }

  componentDidMount(){
    console.log('is mounted')
  }

  componentDidUpdate(){
    console.log('update state')
  }

  componentWillUnmount(){
    console.log('is unmounted')
  }

  render(){
    return(
      <>
        <h1>asdasd {this.state.counter}</h1>
        <button className="btn btn-dark" onClick={() => this.increment()}>click</button>
      </>
    )
  }
}

export default EducationFetch;