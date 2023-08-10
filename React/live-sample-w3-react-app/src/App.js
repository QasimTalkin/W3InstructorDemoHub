import './App.css';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Blogs from './components/Blogs';


function App() {
  let blogs = [
   {
     title:"New Blog on Gym",
     content:" dasda react is Lorem ipsum dolor sit amet Provident amet in corrupti eos quod reprehenderit, est dolores cumque officiis quisquam inventore reiciendis labore tempore rem, debitis culpa dolor doloremque sequi eius. Doloremque quis repellendus nesciunt? This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
   },   {
    time:5,
    title:"Games",
    content:"sadsasd react is Lorem ipsum dolor sit amet Provident amet in corrupti eos quod reprehenderit, est dolores cumque officiis quisquam inventore reiciendis labore tempore rem, debitis culpa dolor doloremque sequi eius. Doloremque quis repellendus nesciunt? This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },   {
    time:580,
    title:"Haoyu's guide to using bootstrap",
    content:"sadasd react is Lorem ipsum dolor sit amet Provident amet in corrupti eos quod reprehenderit, est dolores cumque officiis quisquam inventore reiciendis labore tempore rem, debitis culpa dolor doloremque sequi eius. Doloremque quis repellendus nesciunt? This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },   {
    time:501,
    title:"Toms guide on learning Ruby on Rails",
    content:"asdasdad react is Lorem ipsum dolor sit amet Provident amet in corrupti eos quod reprehenderit, est dolores cumque officiis quisquam inventore reiciendis labore tempore rem, debitis culpa dolor doloremque sequi eius. Doloremque quis repellendus nesciunt? This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },   {
    time:30,
    title:"Kyles guide on best practices",
    content:" saddasdasda react is Lorem ipsum dolor sit amet Provident amet in corrupti eos quod reprehenderit, est dolores cumque officiis quisquam inventore reiciendis labore tempore rem, debitis culpa dolor doloremque sequi eius. Doloremque quis repellendus nesciunt? This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  },   {

    title:"Why Isaac is not talking to us",
    content:"Isanc is Lorem ipsum dolor sit amet Provident amet in corrupti eos quod reprehenderit, est dolores cumque officiis quisquam inventore reiciendis labore tempore rem, debitis culpa dolor doloremque sequi eius. Doloremque quis repellendus nesciunt? This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer."
  }
  ]

  let lessThan60MinsBlogs = blogs.filter((item)=>item.time<60);

  return (
    <div className="App">
      <Nav />
      <Blogs blogs={blogs} heading="ALL OF EMMM"></Blogs>
      <Blogs blogs={lessThan60MinsBlogs} heading="LESS THAN 60"></Blogs>
    </div>
  );
}

export default App;




