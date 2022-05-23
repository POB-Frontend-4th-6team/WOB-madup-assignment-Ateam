import { Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import AdManage from './AdManage'

const App = () => {
  return (
    <div className={styles.app}>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='adManage' element={<AdManage />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </div>
  )
}

export default App
