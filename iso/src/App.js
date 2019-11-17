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
              <img src="img/logo.png" alt="Global" />
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
              <li><span>Projects</span></li>
              <li><span>About</span></li>
              <li><span>Contact</span></li>
              <li><span>Hire us</span></li>
            </ul>
          </nav>
          <ul className="l-main-content main-content">
            <li className="l-section section section--is-active">
              <div className="intro">
                <div className="intro--banner">
                  <h1>Iso<br />Uzamaki<br /></h1>
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
                        <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                      </a>
                    </li>
                    <li className="slider--item slider--item-center">
                      <a href="https://music.apple.com/us/album/everybody-loves-summer/1466347500">
                        <div className="slider--item-image">
                          <img src="img/ELSummer.jpg" alt="Metiew and Smith" />
                        </div>
                        <p className="slider--item-title">Everybody Loves Summer</p>
                        <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
                      </a>
                    </li>
                    <li className="slider--item slider--item-right">
                      <a href="https://music.apple.com/us/album/the-iso-ep-ii/1405378504">
                        <div className="slider--item-image">
                          <img src="img/isoEP.jpg" alt="Alex Nowak" />
                        </div>
                        <p className="slider--item-title">Iso the EP</p>
                        <p className="slider--item-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do.</p>
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
                  <h2>We<br />believe in<br />passionate<br />people</h2>
                  <a href="#0">Career
                    <span>
                      <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 118" style={{enableBackground: 'new 0 0 150 118'}} xmlSpace="preserve">
                        <g transform="translate(0.000000,118.000000) scale(0.100000,-0.100000)">
                          <path d="M870,1167c-34-17-55-57-46-90c3-15,81-100,194-211l187-185l-565-1c-431,0-571-3-590-13c-55-28-64-94-18-137c21-20,33-20,597-20h575l-192-193C800,103,794,94,849,39c20-20,39-29,61-29c28,0,63,30,298,262c147,144,272,271,279,282c30,51,23,60-219,304C947,1180,926,1196,870,1167z" />
                        </g>
                      </svg>
                    </span>
                  </a>
                  <img src="img/about-visual.png" alt="About Us" />
                </div>
                <div className="about--options">
                  <a href="#0">
                    <h3>Winners</h3>
                  </a>
                  <a href="#0">
                    <h3>Philosophy</h3>
                  </a>
                  <a href="#0">
                    <h3>History</h3>
                  </a>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="contact">
                <div className="contact--lockup">
                  <div className="modal">
                    <div className="modal--information">
                      <p>Pawia 5, 31-154 Kraków, Poland</p>
                      <a href="mailto:ouremail@gmail.com">ouremail@gmail.com</a>
                      <a href="tel:+148126287560">+48 12 628 75 60</a>
                    </div>
                    <ul className="modal--options">
                      <li><a href="#0">Bēhance</a></li>
                      <li><a href="#0">dribbble</a></li>
                      <li><a href="mailto:ouremail@gmail.com">Contact Us</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <li className="l-section section">
              <div className="hire">
                <h2>You want us to do</h2>
                {/* checkout formspree.io for easy form setup */}
                <form className="work-request">
                  <div className="work-request--options">
                    <span className="options-a">
                      <input id="opt-1" type="checkbox" defaultValue="app design" />
                      <label htmlFor="opt-1">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{enableBackground: 'new 0 0 150 111'}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        App Design
                      </label>
                      <input id="opt-2" type="checkbox" defaultValue="graphic design" />
                      <label htmlFor="opt-2">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{enableBackground: 'new 0 0 150 111'}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Graphic Design
                      </label>
                      <input id="opt-3" type="checkbox" defaultValue="motion design" />
                      <label htmlFor="opt-3">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{enableBackground: 'new 0 0 150 111'}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Motion Design
                      </label>
                    </span>
                    <span className="options-b">
                      <input id="opt-4" type="checkbox" defaultValue="ux design" />
                      <label htmlFor="opt-4">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{enableBackground: 'new 0 0 150 111'}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        UX Design
                      </label>
                      <input id="opt-5" type="checkbox" defaultValue="webdesign" />
                      <label htmlFor="opt-5">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{enableBackground: 'new 0 0 150 111'}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Webdesign
                      </label>
                      <input id="opt-6" type="checkbox" defaultValue="marketing" />
                      <label htmlFor="opt-6">
                        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 150 111" style={{enableBackground: 'new 0 0 150 111'}} xmlSpace="preserve">
                          <g transform="translate(0.000000,111.000000) scale(0.100000,-0.100000)">
                            <path d="M950,705L555,310L360,505C253,612,160,700,155,700c-6,0-44-34-85-75l-75-75l278-278L550-5l475,475c261,261,475,480,475,485c0,13-132,145-145,145C1349,1100,1167,922,950,705z" />
                          </g>
                        </svg>
                        Marketing
                      </label>
                    </span>
                  </div>
                  <div className="work-request--information">
                    <div className="information-name">
                      <input id="name" type="text" spellCheck="false" />
                      <label htmlFor="name">Name</label>
                    </div>
                    <div className="information-email">
                      <input id="email" type="email" spellCheck="false" />
                      <label htmlFor="email">Email</label>
                    </div>
                  </div>
                  <input type="submit" defaultValue="Send Request" />
                </form>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul className="outer-nav">
      <li className="is-active">Home</li>
      <li>Projects</li>
      <li>About</li>
      <li>Contact</li>
      <li>Book Me</li>
    </ul>
  </div>
  );
}

export default App;
