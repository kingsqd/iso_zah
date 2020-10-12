import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="perspective effect-rotate-left">
    <div className="container"><div className="outer-nav--return" />
      <div id="viewport" className="l-viewport">
        <div className="l-wrapper">
          <header className="header">
            <a className="header--logo" href="#0">
              <img src="img/miniZah.png" alt="Global" />
              <p>Iso Zah</p>
            </a>
            <button className="header--cta cta">Book Me</button>
            <div className="header--nav-toggle">
              <span />
            </div>
          </header>
          <nav className="l-side-nav">
            <ul className="side-nav">
              <li className="is-active"><span>Home</span></li>
              <li><span><a href="https://isozahshop.myshopify.com/collections/all">Merch</a></span></li>
              <li><span>Projects</span></li>
              <li><span>Videos</span></li>
              <li><span>Book Me</span></li>
            </ul>
          </nav>
          <ul className="l-main-content main-content">
            <li className="l-section section section--is-active">
              <div className="intro">
                <div className="intro--banner">
                  <h1>Iso Zah<br /></h1>
                  <button className="cta">Book
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{enableBackground: 'new 0 0 150 118'}} xmlSpace="preserve">
                      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                      </g>
                    </svg>
                    <span className="btn-background" />
                  </button>
                  <img src="img/iso3.png" alt="Welcome" />
                </div>
                <div className="intro--options">
                  {/* <a href="#0">
                    <h3>Metiew &amp; Smith</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                  </a>
                  <a href="#0">
                    <h3>Fantasy interactive</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                  </a>
                  <a href="#0">
                    <h3>Paul &amp; shark</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                  </a> */}
                </div>
              </div>
            </li>
           <li className="l-section section">
              <div className="merch">
                <h2><a href="https://isozahshop.myshopify.com/collections/all">Merch</a></h2>
              </div>
            </li>
            <li className="l-section section">
              <div className="work">
                <h2>Projects</h2>
                <div className="work--lockup">
                  <ul className="slider">
                    <li className="slider--item slider--item-left">
                      <a href="https://music.apple.com/us/album/the-let-out/1444793395">
                        <div className="slider--item-image">
                          <img src="img/theLetOut.jpg" alt="Victory" />
                        </div>
                        <p className="slider--item-title">The Let Out</p>
                        <p className="slider--item-description"></p>
                      </a>
                    </li>
                    <li className="slider--item slider--item-center">
                      <a href="https://music.apple.com/us/album/everybody-loves-summer/1466347500">
                        <div className="slider--item-image">
                          <img src="img/ELSummer.jpg" alt="Metiew and Smith" />
                        </div>
                        <p className="slider--item-title">Everybody Loves Summer</p>
                        <p className="slider--item-description"></p>
                      </a>
                    </li>
                    <li className="slider--item slider--item-right">
                      <a href="https://music.apple.com/us/album/the-iso-ep-ii/1405378504">
                        <div className="slider--item-image">
                          <img src="img/isoEP2.jpg" alt="Alex Nowak" />
                        </div>
                        <p className="slider--item-title">Iso the EP 2</p>
                        <p className="slider--item-description"></p>
                      </a>
                    </li>
                    <li className="slider--item slider--item-right">
                      <a href="https://music.apple.com/us/album/the-iso-ep-ii/1405378504">
                        <div className="slider--item-image">
                          <img src="img/isoEP.jpg" alt="Alex Nowak" />
                        </div>
                        <p className="slider--item-title">Iso the EP</p>
                        <p className="slider--item-description"></p>
                      </a>
                    </li>
                  </ul>
                  <div className="slider--prev">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{enableBackground: 'new 0 0 150 118'}} xmlSpace="preserve">
                      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M561,1169C525,1155,10,640,3,612c-3-13,1-36,8-52c8-15,134-145,281-289C527,41,562,10,590,10c22,0,41,9,61,29
                c55,55,49,64-163,278L296,510h575c564,0,576,0,597,20c46,43,37,109-18,137c-19,10-159,13-590,13l-565,1l182,180
                c101,99,187,188,193,199c16,30,12,57-12,84C631,1174,595,1183,561,1169z" />
                      </g>
                    </svg>
                  </div>
                  <div className="slider--next">
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{enableBackground: 'new 0 0 150 118'}} xmlSpace="preserve">
                      <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                        <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                      </g>
                    </svg>
                  </div>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="about">

                <div className="about--banner">
                  <h2>YouTube<br />Videos<br /></h2>
                  <a href="https://www.youtube.com/channel/UCFSFAew1KSF1io3C4Nw0tLg">Channel
                    <span>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{enableBackground: 'new 0 0 150 118'}} xmlSpace="preserve">
                        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                          <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                        </g>
                      </svg>
                    </span>
                  </a>

                  {/* <img src="img/about-visual.png" alt="About Us" /> */}
                </div>
                {/* Div for biggest Youtube*/}
                <div className="premier">
                  <iframe width="400px" height="310px" src="https://www.youtube.com/embed/tYi6uCy9Hyw?autoplay=1&origin=https://youtu.be/tYi6uCy9Hyw;autoplay=1&mute=1">
                    </iframe>
                </ div>
                <div className="about--options">
                  <a href="https://youtu.be/ZCN23K1kzXI">
                    <iframe width="150px" height="75px" src="https://www.youtube.com/embed/ZCN23K1kzXI?autoplay=1&origin=https://youtu.be/ZCN23K1kzXI;autoplay=1&mute=1">
                    </iframe>
                    <h3>Hero</h3>
                  </a>
                  <a href="https://youtu.be/4YJ9NcUDUso">
                    <iframe width="150px" height="75px" src="https://www.youtube.com/embed/4YJ9NcUDUso?autoplay=1&origin=https://youtu.be/4YJ9NcUDUso;autoplay=1&mute=1">
                    </iframe>
                    <h3>Charlotte</h3>
                  </a>
                  <a href="https://youtu.be/d7MZpZhaMuk">
                    <iframe width="150px" height="75px" src="https://www.youtube.com/embed/d7MZpZhaMuk?autoplay=1&origin=https://youtu.be/d7MZpZhaMuk;autoplay=1&mute=1">
                    </iframe>
                    <h3>Late Night Thoughts</h3>
                  </a>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="hire">
                <h2>Enter Your Name and Email</h2>
                {/* checkout formspree.io for easy form setup */}
                <form className="work-request" action="https://formspree.io/xdooqywg" method="POST">
                  <div className="work-request--information">
                    <div className="information-name">
                      <input id="name" type="text" name="name" spellCheck="false" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="information-email">
                      <input id="email" type="email" name="_replyo" spellCheck="false" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <input type="submit" value="Send" />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul className="outer-nav">
      <li className="is-active">Home</li>
      <li><a href="https://isozahshop.myshopify.com/collections/all">Merch</a></li>
      <li>Projects</li>
      <li>Videos</li>
      <li>Book Me</li>
    </ul>
  </div>
  );
}

export default App;
