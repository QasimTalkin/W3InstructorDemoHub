import './App.css';
import Nav from './components/Nav';
import Blogs from './components/Blogs';
import Banner from './components/Banner';
import {BlogContextProvider} from './components/Context/BlogsContext'

function App() {

  return (
    <div className="App">
    <BlogContextProvider>
      <Nav />
      <Banner title="Welcome" subTitle="This is a subtitle for home" />
      <Blogs/>
    </BlogContextProvider>
    </div>
  );
}

export default App;




