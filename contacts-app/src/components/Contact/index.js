import React, { useEffect } from 'react'
import List from './List'
import Form from './Form'
import {useState} from "react";

function Contact() {
    const [contact,setContact]=useState([]); 
    useEffect(()=>{
        console.log(contact)
    },[contact]);
  return (
    <div>
        <List></List>
        <Form addContact={setContact} contact={contact}></Form>
    </div>
  )
}

export default Contact