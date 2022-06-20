import logo from './logo.svg';
import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.webp";
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black',maxWidth:('100vw')}}>

<h1 className="title red">Your name here</h1>

<br/>

<img src={imageInSrc} ></img>

<br/>

<img src="/imageInPublic.jpg" ></img>

</div>

<iframe width="853" height="480" src="https://www.youtube.com/embed/2yKT_sxwBCY" title="ريال مدريد يرفع الكأس الغالية" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  );
}

export default App;
