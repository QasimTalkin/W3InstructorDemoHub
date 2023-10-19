import { useState, useEffect} from 'react';
import axios from 'axios';


export default function SignUp(){
  function handleSubmit(e) {
    e.preventDefault();
   let new_user  = {
    email,
    password,
    user_name
    }

    axios.post('http://localhost:1010/users/', new_user).then(res=>{
      res.data.token ? localStorage.setItem('token', res.data.token) : console.log(res);
    })
    }

let [user_name, setUserName] = useState('');
let [password, setPassword] = useState('');
let [email, setEmail] = useState('');



  return(
<>
  <section className="bg-gray-50 dark:bg-gray-900">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
            <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo"/>
            Mini Reddit
        </a>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create and account
                </h1>
                <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                    <div>
                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input onChange={(e)=>setEmail(e.target.value)} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required=""/>
                    </div>
                    <div>
                        <label for="user_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">User Name</label>
                        <input  onChange={(e)=>setUserName(e.target.value)} type="text" name="user_name" id="user_name" placeholder="user name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <div>
                        <label  for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"> password</label>
                        <input onChange={(e)=>setPassword(e.target.value)} type="password" name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                    </div>
                    <button type="submit" className="w-full text-black bg-indigo-100 hover:bg-indigo-700 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center hover:text-white dark:bg-indigo-100 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"u>Create an account</button>
                </form>
            </div>
        </div>
    </div>
  </section>
</>
  )
}
