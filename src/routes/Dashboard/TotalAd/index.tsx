import AdChart from './adChart'
import AdHeader from './adHeader'
import styles from './totalAd.module.scss'

const TotalAd = () => {
  return (
    <div className={styles.container}>
      <AdHeader />
      <div className={styles.main}>
        <p className={styles.mainTitle}>통합 광고 현황</p>
        <div className={styles.mainContainer}>
          <div className={styles.mainCard} />
          <AdChart />
        </div>
      </div>
    </div>
  )
}

export default TotalAd
