import { useState, useReducer} from "react"
import { addNewBlog } from "../utils/helpfulFunctions"
import bookReducer from "../helpers/blogsReducer";


export default function InputBlogInfo({dispatch}) {



  let [title, setTitle] = useState('');
  let [content, setContent] = useState('')

  function updateTitle (e){
    setTitle(e.target.value)
  }

  function updateContent (e){
    setContent(e.target.value)
  }

  return (
    <>
      <div className="container">
        <div className="input-group mb-3 row">
          <div className="display-6">Title</div>
          <input onChange={updateTitle} type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" value={title}></input>
        </div>
        <div className="form-outline row">
         <div className="display-6">Content</div>
         <div className="row g-3">
         <textarea value={content} onChange={updateContent} className="form-control" id="textAreaExample1" rows="4"></textarea>
          <button  onClick={()=>dispatch({type:"add", newBlog:{title, content}})} className="btn btn-success" disabled={!title || !content}> Publish New Content</button>
         </div>
        </div>
      </div>
    </>
  )

}
