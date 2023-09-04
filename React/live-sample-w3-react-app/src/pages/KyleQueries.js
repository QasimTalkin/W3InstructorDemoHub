import { useState } from "react";


const KylesQueries = () => {

  const handleMinus = () => {
    setCount((prevCount) => {
      let count = prevCount - 1;
      if (count < 5) {
        setCount(0);
      }
      return count;
    });
    };

  function handlePlus() {
    let newCount = count + 1;
    setCount(newCount)
  }

  function handleSubmit(e){
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);
    console.log(formProps)
    if (formProps.pass.length <= 8 ){
      alert( "password to short");
      e.preventDefault();
    }
  }

  const [count, setCount] = useState(0)
  // if the room has more 5 people don't allow show alert!
  return (<>
     <form method="POST" onSubmit={handleSubmit} >
        <input type="button" value="Minus" onClick={ handleMinus}/>
        <h1>{ count }</h1>
        <input type="button" value="Plus" onClick={handlePlus}/>
        <input type="submit" value="submit"/>
        <input type="text" name="city"/>
     </form>
  </> );
}

export default KylesQueries;


// count--  // count = count - 1
