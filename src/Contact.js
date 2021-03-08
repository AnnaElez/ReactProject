import React, { useState } from 'react';


const defaultValues= {
  name: '',
  email: '',
  phone: '',
  message: '',
}

export default function Contact() {

  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = ({ target: { name, value } }) => {

    setValues({
      ...values,
      [name]: value
    })
  }

  const send = () => {
    console.log('setvalues')
    setValues(defaultValues)
  }


  return (
    <>
      <div> Contact</div>

      <input
       onChange={handleChange}
        type='text'
        name='name'
        placeholder='Your Name'
        value={values.name} />

      <input
        onChange={handleChange}
        type='email'
        name='email'
        placeholder='Your Email'
        value={values.email} />

      <input
       onChange={handleChange}
        type='phone'
        name='phone'
        placeholder='Your Phone'
        value={values.phone} />

      <textarea
        name='message'
        onChange={handleChange}
        placehlder='Your Message'
        value={values.message}>
      </textarea>

      <button
      onClick = {send}>  Send</button>
    </>
  );
}
