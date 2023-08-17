import { useState } from "react"

export default function RoomCapacity({ itialCapacity, title, themeChanger }) {

  let [peopleCount, setPeopleCount] = useState(itialCapacity);

  function handleEnter () {
    setPeopleCount((peopleCount)=>{
     let updateCount = peopleCount+1;
       if (updateCount >= 5) {
        themeChanger()
        alert("ROOM FULLLLLLLL")
        return 5
       }
      return updateCount;
    })
  }

  function handleExit () {
    setPeopleCount((peopleCount)=>{
      let updateCount = peopleCount-1;
      if (updateCount >= 5) {
        alert("ROOM Empty")
        return 0
       }
       return updateCount;
     })
  }


  return (
    <>
    <h2>{title}</h2>
    <button className="btn btn-success" onClick={handleEnter}  >| + |</button>
     { peopleCount }
     <button className="btn btn-danger"  onClick={handleExit} >| - |</button>
    </>
  )
}
