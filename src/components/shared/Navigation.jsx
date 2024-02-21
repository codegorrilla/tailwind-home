import { Outlet, Link } from "react-router-dom"

export function Nav(){
    return(
        <ul className="flex place-content-end font-sans font-bold text-inherit">
            <li className="w-auto px-8 py-2 hover:underline">
                <Link to = '/'>Home</Link>
            </li>
            <li className="w-auto px-8 py-2 hover:underline">
                <Link to = '/about'>About</Link>
            </li>
            <li className="w-auto px-8 py-2 hover:underline">
                <Link to = '/about'>Marketplace</Link>
            </li>
            <li className="w-auto px-8 py-2 hover:underline">
                <Link to = '/about'>Company</Link>
            </li>
        </ul>
    )
}