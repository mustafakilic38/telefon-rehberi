import {useState,useEffect} from 'react'
import "./styles.css";
import List from './List';
import Form from './Form';

function Contacts() {
  const [contacts,setContacts] = useState([
    {
      fullname : "Mustafa",
      phone_number : "123"
    },
    {
      fullname : "Kemal",
      phone_number : "458"
    },
    {
      fullname : "Kılıç",
      phone_number : "789"
    }

  ]);
  useEffect(()=>{
    console.log(contacts);
  },[contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts = {contacts}/>
      <Form addContact={setContacts} contacts = {contacts}/>
    </div>
  )
}

export default Contacts