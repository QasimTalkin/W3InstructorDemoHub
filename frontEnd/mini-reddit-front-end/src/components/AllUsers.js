
import { useState, useEffect} from 'react';
import axios from 'axios';

function AllUsers() {
  let [users, setUsers] = useState([]);
  let token = localStorage.getItem('token');

    useEffect(()=>{
      axios.get(`http://localhost:1010/users?token=${token}`)
      .then(result=>{
        setUsers(result.data);
      });
    }, [])


  return (
      <div className="h-full w-screen bg-gradient-to-r from-cyan-500 to-blue-500">
        { users.map((item)=>{
             return<div className="w-screen mb-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
             <div className="flex flex-col items-center p-5">
                 <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white"> {item.user_name} </h5>
                 <span className="text-sm text-gray-500 dark:text-gray-400">{item.Posts.length ?item.Posts[0].post_body: "no post made"}
                 </span>
                 <div className="flex mt-4 space-x-3 md:mt-6">
                     <a href="#" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"> {item.email} </a>
                 </div>
             </div>
         </div>
        })}

      </div>
  );
}

export default AllUsers;
