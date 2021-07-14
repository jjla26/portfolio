import React, { useState } from 'react'
import { useForm } from '@formspree/react';

import './contact.css'

export default function Contact() {
  const [ formState, handleSubmit ] = useForm(process.env.REACT_APP_EMAIL_PORTFOLIO_ENDPOINT);
  const [ name, setName ] = useState('')
  const [ errorName, setErrorName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ errorEmail, setErrorEmail ] = useState('')
  const [ subject, setSubject ] = useState('')
  const [ errorSubject, setErrorSubject ] = useState('')
  const [ message, setMessage ] = useState('')
  const [ errorMessage, setErrorMessage ] = useState('')
  const [ feedback, setFeedback ] = useState('')
  const [ error, setError ] = useState('')

  const onSubmitForm = async (e) => {
    e.preventDefault()
    e.target.reset()
    if(validate()){
      try {
        await handleSubmit(e)  
        console.log("asdasdasdsadad enviado")
        resetForm()
        setFeedback('Your message was successfully sent !')
        setTimeout(() => setFeedback(''), 4000)
      } catch (error) {
        setError('The email was not send. Try again later')
        setTimeout(() => setError(''),4000)
      }
    }
  }

  const resetForm = () => {
    setName('')
    setEmail('')
    setSubject('')
    setMessage('')
  }

  const validate = () => {
    const isValidName = validateName(name)
    const isValidEmail = validateEmail(email)
    const isValidSubject = validateSubject(subject)
    const isValidMessage = validateMessage(message)
    return isValidName && isValidEmail && isValidSubject && isValidMessage
  }

  const validateName = (name) => {
    if(!name){
      setErrorName('Name is a required field')
      return false
    }
    if(name.length < 3){
      setErrorName('Min length 3')
      return false
    }
    setErrorName(null)
    return true  
  }

  const validateEmail = (email) => {
    if(!email){
      setErrorEmail('Email is a required field')
      return false
    }
    if(email.indexOf('@') === -1){
      setErrorEmail('You must enter a valid email')
      return false
    }
    setErrorEmail(null)
    return true
  }

  const validateSubject = (subject) => {
    if(!subject){
      setErrorSubject('Subject is a required field')
      return false
    }
    if(subject.length < 4){
      setErrorSubject('The Subject should be longer (min: 4 characters)')
      return false
    }
    setErrorSubject(null)
    return true
  }

  const validateMessage = (message) => {
    if(!message){
      setErrorMessage('Message is a required field')
      return false
    }
    if(message.length < 10){
      setErrorMessage('The Message should be longer (min: 10 characters)')
      return false
    }
    setErrorMessage(null)
    return true
  }

  return (
    <section id='contact' className='contact'>
      <h2 className='contact__title'>NEED TO REACH OUT? GET IN TOUCH</h2>
      <div className='contact__container'>
        <form className='contact__form' onSubmit={onSubmitForm} >
          <div className='contact__input-group'>
            <label htmlFor='name'>Name</label>
            <input id='name' name='name' value={name} type='text' placeholder='Ex: Julio' onChange={e => {
              setName(e.target.value)
              validateName(e.target.value)
            }} />
            {errorName && <span className="error__message">{errorName}</span>}
          </div>
          <div className='contact__input-group'>
            <label htmlFor='email'>Email</label>
            <input id='email' name='email' value={email} type='email' placeholder='Ex: julio@gmail.com' onChange={e => {
              setEmail(e.target.value)
              validateEmail(e.target.value)
            }} />
            {errorEmail && <span className="error__message">{errorEmail}</span>}
          </div>
          <div className='contact__input-group'>
            <label htmlFor='subject'>Subject</label>
            <input id='subject' name='subject' value={subject} type='text' placeholder='Ex: Job Offer' onChange={e => {
              setSubject(e.target.value)
              validateSubject(e.target.value)
            }} />
            {errorSubject && <span className="error__message">{errorSubject}</span>}
          </div>
          <div className='contact__input-group'>
            <label htmlFor='message'>Message</label>
            <textarea id='message' name='message' value={message} placeholder='You can type your message here' onChange={e => {
              setMessage(e.target.value)
              validateMessage(e.target.value)
            }} ></textarea>
            {errorMessage && <span className="error__message">{errorMessage}</span>}
          </div>
          <div className='contact__buttons'>
            {!formState.submitting && <button type='reset' onClick={resetForm}>reset</button>}
            {!formState.submitting && <button type='submit'>send</button>}
          </div>
          <div className='form-feedback'>
            {formState.submitting && <span className='loading'>Sending...</span>}
            {formState.succeeded && <span className='feedback__message'>{feedback}</span> }
            {formState.errors.length > 0 && <span className='error__message'>{error}</span> }
          </div>
        </form>
      </div>            
    </section>
  )
}
