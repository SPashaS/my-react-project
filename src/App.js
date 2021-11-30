import './App.css';
import Headliner from './components/headliner/Headliner';
import image1 from "./assets/images/headliner/img1.jpg"
import image2 from "./assets/images/headliner/img2.jpg"
import image3 from "./assets/images/headliner/img3.jpg"
import image4 from "./assets/images/headliner/img4.jpg"
import image5 from "./assets/images/headliner/img5.jpg"
import image6 from "./assets/images/headliner/img6.jpg"

function App() {
  return (
    <div className="App">
      <header className="header">Header</header>
      <asside className="sidebar">Sidebar</asside>
      <main className="main">
        <section className="headliners">
          
          <h2 className="block-title">Today’s Headlines</h2>

          <div className="block-content">
            <Headliner thumbnail={image1} title="Hate speech vs free speech"/>
            <Headliner thumbnail={image2} title="Ontario Liberal leadership"/>
            <Headliner thumbnail={image3} title="Victim of Scarborough"/>
            <Headliner thumbnail={image4} title="Mother who left her baby"/>
            <Headliner thumbnail={image5} title="Mother of Stefanie Rengel"/>
            <Headliner thumbnail={image6} title="World   Cup: Popular items"/>
          </div>
          
        </section>
        
      </main>
    </div>
  );
}

export default App;