import './App.css';
import Nav from './components/Nav'
import MyImage from './../assets/img/cats.png'
function App() {
  let name = "Qasim";
  let numer = 9;
  let arr = [1,2,3,4];
  let person = {name:"Qasim", age:12}
  return (
    <div className="App">
      <img src={MyImage} alt="cats" />
      <Nav />
    </div>
  );
}

export default App;




