import { Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import AdManage from './AdManage'
import Sidebar from './_components/Sidebar'

const App = () => {
  return (
    <main className={styles.app}>
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='adManage' element={<AdManage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </main>
  )
}

export default App
