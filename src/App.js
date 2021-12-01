import './App.css';
import Headline from './components/headline/Headline';
import Channel from './components/channel/Channel';

import burger from "./assets/images/header/burger.svg";
import avatar from "./assets/images/header/ava.jpg";


import image1 from "./assets/images/headline/img1.jpg";
import image2 from "./assets/images/headline/img2.jpg";
import image3 from "./assets/images/headline/img3.jpg";
import image4 from "./assets/images/headline/img4.jpg";
import image5 from "./assets/images/headline/img5.jpg";
import image6 from "./assets/images/headline/img6.jpg";

import imgN1 from "./assets/images/news/img1.jpg";
import imgN2 from "./assets/images/news/img2.jpg";
import imgN3 from "./assets/images/news/img3.jpg";

import sortIcon1 from "./assets/images/sort-item/location.svg";
import sortIcon2 from "./assets/images/sort-item/pie.svg";
import sortIcon3 from "./assets/images/sort-item/calendar.svg";


import fox from "./assets/images/channel/fox.png";
import cw6 from "./assets/images/channel/cw6.png";
import abc from "./assets/images/channel/abc.png";
import al from "./assets/images/channel/al.png";
import bbc from "./assets/images/channel/bbc.png";
import cnn from "./assets/images/channel/cnn.png";
import News from './components/news/News';
import SortItem from './components/sort-item/SortItem';
import Search from './components/search/Search';


function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="sorting">
            <SortItem sortIcon={sortIcon1} text="San Francisco, California"/>
            <SortItem sortIcon={sortIcon2} text="Analysis"/>
            <SortItem sortIcon={sortIcon3} text="Monthly"/>
        </div>
        <div className="right-block">
          <Search/>
          <button className="burger-btn">
            <img className="burger-img" src={burger}/>
          </button>
          <img className="avatar-img" src={avatar}/>
        </div>
      </header>
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

        <section className="headlines">
            <h2 className="block-title">Today’s Headlines</h2>
          <div className="block-content">
            <Headline likes="10.8k" dislikes="1.4k" time="2:00pm" labelText="BBC NEWS" thumbnail={image1} title="Hate speech vs free speech"/>
            <Headline likes="10.2k" dislikes="2.2k" time="2:20pm" labelText="BBC NEWS" thumbnail={image2} title="Ontario Liberal leadership"/>
            <Headline likes="15k" dislikes="2k" time="2:40pm" labelText="BBC NEWS" thumbnail={image3} title="Victim of Scarborough"/>
            <Headline likes="0" dislikes="55.2k" time="3:00pm" labelText="ABC NEWS" thumbnail={image4} title="Mother who left her baby"/>
            <Headline likes="10" dislikes="4k" time="4:00pm" labelText="CW6 NEWS" thumbnail={image5} title="Mother of Stefanie Rengel"/>
            <Headline likes="10.2k" dislikes="2k" time="6:00pm" labelText="CNN NEWS" thumbnail={image6} title="World   Cup: Popular items"/>
          </div>
        </section>
        
        <section className="news">
          <h2 className="block-title">Featured News</h2>
          <div className="news-content">
            <News labelText="FOX NEWS" time="2:00pm" image={imgN1} title="Travellers to pay more than $2K, Trudeau says"/>
            <News labelText="CNN NEWS" time="2:30pm" image={imgN2} title="Myanmar’s military seizes control of country ov  er..."/>
            <News labelText="BBC NEWS" time="3:00pm" image={imgN3} title="Pressure builds for Biden to cancel other pipeline..." />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;