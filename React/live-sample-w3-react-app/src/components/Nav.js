import { NavLink, Outlet } from 'react-router-dom'
function Nav(){
  return (
    <>

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<NavLink className="nav-link" to="/">Q-Blogs</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/blogs">Blogs</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/kyle">Kyles Lab</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="/">Disabled</NavLink>
      </li>
    </ul>
  </div>
</nav>
<main>
     <Outlet/>
</main>
    </>
  )
}

export default Nav;
