import Blog from './Blog'
function Blogs({heading, blogs, setBlogs}){

  function handleDelete(e) {
   const currentTitleOfBlogToDelete = e.target.id;
   const newBlogs = blogs.filter((item)=>item.title != currentTitleOfBlogToDelete)
   setBlogs(newBlogs)
  }
return (
 <> <h2>{heading}</h2>
     <div className='container'>
      <div className='row g-2'>
      { blogs.map((item)=> {
       return (
        <Blog title={item.title} post={item.content} key={item.title} time={item.time}>
           <button className="btn btn-danger" onClick={handleDelete} id={item.title}>Delete</button>
        </Blog>
       );
      })}
      </div>
      </div>
 </>
);

}

export default Blogs;
