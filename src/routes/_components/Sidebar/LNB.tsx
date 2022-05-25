import { NavLink } from 'react-router-dom'

import { cx } from 'styles'
import { NavIcon } from 'assets/svgs/madup'
import styles from './sidebar.module.scss'

const LNB = () => {
  return (
    <nav className={cx(styles.gnb, styles.box)}>
      <p className={styles.subTitle}>광고 센터</p>
      <ul>
        <li>
          <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <NavIcon className={styles.icon} />
            <span>대시보드</span>
          </NavLink>
        </li>
        <li>
          <NavLink to='adManage' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
            <NavIcon className={styles.icon} />
            <span>광고관리</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default LNB
