import './App.css';
import AboutUS from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import Blogs from './components/Blogs';
// import Banner from './components/Banner';
import {BlogContextProvider} from './components/Context/BlogsContext'
// import Pokemon from './components/Pokemon';

function App() {
  return (
    <div className="App">
       <BlogContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Nav/>}>
              <Route index element={<Home/>}/>
              <Route path='home' element={<Home/>}/>
              <Route path='about' element={<AboutUS/>}/>
              <Route path='contact' element={<ContactUs/>}/>
              <Route path='blogs' element={<Blogs/>}>
                <Route path=':id~Tom~Jerry~Qasim' element={<Home/>}/>
              </Route>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
        </BrowserRouter>
    </BlogContextProvider>
    </div>
  );
}

export default App;




