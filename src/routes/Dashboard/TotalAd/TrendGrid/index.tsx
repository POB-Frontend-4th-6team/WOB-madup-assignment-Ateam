import styles from './trendGrid.module.scss'
import Item from './Item'
import { useEffect } from 'react'
import { getTrendDatas } from 'services/totalAd'

const TrendGrid = (): JSX.Element => {
  return (
    <div className={styles.grid}>
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <Item isIncreased key={`grid-item-${item}`} />
      ))}
    </div>
  )
}

export default TrendGrid
