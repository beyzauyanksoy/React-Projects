import React from 'react'
import {useEffect,useState} from 'react';
import {useParams} from 'react-router-dom'


function UsersDetails() {
    const {id} =useParams();
   const [user,setUser]=useState(null);

   useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/users/${id}` )
    .then((res)=>res.json())
    .then((data)=>setUser(data))
   },[])



  return (
    <div>
        <h2>
        Kullanıcı Detayları
        </h2>
        {
            user && <pre>
            {JSON.stringify(user,null,2)}
        </pre>
        }
    
    </div>
  )
}

export default UsersDetails