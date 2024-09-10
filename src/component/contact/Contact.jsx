import React from 'react'
import './contact.css'
const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ec5b025e-4b0d-4515-8655-b1b0b00a1f94");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (<>
        <div className='container contact'>
            <div className='contact_col'>
                <h3>send us message <img src='./assets/msg-icon.png' /></h3>
                <p>Feel free to reach out through contact form or to find
                    our contact information below</p>
                <ul>
                    <li><img src='./assets/mail-icon.png' />university@gamil.com </li>
                    <li><img src='./assets/phone-icon.png' />+91-8181881395</li>
                    <li><img src='./assets/location-icon.png' />Maharaja Agrasen Himalayan Garhwal University
                        Dhaid Gaon, Block pokhra,
                        District Pauri Garhwal,
                        Uttarakhand</li>
                </ul>
            </div>
            <div className='contact_col'>
              
              <form onSubmit={onSubmit}>
                <label>your name</label>
                <input type='text' name='name'placeholder='enter your name' required/>

                <label>phone number</label>
                <input type='tel' name='phone' placeholder='enter your mobile number' required/>

                <label>write your message</label>
                <textarea name='message' rows={4} placeholder='enter your message' required/>
                <button type='submit' className='btn dark_btn'>submit now</button>
              </form>
              <span>{result}</span>
            </div>
        </div>
    </>
    )
}

export default Contact