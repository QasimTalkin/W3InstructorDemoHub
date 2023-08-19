function lessThan60MinsBlogs(blogs) {
   return blogs.filter((item) => item.time < 60);
}

function addNewBlog(title, content, suppliedArray) {
  return suppliedArray.push({title, content})
}


export {
  lessThan60MinsBlogs,
  addNewBlog
}
