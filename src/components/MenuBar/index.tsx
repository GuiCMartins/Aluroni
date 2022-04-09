import { ReactComponent as Logo } from 'assets/logo.svg';
import styles from './MenuBar.module.scss';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  const routes = [
    {
      label: 'Inicio',
      to: '/',
    },
    {
      label: 'Cardápio',
      to: '/cardapio',
    },
    {
      label: 'Sobre',
      to: '/sobre',
    },
  ];

  return (
    <nav className={styles.menu}>
      <Logo />
      <ul className={styles.menu__list}>
        {routes.map((route, index) => {
          return (
            <li key={index} className={styles.menu__link}>
              <Link to={route.to}>{route.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
