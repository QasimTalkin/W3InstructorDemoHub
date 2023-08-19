import './App.css';
import Nav from './components/Nav';
import Blogs from './components/Blogs';
import Banner from './components/Banner';
import { useState } from 'react';
import blogData from './data/blogs.json'
import InputBlogInfo from './components/InputBlogInfo';
function App() {

  let [blogs, setBlogs] = useState(blogData);
  return (
    <div className="App">
      <Nav />
      <Banner title="Welcome" subTitle="This is a subtitle for home" />
      <InputBlogInfo blogs={blogs} setBlogs={setBlogs}/>
      <Blogs blogs={blogs} />
    </div>
  );
}

export default App;




