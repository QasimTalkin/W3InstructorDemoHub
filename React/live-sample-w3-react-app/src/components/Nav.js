import styles from './../styles/myStyle.module.css'
import { useBlogContext } from './Context/BlogsContext';

function Nav(){
  const {dataAtAPointTime}= useBlogContext();
  let navbar = [
    {
      name:"About US",
      value:" About US   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla dolorum minima."
    },
    {
      name:"Home",
      value:" Home   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla dolorum minima."
    },
    {
      name:"Contact",
      value:" Contact   Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nulla dolorum minima."
    }
  ]
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar ({dataAtAPointTime.length}) Blogs</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Features</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Pricing</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav>
    </>
  )
}

export default Nav;
