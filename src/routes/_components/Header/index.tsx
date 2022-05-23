import { Alarm, Profile, Setting } from 'assets/svgs/madup'
import styles from './header.module.scss'

const Header = () => {
  return (
    <header>
      <div className={styles.container}>
        <ul>
          <li>
            <Alarm />
          </li>
          <li>
            <Setting />
          </li>
          <li>
            <Profile />
            <span>원티드님</span>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Header
