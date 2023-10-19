import './App.css';
import SignUp from "./components/SignUp";
import AllUsers from './components/AllUsers';
import { useState } from 'react';
function App() {

  let [loggedIn, setLoggedIn] = useState(true)

  loggedIn = localStorage.getItem('token') ? true : false;


  return <>
  {loggedIn ? <AllUsers/> : <SignUp/>}
  </>
}

export default App;
