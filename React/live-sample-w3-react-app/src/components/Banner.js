export default function Banner({title, subTitle, children}) {
  return (
    <>
    <div className="jumbotron jumbotron-fluid">
    <div className="container">
      <h1 className="display-4"> { title} {children} </h1>
      <p className="lead">{ subTitle}</p>
    </div>
  </div>
    </>
  );
}
