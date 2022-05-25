import { Routes, Route } from 'react-router-dom'

import styles from './routes.module.scss'
import Dashboard from './Dashboard'
import AdManage from './AdManage'
import Components from './_components'
import Header from './_components/Header'
import Sidebar from './_components/Sidebar'

const App = () => {
  return (
    <main className={styles.app}>
      <Header />
      <Sidebar />
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='adManage' element={<AdManage />} />
        <Route path='components' element={<Components />} />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </main>
  )
}

export default App
