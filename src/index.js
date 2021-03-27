import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import EducationState from 'components/educationState';
import Effect from 'components/educationEffect';
import EducationFetch from 'components/educationFetch';

const App = () => {
  const [show, setshow] = useState(true);

  return (
    <>
      {/* <EducationState /> */}
      {/* <Effect/> */}
      <button className="btn btn-danger" onClick={() => setshow(false)}>
        hide
      </button>
      {show ? <EducationFetch info={'hello world'} /> : null}
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
