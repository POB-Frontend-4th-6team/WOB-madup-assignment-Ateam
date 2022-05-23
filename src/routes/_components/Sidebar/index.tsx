import cx from 'classnames'
import { NavLink } from 'react-router-dom'

import { useAppSelector, useEffect, useAppDispatch, useState, useMount } from 'hooks'
import { getSidebarDrawer, setSidebar } from 'states/sidebar'
import { DashBoard, AdManage, Logo, GuideIcon, Close } from 'assets/svgs/madup'
import styles from './sidebar.module.scss'

const Sidebar = () => {
  const [closeBtn, setCloseBtn] = useState<Boolean>(false)
  const sidebarDrawer = useAppSelector(getSidebarDrawer)
  const dispatch = useAppDispatch()

  const handleClose = () => dispatch(setSidebar(!sidebarDrawer))

  const handleResize = () => {
    const target = window.innerWidth
    target < 768 ? setCloseBtn(true) : setCloseBtn(false)
  }

  const setBtn = () => (window.innerWidth < 768 ? setCloseBtn(true) : setCloseBtn(false))

  useMount(() => setBtn())

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return (
    <aside className={cx(styles.container, { [styles.show]: sidebarDrawer })}>
      <button type='button' className={cx(styles.btn, { [styles.show]: closeBtn })} onClick={handleClose}>
        <Close />
      </button>
      <div className={styles.top}>
        <h2>
          <Logo />
        </h2>
        <div className={styles.box}>
          <p className={styles.subText}>서비스</p>
          <div className={styles.dropdown} />
        </div>
        <nav className={cx(styles.gnb, styles.box)}>
          <p className={styles.subText}>광고 센터</p>
          <ul>
            <li>
              <NavLink to='/' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <DashBoard className={styles.icon} />
                <span>대시보드</span>
              </NavLink>
            </li>
            <li>
              <NavLink to='adManage' className={({ isActive }) => cx({ [styles.isActive]: isActive })}>
                <AdManage className={styles.icon} />
                <span>광고관리</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.bottom}>
        <div className={styles.guideBox}>
          <GuideIcon />
          <p className={styles.text}>
            레버 이용가이드
            <br />
            <span>시작하기 전에 알아보기</span>
          </p>
        </div>
        <p className={styles.serviceGuide}>
          레버는 함께 만들어 갑니다
          <br />
          <span>이용약관</span>
        </p>
      </div>
    </aside>
  )
}

export default Sidebar
