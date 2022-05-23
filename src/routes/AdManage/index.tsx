import styles from './adManage.module.scss'

import Card from './Card/index'

const AdManage = () => {
  return (
    <div className={styles.container}>
      <button type='button' className={styles.makeAdButton}>
        광고 만들기
      </button>
      <Card />
    </div>
  )
}

export default AdManage
