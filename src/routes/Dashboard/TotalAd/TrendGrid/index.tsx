import { useEffect, useState } from 'react'
import BigNumber from 'bignumber.js'
import { getTrendDatas, getPrevTrendDatas } from 'services/totalAd'
import { useAppSelector } from 'hooks'
import { getStartDate } from 'states/startDate'
import { getEndDate } from 'states/endDate'
import formatNumber from 'utils/format'

import styles from './trendGrid.module.scss'
import Item from './Item'

interface Dataset {
  [key: string]: number
}

const ITEMS_INIT = [
  { key: 'roas', name: 'ROAS', value: '', isIncreased: true, diff: '' },
  { key: 'cost', name: '광고비', value: '', isIncreased: true, diff: '' },
  { key: 'imp', name: '노출 수', value: '', isIncreased: true, diff: '' },
  { key: 'click', name: '클릭 수', value: '', isIncreased: true, diff: '' },
  { key: 'conv', name: '전환 수', value: '', isIncreased: true, diff: '' },
  { key: 'sales', name: '매출', value: '', isIncreased: true, diff: '' },
]
const TrendGrid = (): JSX.Element => {
  const startDate = useAppSelector(getStartDate)
  const endDate = useAppSelector(getEndDate)
  const [items, setItems] = useState(ITEMS_INIT)

  useEffect(() => {
    if (!endDate || !startDate) return
    const trendDatasSum: Dataset = getTrendDatas(startDate, endDate)
    const prevTrendDatasSum: Dataset = getPrevTrendDatas(startDate, endDate)

    const newItems = ITEMS_INIT.map((item) => {
      const { key } = item
      const currentValue = trendDatasSum[key]
      const prevValue = prevTrendDatasSum[key]
      const isIncreased = currentValue >= prevValue
      const diff = formatNumber(new BigNumber(currentValue).minus(prevValue), key)
      const value = formatNumber(new BigNumber(currentValue), key)
      return { ...item, value, isIncreased, diff }
    })

    setItems(newItems)
  }, [endDate, startDate])

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
