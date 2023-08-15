import './App.css';
import Nav from './components/Nav';
import Blog from './components/Blog';
import Blogs from './components/Blogs';
import Banner from './components/Banner';
import { useState } from 'react';

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

   let [initialClickCount, setInitialClickCount] = useState(0);

   function handleClickPlus(){
    setInitialClickCount(initialClickCount++);
   }

   function handleClickMinus() {
    setInitialClickCount(initialClickCount--);
   }

   function handleClickMultiplyByTwo(){
    let newValue = initialClickCount * 2;
    setInitialClickCount(newValue);
   }


  let [numArray, updateNumArray] = useState([1,2,3,4,5,6])

   let newBlogs = [
     {
      title:"Keyur Pater",
      content: "Science Stuff Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at ipsam dicta libero ea? Delectus, consequatur pariatur dolores, aliquid tempore laudantium impedit nihil ducimus eveniet non cum commodi quo neque."
     },
     {
       title:"Kyle",
       content:"Math Stuff Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at ipsam dicta libero ea? Delectus, consequatur pariatur dolores, aliquid tempore laudantium impedit nihil ducimus eveniet non cum commodi quo neque."
     },
     {
       title:"Mildred",
       content:"UI UX ExpertDesigns Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat at ipsam dicta libero ea? Delectus, consequatur pariatur dolores, aliquid tempore laudantium impedit nihil ducimus eveniet non cum commodi quo neque."

     }
   ]

   let [scienceBlogs, updateScienceBlogs] = useState(newBlogs);
   function addLeoswork(){
    scienceBlogs.push({
      title:"Leo",
      content: "Memes on Science long article...."
    });
    updateScienceBlogs([...scienceBlogs]);
   }
  return (
    <div className="App">
      <Banner title="Welcome" subTitle="This is a subtitle for home">
         <h1> { initialClickCount } </h1>
         <h2 onClick={()=>updateNumArray('Hello')}> { numArray } </h2>
      </Banner>
      <button className="btn btn-primary" onClick={handleClickPlus}>Plus</button>
      <button className='btn btn-warning' onClick={handleClickMinus}>Minus</button>
      <button className='btn btn-danger' onClick={handleClickMultiplyByTwo}>Times 2</button>
      <button className='btn btn-success' onClick={()=>setInitialClickCount(0)}>Clear</button>
      <Nav />
      <button onClick={addLeoswork}> Publish Leo's theisi on Memes</button>
      <Banner title="Science Articles" subTitle="some of the grtest Science article"></Banner>
      <Blogs blogs={scienceBlogs}/>
      <Banner title="ALL THE BLOGS" subTitle="This is a subtitle for ALL BLOGS"><h1> Jon is not happy with react </h1></Banner>
      <Blogs blogs={blogs} heading="ALL OF EMMM"></Blogs>
      <Banner title="LESS THEN 60 mins Blogs" subTitle="This is a subtitle for ALL LESS THEN 60 mins Blogs"/>
      <Blogs blogs={lessThan60MinsBlogs} heading="LESS THAN 60"></Blogs>
    </div>
  );
}

export default App;




