import { SpinnerCircular, SpinnerCircularProps } from 'spinners-react'
import styles from './loading.module.scss'

const Loading = (props: SpinnerCircularProps) => {
  return (
    <div className={styles.loadingContainer}>
      <SpinnerCircular {...props} secondaryColor='transparent' />
    </div>
  )
}

export default Loading
