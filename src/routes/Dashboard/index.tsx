import TotalAd from './TotalAd'
import DashHeader from './dashHeader'
import styles from './dashboard.module.scss'
import Media from './Media'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <DashHeader />
      <div className={styles.titleBox}>
        <p className={styles.title}>통합 광고 현황</p>
      </div>
      <TotalAd />
      <Media />
    </div>
  )
}

export default Dashboard
