import Dropdown from './Dropdown'

const DROPDOWN_ITEMS = ['매드업', 'ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출']

const Components = () => {
  const handleItemChange = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      <Dropdown size='normal' items={DROPDOWN_ITEMS} onItemChange={handleItemChange} />
    </div>
  )
}

export default Components
