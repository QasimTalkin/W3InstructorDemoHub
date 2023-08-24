import { createContext } from "react";
import { useContext, useReducer} from "react";
import blogReducer from '../../helper/blogReducer'
import blogs from '../../data/blogs.json'

const BlogContext = createContext();


function BlogContextProvider ({children}){
  const [dataAtAPointTime, actionHandler] = useReducer(blogReducer,blogs);
  return (
   <BlogContext.Provider value={{dataAtAPointTime, actionHandler}}>
    {children}
   </BlogContext.Provider>
  )
}

function useBlogContext (){
  return useContext(BlogContext)
}

export {BlogContextProvider, BlogContext, useBlogContext};
