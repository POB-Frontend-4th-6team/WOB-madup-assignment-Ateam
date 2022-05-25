import { Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import AdManage from './AdManage'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'
import ErrorPage from './ErrorPage'

const App = () => {
  return (
    <main className={styles.app}>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='adManage' element={<AdManage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </main>
  )
}

export default App
