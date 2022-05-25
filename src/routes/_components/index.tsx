import TrendGrid from 'routes/Dashboard/TotalAd/TrendGrid'
import ContentsContainer from './ContentsContainer'
import Dropdown from './Dropdown'
import Loading from './Loading'
import Modal from './Modal/ModalFrame'

const DROPDOWN_ITEMS = ['매드업', 'ROAS', '광고비', '노출 수', '클릭 수', '전환 수', '매출']
const MARK_COLORS = {
  매드업: '#111111',
  ROAS: '#4FADF7',
  광고비: '#525252',
  '노출 수': '#a5b5cc',
  '클릭 수': '#85DA47',
  '전환 수': '#deff84',
  매출: '#ff70c8',
}

const Components = () => {
  const handleItemChange = (item: string) => {
    console.log(item)
  }
  return (
    <div>
      <ContentsContainer>
        big
        <Dropdown size='big' items={DROPDOWN_ITEMS} onItemChange={handleItemChange} />
        normal
        <Dropdown size='normal' items={DROPDOWN_ITEMS} onItemChange={handleItemChange} />
        unbordered
        <Dropdown size='normal' items={DROPDOWN_ITEMS} onItemChange={handleItemChange} unbordered />
        marked
        <Dropdown size='big' items={DROPDOWN_ITEMS} onItemChange={handleItemChange} markColors={MARK_COLORS} />
        <Loading />
        <TrendGrid />
        Modal
        <Modal width='500px' height='300px'>
          <p>content</p>
        </Modal>
      </ContentsContainer>
    </div>
  )
}

export default Components
