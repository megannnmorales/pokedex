import { NavLink } from "react-router";

export default function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/pokedex"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Pokedex
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/team"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            end
          >
            My team
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
