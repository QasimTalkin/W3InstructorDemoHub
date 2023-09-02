import './App.css';
import ProjectRoutes from './routes/ProjectRoutes'
import {BlogContextProvider} from './components/Context/BlogsContext'


function App() {
  return (
    <div className="App">
       <BlogContextProvider>
        <ProjectRoutes />
      </BlogContextProvider>
    </div>
  );
}

export default App;




