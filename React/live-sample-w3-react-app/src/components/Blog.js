import MyImage from './../../assets/img/cats.png'
function Blog({heading, title, post, time=60, children}){
  return (
    <>
    <div className="card">
    <div className="card-body">
      <h5 className="card-title">{ title }</h5>
      <p className="card-text">{ post }</p>
      <p className="card-text"><small className="text-muted">Last updated {time} mins ago</small></p>
    </div>
    {children}
    </div>
    </>
  )
}


export default Blog;
