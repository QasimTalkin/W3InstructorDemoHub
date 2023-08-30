import Blog from './Blog'
import InputBlogInfo from './InputBlogInfo';
import { useBlogContext } from './Context/BlogsContext';
import { useState} from 'react';
import { useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';

function Blogs() {
  const { dataAtAPointTime, actionHandler } = useBlogContext();
  const { id } = useParams();
  let currentBlog = [];
  console.log(id);
  if (id){
    currentBlog = dataAtAPointTime.filter((item)=>item.id==id);
    console.log(currentBlog);
  }


  const [articleToggled, setArticleToggle] = useState(false)
  const [toggle, setToggle] = useState('Show')

  function handleFilterArticle() {
    articleToggled ? setArticleToggle(false) : setArticleToggle(true)
    articleToggled ? setToggle('Show') : setToggle('Hide')
  }

  return (
    <>
      <InputBlogInfo actionHandler={actionHandler} />
      <button className='btn btn-primary my-5' onClick={handleFilterArticle}> {toggle} Articles {uuidv4()}</button>


      {
      (articleToggled && !id) ?
        <>
          <h2>All articles</h2>
          <div className='container'>
            <div className='row g-2'>
              {dataAtAPointTime.map((item) => {
                let currentKey = uuidv4();
                return (
                  <Blog title={item.title} post={item.content} key={item.title} time={item.time}>
                    <button className="btn btn-danger" onClick={() => actionHandler({ type: "delete", title: item.title })} id={item.title}>Delete</button>
                  </Blog>
                );
              })}
            </div></div>
        </>
        :
        <>
         <h2>{currentBlog.time}</h2>
          <div className='container'>
            <div className='row g-2'>
              {currentBlog.map((item) => {
                let currentKey = uuidv4();
                return (
                  <Blog title={item.title} post={item.content} key={item.title} time={item.time}>
                    <button className="btn btn-danger" onClick={() => actionHandler({ type: "delete", title: item.title })} id={item.title}>Delete</button>
                  </Blog>
                );
              })}
            </div></div>
        </>
      }

    </>
  );
}

export default Blogs;
