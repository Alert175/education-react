import {useState, useEffect} from 'react'

const Effect = () => {

  const [header, setHeader] = useState('')

  useEffect(() => {
    console.log(header)
    return () => {
      console.log('unmount')
    }
  }, [header])

  return(
    <>
      <h1>selected: {header}</h1>
      <button className="btn btn-dark" onClick={() => setHeader('Users')}>users</button>
      <button className="btn btn-primary" onClick={() => setHeader('Posts')}>posts</button>
      <button className="btn btn-danger" onClick={() => setHeader('Tabs')}>tabs</button>
    </>
  )
}

export default Effect;