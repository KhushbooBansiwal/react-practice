
import './App.css';
import Heading from './Heading';
import ImageCarousal from './imageCarousal';

function App() {
  const country = "India";
  return (
    <div className="App">
      <Heading  country ={country}/> 
      <ImageCarousal />
    </div>
  );
}

export default App;
