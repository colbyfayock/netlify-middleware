import { FaShoppingCart } from 'react-icons/fa';

import Section from 'components/Section';
import Container from 'components/Container';

import styles from './Nav.module.scss';

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Section className={styles.navSection}>
        <Container className={styles.navContainer}>
          <p className={styles.navName}>
            <a href="/">Space Jelly Shop</a>
          </p>
          <p className={styles.navCart}>
            <button>
              <FaShoppingCart />
              <span>$0.00</span>
            </button>
          </p>
        </Container>
      </Section>
    </nav>
  )
}

export default Nav;