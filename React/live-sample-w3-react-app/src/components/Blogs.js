import Blog from './Blog'
import InputBlogInfo from './InputBlogInfo';
import { useBlogContext  }from './Context/BlogsContext';

function Blogs() {
  const {dataAtAPointTime, actionHandler } = useBlogContext();
  return (
    <>
      <InputBlogInfo actionHandler={actionHandler} />
      <div className='container'>
        <div className='row g-2'>
          {dataAtAPointTime.map((item) => {
            return (
              <Blog title={item.title} post={item.content} key={item.title} time={item.time}>
                <button className="btn btn-danger" onClick={()=>actionHandler({type:"delete", title:item.title})} id={item.title}>Delete</button>
              </Blog>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Blogs;
