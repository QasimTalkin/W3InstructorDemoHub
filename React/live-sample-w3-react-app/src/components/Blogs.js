import Blog from './Blog'
import { useBlogContext } from './Context/BlogsContext';
import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios'

function Blogs() {
  const { dataAtAPointTime, actionHandler } = useBlogContext();
  const { id } = useParams();
  let chosenOne = [];
  let noChosenOne = false;
  if (id){
    [chosenOne] = dataAtAPointTime.filter((blog)=>blog.id === id)
    if (!chosenOne){
      noChosenOne = true;
    }
    console.log(chosenOne)
  }

  let navigate = useNavigate();



  const myBlogsApi = axios.create({baseURL:'https://64f672ff9d77540849524fa1.mockapi.io/api/blogs'})
  useEffect(()=>{
    //go get all blogs
    myBlogsApi.get().then(res=>{
      let newBlogs = res.data;
      actionHandler({type:'set', value:newBlogs})
    })
    // and set them as current blogs
    //actionHanfle set blogs
  }, [actionHandler, myBlogsApi])

  const [articleToggled, setArticleToggle] = useState(false)
  const [toggle, setToggle] = useState('Show')

  function handleFilterArticle() {
    articleToggled ? setArticleToggle(false) : setArticleToggle(true)
    articleToggled ? setToggle('Show') : setToggle('Hide')
  }

  return (
    <>
      {/* <InputBlogInfo actionHandler={actionHandler} /> */}
{  true ?
<>
      <button className='btn btn-primary my-5' onClick={handleFilterArticle}> {toggle} Articles </button>
      {
      true &&
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
