import TotalAd from './TotalAd'
import DashHeader from './dashHeader'
import styles from './dashboard.module.scss'
import Media from './Media'

const Dashboard = () => {
  return (
    <div className={styles.container}>
      <DashHeader />
      <TotalAd />
      <Media />
    </div>
  )
}

export default Dashboard
