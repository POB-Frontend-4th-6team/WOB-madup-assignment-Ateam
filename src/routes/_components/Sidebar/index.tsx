import { useAppSelector, useAppDispatch, useCallback, useMount, useEffect, useState } from 'hooks'
import { getSidebarDrawer, setSidebar } from 'states/sidebar'
import { setModal } from 'states/modal'
import store from 'store'

import LNB from './LNB'
import AddServiceField from './AddServiceField'
import Dropdown from '../Dropdown'
import Modal from '../Modal/ModalFrame'

import styles from './sidebar.module.scss'
import { cx } from 'styles'
import { Logo, GuideIcon, Close } from 'assets/svgs/madup'

const DROPDOWN_ITEMS: string[] = ['매드업']

const Sidebar = () => {
  const [items, setItems] = useState<string[]>(DROPDOWN_ITEMS)
  const sidebarDrawer = useAppSelector(getSidebarDrawer)
  const dispatch = useAppDispatch()

  const handleCloseSidebar = () => dispatch(setSidebar(!sidebarDrawer))

  const onItemChange = () => {}

  const handleclick = () => dispatch(setModal(true))

  const handleAddItem = useCallback((itemValue: string) => {
    setItems((prev) => [...prev, itemValue])
  }, [])

  useMount(() => {
    const arr = store.get('serviceField')
    if (arr) setItems(arr)
  })

  useEffect(() => {
    if (items !== DROPDOWN_ITEMS) {
      store.set('serviceField', items)
    }
  }, [items])

  return (
    <>
      <aside className={cx(styles.container, { [styles.show]: sidebarDrawer })}>
        <button type='button' className={styles.btn} onClick={handleCloseSidebar}>
          <Close />
        </button>
        <div className={styles.top}>
          <h2>
            <Logo />
          </h2>
          <div className={styles.box}>
            <p className={styles.subTitle}>서비스</p>
            <Dropdown items={items} size='big' onItemChange={onItemChange}>
              <button type='button' className={styles.addFieldBtn} onClick={handleclick}>
                서비스 추가하기
              </button>
            </Dropdown>
          </div>
          <LNB />
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
      <Modal width='400px' height='250px' text='서비스 추가하기'>
        <AddServiceField handleAddItem={handleAddItem} />
      </Modal>
    </>
  )
}

export default Sidebar
