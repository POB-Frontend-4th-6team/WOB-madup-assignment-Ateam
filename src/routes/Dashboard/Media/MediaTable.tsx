import styles from './media.module.scss'
import { IMediaLabel } from 'types/media'
import { getMediaTableData } from 'services/media'

interface IProps {
  mediaInfo: IMediaLabel[]
}

const MediaTable = ({ mediaInfo }: IProps) => {
  const tableHead = ['광고비', '매출', 'ROAS', '노출 수', '클릭 수', '클릭률 (CTR)', '클릭당 비용 (CPC)']

  const { mediaData, totalData } = getMediaTableData()

  const headTitle = tableHead.map((title, idx) => {
    const key = `hr-key-${idx}`
    return <th key={key}>{title}</th>
  })

  const mediaDatas = mediaInfo.map((media, mediaIdx) => {
    const trKey = `tr-key-${mediaIdx}`
    return (
      <tr key={trKey}>
        <th>{media.krName}</th>
        {mediaData[media.name].map((item, itemIdx) => {
          const tdKey = `td-key-${itemIdx}`
          return <td key={tdKey}>{Number(item.value.toFixed(2)).toLocaleString()}</td>
        })}
      </tr>
    )
  })

  const totalSum = totalData.map((item, itemIdx) => {
    const tdKey = `td-key-${itemIdx}`
    return <td key={tdKey}>{Number(item.value.toFixed(2)).toLocaleString()}</td>
  })

  return (
    <article className={styles.tableContainer}>
      <table>
        <thead>
          <tr>
            <td> </td>
            {headTitle}
          </tr>
        </thead>
        <tbody>
          {mediaDatas}
          <tr className={styles.totalSum}>
            <th>총계</th>
            {totalSum}
          </tr>
        </tbody>
      </table>
    </article>
  )
}

export default MediaTable
