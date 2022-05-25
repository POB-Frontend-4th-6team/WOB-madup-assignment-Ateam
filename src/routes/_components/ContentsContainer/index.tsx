import { ReactNode } from 'react'
import styles from './contentsContainer.module.scss'

interface Props {
  children: ReactNode
}
const ContentsContainer = ({ children }: Props) => {
  return <div className={styles.container}>{children}</div>
}

export default ContentsContainer
