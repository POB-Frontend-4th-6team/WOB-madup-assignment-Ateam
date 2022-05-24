import { SpinnerCircular, SpinnerCircularProps } from 'spinners-react'
import styles from './loading.module.scss'

const Loading = (props: SpinnerCircularProps) => {
  return <SpinnerCircular {...props} secondaryColor='transparent' />
}

export default Loading
