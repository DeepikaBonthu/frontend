/*import React,{ useState,useEffect } from 'react'

const App = () => {
  
  //const [name,setName]=useState("Deepika");
  const [count,setCount]=useState(0);
  //const [color,setColor] =useState("white")
  useEffect(() =>console.log(count),[count])
  return (
    <div>
      <center>
        <h1>you clicked {count} times</h1>
        <button onClick={() => setCount(count + 1)}>Click Me</button>
      </center>
      
    </div>
  )
}

export default App
*/
import React,{useState} from 'react'

function App()  {
  const [data,setData] = useState({
    username: '',
    password:'',
  })
  const {username,password} = data;
  const handler = e => {
    setData({...data,[e.target.name]:[e.target.value]})
  }
  const submitHandler = e =>{
    e.preventDefault();
    console.log(data);
  }
  return (
    <div>
      <center>
        <form onSubmit={submitHandler}>
        <input type='text' placeholder='Username' value={username} name='username' onChange={handler}/><br/>
        <input type='password' placeholder='Password' value={password} name='password' onChange={handler}/><br/>
        <input type='submit' name='submit'/>
        </form>
        </center>
      
    </div>
  )
}

export default App


