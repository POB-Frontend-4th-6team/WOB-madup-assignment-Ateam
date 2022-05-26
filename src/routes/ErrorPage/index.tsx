import styles from './errorPage.module.scss'

const ErrorPage = () => {
  return (
    <div className={styles.container}>
      <h1>404</h1>
      <p>주소가 잘못 되었습니다.</p>
    </div>
  )
}

export default ErrorPage
