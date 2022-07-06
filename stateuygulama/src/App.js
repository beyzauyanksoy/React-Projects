import {useState}from 'react'

function App() {

  const [name,setName]=useState('beyza');
  const [age,setAge]=useState(24);
  const [friends,setFriends]=useState(["beyza","ayşegül"]);
  const [address, setAddress]=useState({title:'istanbul', zip:3434})

  return (

    <div className="App">
      <h1>merhaba {name} ! </h1>
      <button onClick={()=>{setName('hatice')}}>isim degiştir</button>
      <h2>yaş: {age}</h2>
      <button onClick={()=>{setAge(65)}}>Yaş degiştir</button>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>
      <h2>Friends</h2>
      {
        friends.map((friend,index)=>
          (<div key={index}>{friend }</div>))
          }
        
          
      <button onClick={()=>{setFriends([...friends,"hatice"])}}>add friend</button>
      <br></br>
      <br></br>
      <hr></hr>
      <br></br>

      <h1>Address</h1>
   <div>
    {address.title} {address.zip}
   </div>
      {
        <button onClick={()=>{setAddress({...address,title:'ankara', zip:1221})}}>change address</button>
      }


    </div>
  );
}

export default App;
