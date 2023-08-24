import { BlogContext } from "./Context/BlogsContext";
import { useContext } from "react";

export default function Banner({title, subTitle, children}) {
  const {dataAtAPointTime} = useContext(BlogContext);
  return (
    <>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4"> { title} {children} {dataAtAPointTime.length} Blog's </h1>
      <p className="lead">{ subTitle}</p>
    </div>
  </div>
    </>
  );
}
