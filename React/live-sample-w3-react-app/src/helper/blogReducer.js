const blogReducer = (dataAtAPointTime, action) => {
  switch(action.type){
    case 'add':
      return [action.data, ...dataAtAPointTime]
    case 'delete':
      return dataAtAPointTime.filter((item)=>item.title != action.title)
    default:
      return dataAtAPointTime
  }
}
export default blogReducer;
