import React from 'react';
import { Link } from "react-router-dom"
export const links = [
   {id: 1, name: "Home", path: "/"},
   {id: 2, name: "About", path: "/about"},
]

function Navabr(props) {
    return (
        <nav className='max-md:hidden mr-5'>
           {links.map(el => (
            <Link to={el.path} key={el.id} className="mx-6 font-semibold text_hover">{el.name}</Link>
           ))}
        </nav>
    );
}

export default Navabr;