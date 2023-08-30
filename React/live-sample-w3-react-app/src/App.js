import './App.css';
import Nav from './components/Nav';
import Blogs from './components/Blogs';
import Banner from './components/Banner';
import {BlogContextProvider} from './components/Context/BlogsContext'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Pokemon from './components/Pokemon';
import HomePage from './components/pages/HomePage'


function App() {

  return (
  <div className="App">
  <BrowserRouter>
  <BlogContextProvider>
     <Routes>
      <Route path="/" element={<Nav />}>
        <Route path='/' element={<HomePage/>}/>
        <Route path="/blogs" element={<Blogs/>}>
          <Route path=':id' element={<Pokemon/>}>
        </Route>
        </Route>
      </Route>
      <Route path='*' element={<Pokemon/>}/>
   </Routes>
     </BlogContextProvider>
   </BrowserRouter>
  </div>
  );
}

export default App;




