import React from 'react'

const Form = () => {
    const onSubmitHandler = () => {
        
    }
    return (
       <div>
       <div className="flex justify-center border-black" > 
            <form onSubmit={onSubmitHandler} method="post">
           
            <div className='justify-center ' >
                <div className='flex justify-center text-3xl m-50  '>WELCOME TO OUR SITE</div>
            
                <div className="border-2 m-1 border-black   h-full">
                    <div className='flex justify-center font-style:bold p-3 '>FILL THIS FORM </div>
                    <label for="name">Name: </label>                  
                    <input className="bg-gray-50 border p-2.5  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" id="name" name="name"  required />
                    <br />
                    <br />
                    <label for="email">Email:  </label>
                    <input className="bg-gray-50 border p-2.5 w-3/4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" type="email" id="email" name="email" required />
                    <br />
                    <br />
                    <label for="subject">Subject:</label>
                    <input className="bg-gray-50 border p-2.5 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" type="text" id="subject" name="subject" required />
                    <br />
                    <br />
                    <label for="reason">Reason:</label>
                    <textarea input className="bg-gray-50 border p-10 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" type="text" id="reason" name="reason"  required />
                    < br />
            
                    <div className='flex justify-center'> <a href="http://localhost:3000/thank" className="text-white bg-blue-700  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit">Submit</a></div>
                  
                </div></div>

          
           
        </form></div>
        </div>
    )
}

export default Form