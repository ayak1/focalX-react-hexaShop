import './NavItem.css'

const NavItem = (props) => {
  return (
    <div>
        <li class="nav-item">{props.children}</li>
    </div>
  )
}

export default NavItem