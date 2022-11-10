import { NavLink } from "react-router-dom"
import { home, explore, twitter, notifications, messages, bookmarks, lists, profile, more } from "./icon";
import './LeftSide.scss'

 
const LeftSide = () => {
  return (
    <div className="left-side">
    <div className="container">
      <header>{twitter}</header>

      <nav>
        <NavLink to="/">
          <span>{home} Home</span>
        </NavLink>
        <NavLink to="/explore">
          <span>{explore} Explore</span>
        </NavLink>
        <NavLink to="/notifications">
          <span>{notifications} Notifications</span>
        </NavLink>
        <NavLink to="/messages">
          <span>{messages} Messages</span>
        </NavLink>
        <NavLink to="/bookmarks">
          <span>{bookmarks} Bookmarks</span>
        </NavLink>
        <NavLink to="/lists">
          <span>{lists} Lists</span>
        </NavLink>
        <NavLink to="/profile">
          <span>{profile} Profile</span>
        </NavLink>
        <button className="more">
          <span>{more} More</span>
        </button>
      </nav>

      <button className="tweet">Tweet</button>

      <footer>
        <button className="account">
          <div className="photo">
            <img
              alt="Ebenezer Don"
              src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
            />
          </div>
          <div>
            <div className="name">Ebenezer Don</div>
            <div className="username">@ebenezerDN</div>
          </div>
        </button>
      </footer>
    </div>
  </div>
  )
}

export default LeftSide