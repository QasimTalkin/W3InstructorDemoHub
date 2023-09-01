import Blog from './Blog'
import InputBlogInfo from './InputBlogInfo';
import { useBlogContext } from './Context/BlogsContext';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Outlet, useParams, useNavigate} from 'react-router-dom';
function Blogs() {
  const { dataAtAPointTime, actionHandler } = useBlogContext();
  const { id } = useParams();
  let chosenOne = [];
  let noChosenOne = false;
  if (id){
    [chosenOne] = dataAtAPointTime.filter((blog)=>blog.id == id)
    if (!chosenOne){
      noChosenOne = true;
    }
    console.log(chosenOne)
  }

  let navigate = useNavigate();



  const [articleToggled, setArticleToggle] = useState(false)
  const [toggle, setToggle] = useState('Show')

  function handleFilterArticle() {
    articleToggled ? setArticleToggle(false) : setArticleToggle(true)
    articleToggled ? setToggle('Show') : setToggle('Hide')
  }

  return (
    <>
      {/* <InputBlogInfo actionHandler={actionHandler} /> */}
{  !id ?
<>
      <button className='btn btn-primary my-5' onClick={handleFilterArticle}> {toggle} Articles </button>
      {
      (articleToggled) &&
        <>
          <h2>All articles</h2>
          <div className='container'>
            <div className='row g-2'>
              {dataAtAPointTime.map((item) => {
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
:
 <>
 { noChosenOne ?   <input type="button" onClick={()=>navigate('/home')} value="TAKE ME HOME"/> :
 <div className='container justify-content-center align-items-center'>
<Blog title={chosenOne.title} post={chosenOne.content} key={chosenOne.title} time={chosenOne.time}>
  <button className="btn btn-danger" onClick={() => actionHandler({ type: "delete", title: chosenOne.title })} id={chosenOne.title}>Delete</button>
</Blog>
</div>}

</>
}

    </>
  );
}

export default Blogs;
