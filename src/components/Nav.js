import { Link } from 'react-router-dom';
import styles from './Nav.module.css'

function Nav() {
    return(
        <div className={styles.container}>
            <Link to={"/"}>
                <span className={styles.title}>NOTION-WIDGET-TEST</span>
            </Link>
        </div>
    );
}

export default Nav;