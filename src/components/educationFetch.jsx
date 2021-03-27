import { useState, useEffect } from 'react';
import axios from 'axios';

const EducationFetch = () => {
  const [counter, setCounter] = useState(0);
  const [fetchData, setFetchData] = useState([]);

  useEffect(async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    setFetchData(...fetchData, response.data);
  }, []);

  return (
    <>
      {fetchData.map((element) => (
        <div key={`key-${element.title}`}>{element.title}</div>
      ))}
    </>
  );
};

export default EducationFetch;
