import cassettePng from './assets/cassette.png';
import cassetteGif from './assets/cassette.gif';
import upload from './assets/upload.gif';
import background from './assets/background.png'
import { useState } from 'react';
import './App.css';

const App = () => {const [videoSource, setVideoSource] = useState(null);
  const [videoTitle, setVideoTitle] = useState('No video playing');

  const uploadVideo = (e) => {
    let file = e.target.files[0];
    if(file !== undefined) {
      let url = URL.createObjectURL(file);
      setVideoSource(url);
      setVideoTitle(file.name);
    }
  };
  return (
    <>
      <header className="app-header">
        <h1 className='logo'>Video Player</h1>
        <div className="video-title-container">
          {videoTitle === 'No video playing' ? <p className='video-title'>{videoTitle}</p> : <marquee className='video-title' direction='left' scrollamount="4">{videoTitle}</marquee>}          
          {videoSource === null ? <img src={cassettePng} className='cassette' alt='cassette-icon' /> : <img src={cassetteGif} className='cassette' alt='cassette-icon' />}
        </div>
      </header>
      <main>
        <section className='left-main'>
          <h2 className='desc1'>Upload and Watch</h2>
          <h2 className='desc2'>Your Video</h2>
          <div className='upload-container'>
            <input className='input-btn' type="file" id="video-input" name="video" accept="video/*" onChange={uploadVideo} />
            <label htmlFor="video-input">
              <img src={upload} className='upload-icon' alt='upload' />
              <p className='upload-label'>Upload Video</p>
            </label>
          </div>
        </section>
        <section className='right-main'>
          <div className='video-player-wrapper'>
            <div className='video-player-container'>
              <video className='video-player' src={videoSource} controls autoPlay />
            </div>
          </div>
        </section>
      </main>
      <div className='gradient1'></div>
      <img src={background} className='background' alt='background' />
      <div className='gradient2'></div>
    </>
  );
}

export default App;
