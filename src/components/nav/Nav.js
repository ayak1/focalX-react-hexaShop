import './Nav.css'
import Logo from '../../imgs/Logo.png'
import NavItem from '../navItem/NavItem'

const Nav = () => {
    const navbarItems = ["Home","Men's", "Women's","Kid's","Pages","Features","Explore"];
    const navbarListItems = navbarItems.map((listItem) =>
    <NavItem><a href="#" className="nav-link">{listItem}</a></NavItem>
);

  return (
    <div className="nav-container">
    <div className="nav">
      <div className="nav-brand">
        <img src={Logo} alt='logo'/>
      </div>
      <ul className="navbar-nav">{navbarListItems}</ul>
    </div>
  </div>
  )
}

export default Nav