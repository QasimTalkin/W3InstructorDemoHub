import Blog from './Blog'
import { useBlogContext } from './Context/BlogsContext';
import { useEffect, useState } from 'react';
import { useParams, useNavigate} from 'react-router-dom';
import axios from 'axios'
import { FidgetSpinner } from 'react-loader-spinner'

function Blogs() {
  const { dataAtAPointTime, actionHandler } = useBlogContext();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(true);
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


  const myBlogsApi = axios.create({baseURL:`https://${process.env.REACT_APP_BLOG_SECRET_KEY}.mockapi.io/api/blogs`})

  async function getBlogs () {
    let response = await myBlogsApi.get();
    actionHandler({type:'set', value:response.data})
    setIsLoading(false);
  }

  useEffect(()=>{
  getBlogs()
  }, [])

  const [articleToggled, setArticleToggle] = useState(false)
  const [toggle, setToggle] = useState('Show')

  function handleFilterArticle() {
    articleToggled ? setArticleToggle(false) : setArticleToggle(true)
    articleToggled ? setToggle('Show') : setToggle('Hide')
  }

  return (
    <>
      {/* <InputBlogInfo actionHandler={actionHandler} /> */}


{ isLoading ?
<>
      <FidgetSpinner
      visible={true}
      height="180"
      width="180"
      ariaLabel="dna-loading"
      wrapperStyle={{}}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#0000ff']}
      backgroundColor="#F4442E"
    />

    <h1> Page loading...</h1>
</>

:<>
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
}

    </>
  );
}

export default Blogs;
