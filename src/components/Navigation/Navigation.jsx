import { NavLink } from "react-router-dom";
import styles from "../Navigation/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.NavBox}>
      <ul className={styles.NavList}>
        <li className={styles.NavLink}><NavLink to="/">Home</NavLink></li>
        <li className={styles.NavLink}><NavLink to="/movies">Movies</NavLink></li>
      </ul>
    </nav>
  );
}

export default Navigation;