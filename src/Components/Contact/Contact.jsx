import React from 'react'
import styles from './Contact.module.css';
import { Button, TextInput } from 'flowbite-react';


export default function Contact() {
  return (
    <div className={`mt-16 py-5 min-h-[90vh] text-[#2C3E50]  text-center  flex flex-col justify-center items-center`}>
      <h2 className='text-center uppercase'>conatct section</h2>
        <div className={`starLine ${styles.starLineContact} mb-4 flex justify-center items-center`}>
          <i className="fas fa-star flex justify-center items-center"></i>
        </div>

        <form className='w-1/2 flex flex-col pt-10' action="">
        <input type="text" className='customInput' placeholder='userName' />
          <input type="number"  placeholder='userAge' className='customInput' />
          <input type="email" placeholder='userEmail' className='customInput' />
          <input type="password" placeholder='userPassword' className='customInput' />

          <div className="flex justify-start"><Button color="green">Send message</Button></div>
          
        </form>
    </div>
  )
}