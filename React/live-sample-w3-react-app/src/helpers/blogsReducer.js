const bookReducer = (state, action) => {
  switch (action.type) {
    case "add":
      debugger
      let newBlogs = [action.newBlog, ...state];
      return newBlogs
    case "delete":
      return state.filter(item=>item.title != action.title)
    default:
      return state
  }
}

export default bookReducer;
