import { useEffect, useState } from 'react'
import { getTrendDatas, getPrevTrendDatas } from 'services/totalAd'
import { useMount } from 'react-use'
import BigNumber from 'bignumber.js'
import { IDailyItem } from 'types/totalAd'

import styles from './trendGrid.module.scss'
import Item from './Item'

const ITEMS_INIT = [
  { key: 'roas', name: 'ROAS', value: 0, isIncreased: true, diff: 0 },
  { key: 'cost', name: '광고비', value: 0, isIncreased: true, diff: 0 },
  { key: 'imp', name: '노출 수', value: 0, isIncreased: true, diff: 0 },
  { key: 'click', name: '클릭 수', value: 0, isIncreased: true, diff: 0 },
  { key: 'conv', name: '전환 수', value: 0, isIncreased: true, diff: 0 },
  { key: 'sales', name: '매출', value: 0, isIncreased: true, diff: 0 },
]
interface Dataset {
  [key: string]: number
}
const TrendGrid = (): JSX.Element => {
  const [items, setItems] = useState(ITEMS_INIT)
  useMount(() => {
    const trendDatasSum: Dataset = getTrendDatas('2022-03-02', '2022-03-04')
    const prevTrendDatasSum: Dataset = getPrevTrendDatas('2022-03-02', '2022-03-04')
    const newItems = items.map((item) => {
      const { key } = item
      const value = trendDatasSum[key]
      const prevValue = prevTrendDatasSum[key]
      const isIncreased = value >= prevValue
      const diff = new BigNumber(value).minus(prevValue).toNumber()
      return { ...item, value, isIncreased, diff }
    })
    setItems(newItems)
  })
  return (
    <div className={styles.grid}>
      {items.map((item) => (
        <Item
          isIncreased={item.isIncreased}
          key={`grid-item-${item.key}`}
          name={item.name}
          value={item.value}
          diff={item.diff}
        />
      ))}
    </div>
  )
}

export default TrendGrid
