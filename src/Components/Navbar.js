import { useState } from "react";
import { Link } from "react-router-dom";
import "../Assets/navbar.css";
import { menu } from '../Assets/menu.png'

const Navbar = () => {
   const [open, setOpen] = useState(false);

   const menuData = [
      { id: 1, path: '/', title: "Home" },
      { id: 2, path: '/Teams', title: "Teams" },
      { id: 3, path: '/Standings', title: "Standings" },
      { id: 4, path: '/Merch', title: "Merch" },
      { id: 5, path: '/Cart', title: "Cart" },
      { id: 6, path: '/Contact', title: "Contact" },
   ]

   return (
      <nav className="groupy">
         <div className="burger" onClick={() => setOpen(!open)}>
            <img src={require("../Assets/menu.png")} className="menu-img" />
         </div>
         <div className={open ? "links open" : "links"}>
            {menuData.map((value) =>
               <Link key={value.id} to={value.path} onClick={() => setOpen(false)}>{value.title}</Link>
            )}
         </div>
      </nav>
   );
};
export default Navbar;
