import React, { useState } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

const Contact = () => {

    const [userInput, setUserInput] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleInputChange = (e) => {

        const { name, value } = e.target;
        // console.log(name, value);
        setUserInput({
            ...userInput,
            [name]: value
        });

        //setUserInput({...userInput, [e.target.name]: e.target.value })
    }

    async function onSubmit1(event) {

        event.preventDefault();
        if (!userInput.name || !userInput.email || !userInput.message) {
            toast.error("Please enter all required fields")
            return
        }
        //form validation and submit data logic for backend
        setUserInput({
            name: '',
            email: '',
            message: ''
        })
        toast.success("Form submitted successfully")

    }

    return (
        <div className='flex justify-center items-center h-[100vh] w-[100%]'>
            <form
                onSubmit={onSubmit1}
                // noValidate
                className='bg-white flex flex-col items-center justify-center gap-2 p-5 rounded-md text-zinc-700 shadow-lg shadow-zinc-500 w-[22rem]'>
                <h1 className='text-3xl font-semibold'> Contact Form</h1>
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor='name' className='text-xl font-semibold'>Name
                    </label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={handleInputChange}
                        value={userInput.name}
                        className='bg-transparent border border-zinc-600 px-2 py-1 rounded-md w-full'
                        placeholder='Enter your name' />
                </div>
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor='email' className='text-xl font-semibold'>Email
                    </label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        value={userInput.email}
                        onChange={handleInputChange}
                        className='bg-transparent border border-zinc-600 px-2 py-1 rounded-md w-full'
                        placeholder='Enter your email' />
                </div>
                <div className='flex flex-col w-full gap-1'>
                    <label htmlFor='message' className='text-xl font-semibold'>Message
                    </label>
                    <textarea
                        id='message'
                        name='message'
                        value={userInput.message}
                        onChange={handleInputChange}
                        className='bg-transparent border border-zinc-600 px-2 py-1 rounded-md w-full resize-none h-40'
                        placeholder='Enter your message' />
                </div>

                <button
                    type='submit'
                    className='w-full py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-600 transition-all duration-300 ease-in-out'>
                    Submit
                </button>
                <ToastContainer />
            </form>
        </div>
    )
}

export default Contact