import { useState } from 'react';
import { connect } from 'react-redux';

const Home = ({ stateCounter }) => {
  const [counter, setcounter] = useState(0);

  const increment = () => {
    setcounter((prevCounter) => prevCounter + 1);
  };

  const decrement = () => {
    setcounter((prevCounter) => prevCounter - 1);
  };

  return (
    <div className="container">
      <h1>Counter clicked = {stateCounter}</h1>
      <button className="btn btn-primary" onClick={increment}>
        increment
      </button>
      <button className="btn btn-danger" onClick={decrement}>
        decrement
      </button>
    </div>
  );
};

const mapStateToPosts = (state) => {
  return {
    stateCounter: state.counter,
  };
};

export default connect(mapStateToPosts, null)(Home);
