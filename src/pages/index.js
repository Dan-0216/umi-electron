import styles from './index.css';
import { NavLink } from 'umi'
export default function() {
  return (
    <div className={styles.normal}>
      hi！ this is umi electron
      <NavLink to="/list">list</NavLink>
    </div>
  );
}
