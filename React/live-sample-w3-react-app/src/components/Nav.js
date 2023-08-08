function Nav(){

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
    { navbar.map((item)=>{
      return (
      <>
       <h2 style={{backgroundColor:"red", border:"2px solid green"}}>{item.name}</h2>
       <p>{item.value}</p>
      </>
      )
    }) }
    </>
  )
}

export default Nav;
