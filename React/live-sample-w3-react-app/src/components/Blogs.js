import Blog from './Blog'
function Blogs({heading, blogs}){
return (
 <> <h2>{heading}</h2>
     <div className='cardDeck'>
      { blogs.map((item)=> {
       return (
        <Blog title={item.title} post={item.content} key={item.title} time={item.time}>
           <div className="card-footer">Footer</div>
        </Blog>
       );
      })}
      </div>
 </>
);

}

export default Blogs;
