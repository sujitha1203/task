import React from 'react';
import { useState } from 'react';
import { appendSpreadsheet } from '../helpers/connectToGSheet';

export const Form = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [subject, setsubject] = useState("")
    const [reason, setreason] = useState("")
    const [error, seterror] = useState("")


    const responseBody = { name: "", email: "", subject: "", reason: "", error: "" }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        if (name === "" || email === "" || subject === "" || reason === "") {
            seterror("Please enter all fields")
            return
        }
        responseBody.name = name
        responseBody.email = email
        responseBody.subject = subject
        responseBody.reason = reason


        console.log(JSON.stringify(responseBody))
        appendSpreadsheet({ Name: name, Email: email, Subject: subject, Reason: reason })
    }
    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value)
    }

    return (
        <div class="flex justify-center w-full " style={{ background: "url('/wr.jpg')" }}>

            <div className=' pt-6' >
                <div className='' >
                    <form onSubmit={onSubmitHandler} >
                        <div  >
                            <div className='flex justify-center text-3xl m-50  '>WELCOME TO OUR SITE</div>

                            <div className="border-2 m-1 border-black rounded-lg  h-full">
                                <div className='flex justify-center font-style:bold p-3 '>FILL THIS FORM </div>

                                <center> <span>{error}</span></center>

                                <div className="space-y-5 pt-5"><label > Name</label></div>
                                <div><input className="bg-gray-50 border p-2.5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => inputChangeHandler(setname, e)} type="text" /></div>

                                <div className="space-y-5 pt-5"><label >Email</label></div>
                                <div><input className="bg-gray-50 border p-2.5 w-3/4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => inputChangeHandler(setemail, e)} type="email" /></div>

                                <div className="space-y-5 pt-5"><label >subject</label></div>
                                <div><input className="bg-gray-50 border p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => inputChangeHandler(setsubject, e)} type="text" /></div>

                                <div className="space-y-5 pt-5"><label >Reason</label></div>
                                <div><input className="bg-gray-50 border p-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    onChange={(e) => inputChangeHandler(setreason, e)} type="text" /></div>

                                <div className='space-y-5 pt-5 flex justify-center'>
                                    <input className="  text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 " type="submit" value="Submit" />
                                </div>
                                <div className='flex justify-center'>
                                    <a className='  text-red-700  border-bottom pt-3 flex justify-center' href="http://localhost:3000/thank" >
                                        Click here after submitting form !!
                                    </a>
                                </div>

                                <center><span>{name}<br />{email}<br />
                                    {subject}<br />{reason}</span>
                                </center>

                            </div>
                        </div>

                    </form>
                </div>
            </div>
        </div>




    )
}


export default Form