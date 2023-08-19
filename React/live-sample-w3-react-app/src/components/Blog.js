import MyImage from './../../assets/img/cats.png'
import { Animate } from "react-simple-animate";
function Blog({heading, title, post, time=60, children}){
  return (
    <>

    <div className="col-sm-12 col-md-6 col-lg-4">
       <Animate play start={{ opacity: 0, background:"red"}} end={{ opacity: 1 }}> <div className="card border">
    <div className="card-body border">
      <h3 className="card-title fs-3">{ title }</h3>
      <p className="card-text fs-5">{ post }</p>
      <p className="card-text"><small className="text-muted">Last updated {time} mins ago</small></p>
    </div>
    {children}
    </div>
    </Animate>
    </div>

    </>
  )
}


export default Blog;
