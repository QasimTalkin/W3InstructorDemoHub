
const Home = () => {
  let isVerified = (process.env.SECRET_CLOUD_STORAGE_KEY==='Qasim') ? true : false
  console.log(process.env)
  return ( <>
      <h1>Home</h1>
      <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error odio alias!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat error odio alias!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto voluptatem explicabo neque!
        </p>
      </div>
{isVerified  &&    <>
      <h2>Check user is logged in show user data</h2>
      <div>
        pdf and images from cloud storage
      </div>
      </>}

  </> );
}

export default Home;
