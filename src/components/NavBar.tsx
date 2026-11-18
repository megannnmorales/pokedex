import { NavLink } from 'react-router'

export default function NavBar(){
    return(
        <nav>
            <ul>
                <li>
                    <NavLink to="/pokedex" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}>Pokedex</NavLink>
                </li>
                 <li>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")} end >home</NavLink>
                </li>
            </ul>
        </nav>
    )
}