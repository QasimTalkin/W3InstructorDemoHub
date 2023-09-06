import { motion } from "framer-motion"


function Blog({ heading, title, post, time = 60, children }) {
  return (
    <>
      <motion.div className="col-sm-12 col-md-6 col-lg-4"
      initial={{ y: -50, scale: 2}}
      animate={{ y: 0, scale: 1}}
      transition={{ duration: 0.5 }}>
        <div className="card border">
          <div className="card-body border">
            <h3 className="card-title fs-3">{title}</h3>
            <p className="card-text fs-5">{post}</p>
            <p className="card-text"><small className="text-muted">Last updated {time} mins ago</small></p>
          </div>
          {children}
        </div>
      </motion.div>
    </>
  )
}


export default Blog;
