import { useAppSelector, useAppDispatch } from 'hooks'

import { Alarm, Hamburger, Profile, Setting } from 'assets/svgs/madup'
import { getSidebarDrawer, setSidebar } from 'states/sidebar'
import styles from './header.module.scss'

const Header = () => {
  const sidebarDrawer = useAppSelector(getSidebarDrawer)
  const dispatch = useAppDispatch()

  const handleSidebarShow = () => {
    dispatch(setSidebar(!sidebarDrawer))
  }

  return (
    <header>
      <button type='button' onClick={handleSidebarShow} className={styles.hamburger}>
        <Hamburger />
      </button>
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
