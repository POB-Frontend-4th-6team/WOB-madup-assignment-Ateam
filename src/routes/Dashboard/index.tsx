import TotalAd from './TotalAd'
import DashHeader from './dashHeader'
import styles from './dashboard.module.scss'
import Media from './Media'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <DashHeader />
      <div className={styles.boardContainer}>
        <TotalAd />
        <Media />
      </div>
    </div>
  )
}

export default Dashboard
