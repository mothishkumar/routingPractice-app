import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav>
    <div className="header-main">
      <div className="logo">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="image-logo"
        />
        <h1 className="header-heading">wave</h1>
      </div>
      <ul className="nav-menu">
        <li>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="nav-link" to="/contact">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
