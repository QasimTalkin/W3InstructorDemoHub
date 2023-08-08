import styles from './../styles/myStyle.module.css'
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
       <h2 className={styles.h2Style}>{item.name}</h2>
       <p className={styles.paragraph} >{item.value}</p>
      </>
      )
    }) }
    </>
  )
}

export default Nav;
