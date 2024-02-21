import { Link } from 'react-router-dom';
import tailLogo from '../../assets/tail.svg';
import styles from './header.module.css'

export default function SiteLogo() {
	const imgTitle = 'Tailwind';

	return (
		<>
			<Link to='/'>
				<img src={tailLogo} alt={imgTitle} className={styles.logo} />
			</Link>
		</>
	);
}
