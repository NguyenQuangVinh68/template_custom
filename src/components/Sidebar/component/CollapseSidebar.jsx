import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown,AiFillBehanceCircle,AiOutlineCaretUp } from "react-icons/ai"

function CollapseSidebar({ data }) {

    const [dropdown, setDropdown] = useState(false)
    return (
        <li className="sidebar__nav-item" >
            <div className="row w-100">
                <div className="col-12">
                    <div className="dropdown_menu" style={{ cursor: "pointer" }} onClick={() => setDropdown((prev) => !prev)} >
                        <button className="sidebar__nav-link" aria-expanded={dropdown ? true : false} >
                            <AiFillBehanceCircle />
                            {data.name}
                        </button>
                        {!dropdown ? <AiFillCaretDown /> : <AiOutlineCaretUp /> }
                        
                    </div>

                </div>
                <div className="col-12" style={{paddingLeft:"50px"}}>
                    <ul className={` dropdown ${dropdown ? "show" : ""}`} id={data.path}>
                        {data.subMenu.map((item, index) => {
                            return <li className="mt-3" key={index}>
                                <Link to={item.path} className="sidebar__nav-link">
                                    {item.name}
                                </Link>
                            </li>
                        })}
                    </ul>
                </div>
            </div>
        </li>

    );
}

export default CollapseSidebar;