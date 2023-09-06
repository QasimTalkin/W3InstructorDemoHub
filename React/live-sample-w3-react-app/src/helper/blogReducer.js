import blogs from '../data/blogs.json'
const blogReducer = (dataAtAPointTime, action) => {
  switch(action.type){
    case 'add':
      return [action.data, ...dataAtAPointTime]
    case 'delete':
      return dataAtAPointTime.filter((item)=>item.title !== action.title)
    case 'filter':
      return dataAtAPointTime.filter((article)=>article.time<=30)
    case 'unfilter':
      return blogs
    case 'set':
      return dataAtAPointTime = action.value;
    default:
      return dataAtAPointTime
  }
}
export default blogReducer;
