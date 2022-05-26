import { useState } from 'react'
import { useMount } from 'react-use'
import Loading from 'routes/_components/Loading'

import TotalAd from './TotalAd'
import DashHeader from './dashHeader'
import styles from './dashboard.module.scss'
import Media from './Media'

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(false)
  useMount(() => {
    setIsLoading(true)
    const timeout = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timeout)
  })

  if (isLoading) return <Loading size='80px' />

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
