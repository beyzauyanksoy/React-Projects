import React, { useState } from 'react'

function Form({addContact,contact}) {
    
    const [form, setForm]=useState({fullname:"", phone_number: ""});
    const onChangeInput=(e)=>{
        setForm({...form, [e.target.name]: e.target.value});
    };
    const onSubmit=(event)=>{
        event.preventDefault();
        if(form.fullname==='' || form.phone_number=== ''){
            return false;
        }
        addContact( [...contact,form]);

        console.log(form);
        setForm({fullname: ' ' , phone_number: ' '});

        console.log(form);
       
    }
  return (
    <form onSubmit={onSubmit}>
        <div>
        <div>
            <input name='fullname' placeholder='Full Name' onChange={onChangeInput} value={form.fullname}></input>
        </div>
        <div>
            <input name='phone_number' placeholder='phone Number' onChange={onChangeInput} value={form.phone_number}></input>
        </div>
        <div>
            <button onClick={onSubmit}>Add</button>
        </div>
        </div>
    </form>
  )
}

export default Form