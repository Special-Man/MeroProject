import React from "react";
import {Link} from "react-router-dom";


const Sidebar = () => {
    return (
        <div class="sidebar">
        <ul className ="sidebar-nav">
            <li>

                <Link to="/Pages/UserManagement">
                    <a>Latest Movies & Series</a>
                </Link>
            </li>

            <li>
            <Link to="/Pages/Faq">
            <a>Movies</a>
                    </Link>
            </li>

            <li>
            <Link to="/Pages/Contact">
                    <a>Series</a>
                    </Link>
            </li>

            <li>
            <Link to="/Pages/About">
                    <a>About</a>
                    </Link>
            </li>
        </ul>
        </div>

    );
};

export default Sidebar;