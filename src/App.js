import './App.css';
import Headliner from './components/headliner/Headliner';
import Channel from './components/channel/Channel';

import image1 from "./assets/images/headliner/img1.jpg"
import image2 from "./assets/images/headliner/img2.jpg"
import image3 from "./assets/images/headliner/img3.jpg"
import image4 from "./assets/images/headliner/img4.jpg"
import image5 from "./assets/images/headliner/img5.jpg"
import image6 from "./assets/images/headliner/img6.jpg"


import fox from "./assets/images/channel/fox.png"
import cw6 from "./assets/images/channel/cw6.png"
import abc from "./assets/images/channel/abc.png"
import al from "./assets/images/channel/al.png"
import bbc from "./assets/images/channel/bbc.png"
import cnn from "./assets/images/channel/cnn.png"


function App() {
  return (
    <div className="App">
      <header className="header">Header</header>
      <asside className="sidebar">Sidebar</asside>
      <main className="main">
        <section className="channels">
          <h2 className="block-title">Explore Channels</h2>
          <div className="channels-content">
            <Channel text="FOX NEWS" logo={fox}/>
            <Channel text="CW6 NEWS" logo={cw6}/>
            <Channel text="ABC NEWS" logo={abc}/>
            <Channel text="AL JAZEERA" logo={al}/>
            <Channel text="BBC NEWS" logo={bbc}/>
            <Channel text="CNN NEWS" logo={cnn}/>
          </div>

        </section>

        <section className="headliners">
            <h2 className="block-title">Today’s Headlines</h2>
          <div className="block-content">
            <Headliner labelText="BBC NEWS" thumbnail={image1} title="Hate speech vs free speech"/>
            <Headliner labelText="BBC NEWS" thumbnail={image2} title="Ontario Liberal leadership"/>
            <Headliner labelText="BBC NEWS" thumbnail={image3} title="Victim of Scarborough"/>
            <Headliner labelText="ABC NEWS" thumbnail={image4} title="Mother who left her baby"/>
            <Headliner labelText="CW6 NEWS" thumbnail={image5} title="Mother of Stefanie Rengel"/>
            <Headliner labelText="CNN NEWS" thumbnail={image6} title="World   Cup: Popular items"/>
          </div>
        </section>
        
      </main>
    </div>
  );
}

export default App;