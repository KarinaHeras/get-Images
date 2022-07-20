
import { ArrowRightCircle } from 'react-feather';
import styles from './Footer.module.css'

const Footer = () => {

    return (
      <footer className={styles.footer}>
        
          Powered by{' '}
          <span className={styles.logo}>
          <ArrowRightCircle style={{color: 'red', fontSize: '50px'}}/>
          </span>
            <h4>Karina Heras</h4>
      </footer>
    )
  }
  
  export default Footer;