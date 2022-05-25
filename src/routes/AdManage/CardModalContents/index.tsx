import styles from './cardModalContents.module.scss'
import store from 'store'

import { useState } from 'hooks'

const CardModalContents = () => {
  const [adTypeState, setAdTypeState] = useState('')
  const [titleState, setTitleState] = useState('web')
  const [budgetState, setBudgetState] = useState<number>()
  const [statusState, setStatusState] = useState('active')
  const [startDateState, setStartDateState] = useState('')
  const [endDateState, setEndDateState] = useState('')
  const [costState, setCostState] = useState<number>()
  const [convValueState, setConvValueState] = useState<number>()
  const [roasState, setRoasState] = useState<number>()

  const handleType = (e: any) => {
    setAdTypeState(e.currentTarget.value)
  }

  const handleTitle = (e: any) => {
    setTitleState(e.currentTarget.value)
  }

  const handleBudgetValue = (e: any) => {
    setBudgetState(e.currentTarget.value)
  }

  const handleStatus = (e: any) => {
    setStatusState(e.currentTarget.value)
  }

  const handleStartDate = (e: any) => {
    setStartDateState(e.currentTarget.value)
  }

  const handleEndDate = (e: any) => {
    setEndDateState(e.currentTarget.value)
  }

  const handleCostValue = (e: any) => {
    setCostState(e.currentTarget.value)
  }

  const handleConvValue = (e: any) => {
    setConvValueState(e.currentTarget.value)
  }

  const handleRoasValue = (e: any) => {
    setRoasState(e.currentTarget.value)
  }

  const handleAddNewCard = () => {
    const res = store.get('adList')
    const newItem = {
      id: undefined,
      adType: adTypeState,
      title: titleState,
      budget: budgetState,
      status: statusState,
      startDate: startDateState,
      endDate: endDateState,
      report: {
        cost: costState,
        convValue: convValueState,
        roas: roasState,
      },
    }

    const newItems = [...res, newItem]
    store.set('adList', newItems)
  }

  return (
    <>
      <form className={styles.modalContainer} onSubmit={handleAddNewCard}>
        <select onChange={handleType}>
          <option value='web'>Web</option>
          <option value='app'>App</option>
        </select>
        <input onChange={handleTitle} type='text' placeholder='Title' />
        <input onChange={handleBudgetValue} type='text' placeholder='Budget' />
        <select onChange={handleStatus}>
          <option value='active'>진행중</option>
          <option value='ended'>종료</option>
        </select>
        <input onChange={handleStartDate} type='text' placeholder='Start Date : YYYY-MM-DD' />
        {statusState === 'ended' && <input onChange={handleEndDate} type='text' placeholder='End Date : YYYY-MM-DD' />}
        <input onChange={handleCostValue} type='text' placeholder='Cost' />
        <input onChange={handleConvValue} type='text' placeholder='ConValue' />
        <input onChange={handleRoasValue} type='text' placeholder='Roas' />
      </form>
      <button type='button' onClick={handleAddNewCard} className={styles.addNewButton}>
        생성
      </button>
    </>
  )
}

export default CardModalContents
