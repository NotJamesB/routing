import {BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom';
import './App.css';


const Home = (props)=>{
  return(
  <div>
    <h1 style={{color: "green"}}>Welcome</h1>
  </div>
  )
}

const Params = (props)=>{
    const {word, color, bgCol} = useParams();

  return(
    <div>
      { 
      isNaN(word) ?
      <p style = {
        color?
        {color: color, backgroundColor: bgCol}
        :null
      }>
        {word}
      </p>
      :
      <p>
        {word}
      </p>


      }
    </div>
  )
}



function App() {


  return (
    <BrowserRouter>
    <div className="App">
    <Routes> 
      <Route path="/home" element={<Home></Home>} />
      <Route element={<Params></Params>} path={"/:word"} />
      <Route element={<Params></Params>} path={"/:word/:color/:bgCol"} />

    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
