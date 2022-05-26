import { useCallback, useState } from 'react'

type UseToggleReturn = [boolean, () => void, () => void, () => void]

const useToggle = (initialState = false): UseToggleReturn => {
  const [value, setValue] = useState(initialState)
  const toggle = useCallback(() => {
    setValue((prev) => !prev)
  }, [])
  const setTrue = useCallback(() => {
    setValue(true)
  }, [])
  const setFalse = useCallback(() => {
    setValue(false)
  }, [])
  return [value, toggle, setTrue, setFalse]
}

export default useToggle
