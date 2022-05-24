import { VictoryChart, VictoryAxis, VictoryStack, VictoryBar, VictoryTheme } from 'victory'

import styles from './media.module.scss'
import { getMediaChartData, getMediaTableData } from 'services/media'

const Media = () => {
  const tickFormat = ['광고비', '매출', '노출 수', '클릭 수', '전환 수']
  const tableHead = ['광고비', '매출', 'ROAS', '노출 수', '클릭 수', '클릭률 (CTR)', '클릭당 비용 (CPC)']
  const mediaNames = ['google', 'facebook', 'naver', 'kakao']

  const { mediaPerData } = getMediaChartData()
  const { mediaData, totalData } = getMediaTableData()

  return (
    <div className={styles.container}>
      <VictoryChart theme={VictoryTheme.material} width={1000} domainPadding={{ x: 100, y: 0 }}>
        <VictoryAxis tickValues={tickFormat} tickFormat={tickFormat} />
        <VictoryAxis dependentAxis tickFormat={(x) => `${x}`} />
        <VictoryStack
          colorScale={['#AC8AF8', '#85DA47', '#4FADF7', '#FFEB00']}
          style={{
            data: { stroke: '#FFFFFF', strokeWidth: 1 },
          }}
        >
          <VictoryBar data={mediaPerData.google} barWidth={30} x='category' y='value' />
          <VictoryBar data={mediaPerData.naver} barWidth={30} x='category' y='value' />
          <VictoryBar data={mediaPerData.facebook} barWidth={30} x='category' y='value' />
          <VictoryBar data={mediaPerData.kakao} barWidth={30} x='category' y='value' />
        </VictoryStack>
      </VictoryChart>
      <div className={styles.tableContainer}>
        <table>
          <thead>
            <tr>
              <td> </td>
              {tableHead.map((title, idx) => {
                const key = `hr-key-${idx}`
                return <th key={key}>{title}</th>
              })}
            </tr>
          </thead>
          <tbody>
            {mediaNames.map((name, nameIdx) => {
              const trKey = `tr-key-${nameIdx}`
              return (
                <tr key={trKey}>
                  <th>{name}</th>
                  {mediaData[name].map((item, itemIdx) => {
                    const tdKey = `td-key-${itemIdx}`
                    return <td key={tdKey}>{Number(item.value.toFixed(2)).toLocaleString()}</td>
                  })}
                </tr>
              )
            })}
            <tr className={styles.totalSum}>
              <th>총계</th>
              {totalData.map((item, itemIdx) => {
                const tdKey = `td-key-${itemIdx}`
                return <td key={tdKey}>{Number(item.value.toFixed(2)).toLocaleString()}</td>
              })}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Media
