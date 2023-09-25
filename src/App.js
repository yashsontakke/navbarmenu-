import logo from './logo.svg';
import './App.css';
import { myFunction } from './logic';
import Navigation from './Navigation';

function App() {
  return (
    <nav>
    <div className="navbar">
      <i className='bx bx-menu'></i>
      <div className="logo"><a href="#">CodingLab</a></div>
      <div className="nav-links">
        <div className="sidebar-logo">
          <span className="logo-name">CodingLab</span>
          <i className='bx bx-x' ></i>
        </div>
        <ul className="links">
          <li><a href="#">HOME</a></li>
          <li>
            <a href="#">HTML & CSS</a>
            <i className='bx bxs-chevron-down htmlcss-arrow arrow'></i>
            <ul className="htmlCss-sub-menu sub-menu">
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Login Forms</a></li>
              <li><a href="#">Card Design</a></li>
              <li className="more">
                <span>
                  <a href="#">More</a>
                  <i className='bx bxs-chevron-right arrow more-arrow'></i>
                </span>
                <ul className="more-sub-menu sub-menu">
                  <li><a href="#">Neumorphism</a></li>
                  <li><a href="#">Pre-loader</a></li>
                  <li><a href="#">Glassmorphism</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">JAVASCRIPT</a>
            <i className='bx bxs-chevron-down js-arrow arrow'></i>
            <ul className="js-sub-menu sub-menu">
              <li><a href="#">Dynamic Clock</a></li>
              <li><a href="#">Form Validation</a></li>
              <li><a href="#">Card Slider</a></li>
              <li><a href="#">Complete Website</a></li>
            </ul>
          </li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">CONTACT US</a></li>
        </ul>
      </div>
      <div className="search-box">
        <i className='bx bx-search'></i>
        <div className="input-box">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
    </div>
  </nav>
  );
}

export default App;
