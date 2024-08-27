import "./SideBar.css";
import avatarImg from "../../assets/avatar.png";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatarImg} alt="Avatar Image" />
      <p className="sidebar__username">Name</p>
    </div>
  );
}

export default SideBar;
