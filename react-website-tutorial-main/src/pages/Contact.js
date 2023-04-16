import React, { useState } from "react";
import PizzaLeft from "../assets/image2.jpg";
import "../styles/Contact.css";

function Contact() {

  const[state,setState] = useState({
    Fullname : '',
    Email : '',
    Message : ''
  })

  const fullname = (e) => {
    setState((previoustate) =>({
      ...previoustate ,
      Fullname : e.target.value
    }))
  }
  const email = (e) => {
    setState((previoustate) =>({
      ...previoustate ,
      Email : e.target.value
    }))
  }
  const message = (e) => {
    setState((previoustate) =>({
      ...previoustate ,
      Message : e.target.value
    }))
  }

  const handleSubmit = (e) => {
    alert("Data Consoled")
    console.log(state)
    e.preventDefault()
  }
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form onSubmit={handleSubmit} id="contact-form">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={state.Fullname} onChange={fullname} />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={state.Email} onChange={email}/>
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
            value={state.Message}
            onChange={message}
          ></textarea>
          <button type="submit"> Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
