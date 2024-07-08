import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import imgLogo from "../../assets/image/logo.svg";
import imgUser from "../../assets/image/user.svg";
import CollapseSidebar from "./component/CollapseSidebar";
import apiMenu from "../../api/apiMenu";
import StoreKey from "../../constants/store-key";

function Sidebar() {
  const navigate = useNavigate();
  const cookie = new Cookies()
  const [isLogout, setIsLogout] = useState(false)
  const [menu, setMenu] = useState([])
  const user = JSON.parse(localStorage.getItem(StoreKey.USER))


  const handLogout = () => {
    localStorage.clear();
    cookie.remove("jwt_authentication")
    setIsLogout(true)
    navigate('/auth/login')
  }

  useEffect(() => {
    (async () => {
      try {
        const { data } = await apiMenu.getAll();
        console.log(data);
        setMenu(data)
      } catch (error) {
        if (error.response.data.status === 401) {
          navigate("/auth/login")
        }
      }
    })()
  }, [])


  return (
    <>
      {!isLogout && <div className="sidebar">
        {/* sidebar logo */}
        <a href="index.html" className="sidebar__logo">
          <img src={imgLogo} alt="" />
        </a>
        {/* end sidebar logo */}
        {/* sidebar user */}
        <div className="sidebar__user">
          <div className="sidebar__user-img">
            <img src={imgUser} alt="" />
          </div>
          <div className="sidebar__user-title">
            <span>{user.role}</span>
            <p className="text-capitalize">{user.username}</p>
          </div>
          <button className="sidebar__user-btn" type="button" onClick={handLogout}>
            <svg xmlns="http://www.w3.or  g/2000/svg" viewBox="0 0 24 24">
              <path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z" />
            </svg>
          </button>
        </div>
        {/* end sidebar user */}

        {/* sidebar nav */}
        <ul className="sidebar__nav">
          <li className="sidebar__nav-item">
            <Link to="/" className="sidebar__nav-link">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M10,13H3a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,10,13ZM9,20H4V15H9ZM21,2H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,21,2ZM20,9H15V4h5Zm1,4H14a1,1,0,0,0-1,1v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V14A1,1,0,0,0,21,13Zm-1,7H15V15h5ZM10,2H3A1,1,0,0,0,2,3v7a1,1,0,0,0,1,1h7a1,1,0,0,0,1-1V3A1,1,0,0,0,10,2ZM9,9H4V4H9Z" />
              </svg>{" "}
              Dashboard
            </Link>
          </li>
          {menu.length > 0 && menu.map((items, index) => {
            if (items.subMenu[0] !== null ) {
              return <CollapseSidebar data={items} key={index} />
            } else {
              return <li className="sidebar__nav-item" key={index}>
                <Link to={items.path} className="sidebar__nav-link">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    enableBackground="new 0 0 24 24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22,10.1c0.1-0.5-0.3-1.1-0.8-1.1l-5.7-0.8L12.9,3c-0.1-0.2-0.2-0.3-0.4-0.4C12,2.3,11.4,2.5,11.1,3L8.6,8.2L2.9,9C2.6,9,2.4,9.1,2.3,9.3c-0.4,0.4-0.4,1,0,1.4l4.1,4l-1,5.7c0,0.2,0,0.4,0.1,0.6c0.3,0.5,0.9,0.7,1.4,0.4l5.1-2.7l5.1,2.7c0.1,0.1,0.3,0.1,0.5,0.1v0c0.1,0,0.1,0,0.2,0c0.5-0.1,0.9-0.6,0.8-1.2l-1-5.7l4.1-4C21.9,10.5,22,10.3,22,10.1z M15.8,13.6c-0.2,0.2-0.3,0.6-0.3,0.9l0.7,4.2l-3.8-2c-0.1-0.1-0.3-0.1-0.5-0.1V5.7l1.9,3.8c0.1,0.3,0.4,0.5,0.8,0.5l4.2,0.6L15.8,13.6z" />
                  </svg>{" "}
                  {items.name}
                </Link>
              </li>
            }
          })}
        </ul>
        {/* end sidebar nav */}
      </div>}
    </>
  );
}


export default Sidebar;
