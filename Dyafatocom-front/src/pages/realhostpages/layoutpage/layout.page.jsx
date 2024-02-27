import SliderDownMenu from '../../../components/realhostComponenets/sliderdown/slider.down';
import  './layout.css';
import { Outlet, Link, useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation()
  const handleNotificationClick = (e)=>{
    e.preventDefault()
    document.querySelector('.notifications').classList.toggle('active');
  }
  return (
    <body>
    <header className='host-header'>
      <nav className="main-nav">
        <input type="checkbox" id="isChecked" />
        <label for="isChecked" className="menu-btn">
          <i className="fas fa-bars"></i>
        </label>
        <a href="/" className="logo"><img src="src/assets/logo.png" width="70" alt="" srcset="" /></a>
        <ul className="navlinks">
          <li><Link className={location.pathname !== "/" ? "" :"navlink active"} to="/">Home</Link></li>
          <li><Link className={location.pathname !== "/messages" ? "" :"navlink active"} to="/messages">Messages</Link></li>

          <li><a onClick={handleNotificationClick} href="">Notifications</a></li>
          <li><Link className={location.pathname !== "/profile" ? "" :"navlink active"} to="/profile">Profile</Link></li>
        </ul>
      </nav>
    </header>
    <Outlet/>
    <div className="notifications">
      <SliderDownMenu/>
    </div>
  </body>
  )
};

export default Layout;