import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AboutUS from './../pages/AboutUs';
import ContactUs from './../pages/ContactUs';
import Home from './../pages/Home';
import NotFound from './../pages/NotFound';
import Nav from './../components/Nav';
import Blogs from './../components/Blogs';
import KylesQueries from '../pages/KyleQueries';

const ProjectRoutes = () => {
  return ( <>
<BrowserRouter>
          <Routes>
            <Route path='/' element={<Nav/>}>
              <Route index element={<Home/>}/>
              <Route path='home' element={<Home/>}/>
              <Route path='about' element={<AboutUS/>}/>
              <Route path='contact' element={<ContactUs/>}/>
              <Route path='kyle' element={<KylesQueries/>}/>
              <Route path='blogs' element={<Blogs/>}>
                <Route path=':id~Tom~Jerry~Qasim' element={<Home/>}/>
              </Route>
            </Route>
            <Route path='*' element={<NotFound/>}/>
          </Routes>
</BrowserRouter>
  </> );
}

export default ProjectRoutes;
