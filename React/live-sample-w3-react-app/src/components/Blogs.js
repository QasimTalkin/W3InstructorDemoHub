import Blog from './Blog'
import InputBlogInfo from './InputBlogInfo';
import bookReducer from "../helpers/blogsReducer";
import { useReducer } from 'react';

function Blogs({heading, blogs, setBlogs}){
  const [state, dispatch] = useReducer(bookReducer, blogs)
  function handleDelete(e) {
   const currentTitleOfBlogToDelete = e.target.id;
   const newBlogs = blogs.filter((item)=>item.title != currentTitleOfBlogToDelete)
   setBlogs(newBlogs)
  }
return (
 <>
<InputBlogInfo dispatch={dispatch}/>
 <h2>{heading}</h2>
     <div className='container'>
      <div className='row g-2'>
      { state.map((item)=> {
       return (
        <Blog title={item.title} post={item.content} key={item.title} time={item.time}>
           <button className="btn btn-danger" onClick={()=>dispatch({type:"delete", title:item.title})} id={item.title}>Delete</button>
        </Blog>
       );
      })}
      </div>
      </div>
 </>
);

}

export default Blogs;
