import { React, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Contact = () => {

  const navigate = useNavigate();

  const [msg, setMsg] = useState({
    name: "",
    email: "",
    message: ""
  });

  // Handle Inputs
  const handleChange = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    setMsg({ ...msg, [name]: value });
  }

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // Object DeStructuring
    // Store Object Data into Variables
    const { name, email, message } = msg;
    try {
      //It is Submitted on port 3000 by default
      const res = await fetch('/message', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name, email, message
        })
      })
      console.log(res.status)
      if (res.status === 400 || !res) {
        window.alert("Message Not Sent. Try Again Later")
      } else {
        // You need to Restart the Server for Proxy Works
        window.alert("Message Sent");
        setMsg({
          name: "",
          email: "",
          message: ""
        })

      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div>
      <div className="back_image">
        <h1 className="">Contact Us</h1>
      </div>
      <div className="contact_outer">
        <div className="contact_inner">

          <form onSubmit={handleSubmit} >

            <div className="contact_name">
              <label for="exampleInputEmail1" class="">Name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                name="name"
                value={msg.name}
                onChange={handleChange}
                placeholder="Name"
              />
            </div>

            <div className="contact_email">
              <label for="exampleInputEmail1" class="">Email address</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                name="email"
                value={msg.email}
                onChange={handleChange}
                placeholder="example@gmail.com"
              />
            </div>

            <div className="contact_message">
              <label for="exampleFormControlTextarea1">Message</label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="message"
                value={msg.message}
                onChange={handleChange}
                placeholder="Message"
              >

              </textarea>
            </div>

            <div className="submitDiv">
              <button type="submit" className="contact_submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;